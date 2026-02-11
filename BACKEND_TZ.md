# Backend TZ — "Sharq University" Ilmiy Jurnal Platformasi

## Texnologiya steki (tavsiya)

| Qatlam | Texnologiya |
|--------|------------|
| Framework | Django REST Framework / FastAPI |
| DB | PostgreSQL |
| Auth | JWT (access + refresh token) |
| File storage | S3 yoki local media/ |
| Search | PostgreSQL FTS yoki Elasticsearch |

---

## 1. Data Modellari

### 1.1 User (Foydalanuvchi)

| Field | Type | Note |
|-------|------|------|
| id | UUID / BigInt | PK |
| first_name | string(100) | required |
| last_name | string(100) | required |
| email | string | unique, required |
| phone | string(20) | nullable |
| password | hashed string | required |
| organization | string(255) | nullable |
| position | string(255) | nullable |
| role | enum | `author`, `reviewer`, `editor`, `admin` |
| avatar | file/url | nullable |
| is_active | bool | default true |
| created_at | datetime | auto |

### 1.2 Category (Yo'nalish)

| Field | Type | Note |
|-------|------|------|
| id | int | PK |
| name_uz | string(200) | required |
| name_en | string(200) | nullable |
| name_ru | string(200) | nullable |
| slug | string | unique |

### 1.3 Publication (Nashr/Son)

| Field | Type | Note |
|-------|------|------|
| id | int | PK |
| title | string(300) | required |
| year | int | required |
| date | date | nashr sanasi |
| pages | int | sahifalar soni |
| cover | image/url | muqova rasmi |
| is_published | bool | default false |
| created_at | datetime | auto |

### 1.4 Article (Maqola)

| Field | Type | Note |
|-------|------|------|
| id | int | PK |
| title | string(500) | required |
| abstract_uz | text | required |
| abstract_en | text | nullable |
| category | FK → Category | required |
| publication | FK → Publication | nullable (tayinlanmagan bo'lishi mumkin) |
| language | enum | `uz`, `en`, `ru` |
| pages | string(20) | "12-24" format |
| status | enum | `pending`, `under_review`, `accepted`, `rejected`, `published` |
| views_count | int | default 0 |
| downloads_count | int | default 0 |
| manuscript_file | file | PDF, required |
| supplementary_files | JSON/relation | qo'shimcha fayllar |
| publish_date | date | nullable |
| created_at | datetime | auto |
| updated_at | datetime | auto |

### 1.5 ArticleAuthor (Maqola-Muallif bog'lanishi)

| Field | Type | Note |
|-------|------|------|
| id | int | PK |
| article | FK → Article | required |
| user | FK → User | nullable (tizimda bo'lmasa) |
| full_name | string(200) | required |
| is_corresponding | bool | default false |
| order | int | tartib raqami |

### 1.6 Keyword (Kalit so'z)

| Field | Type | Note |
|-------|------|------|
| id | int | PK |
| name | string(100) | unique |

**Article ↔ Keyword** — M2M (ManyToMany) relation

### 1.7 EditorialBoardMember (Tahririyat a'zosi)

| Field | Type | Note |
|-------|------|------|
| id | int | PK |
| name | string(200) | required |
| degree | string(200) | ilmiy daraja |
| position | string(300) | lavozim |
| organization | string(300) | tashkilot |
| specialization | string(300) | nullable |
| email | string | nullable |
| bio | text | nullable |
| photo | image/url | nullable |
| is_chief | bool | default false |
| order | int | tartib |

### 1.8 SiteStatistic (Statistika — keshlanadi)

| Field | Type | Note |
|-------|------|------|
| total_articles | int | |
| total_authors | int | |
| total_publications | int | |
| total_countries | int | |

> Bu alohida jadval yoki cache/computed qiymat bo'lishi mumkin.

---

## 2. API Endpointlari

### 2.1 Auth

| Method | Endpoint | Tavsif |
|--------|----------|--------|
| POST | `/api/auth/register/` | Ro'yxatdan o'tish |
| POST | `/api/auth/login/` | Login → access + refresh token |
| POST | `/api/auth/refresh/` | Token yangilash |
| POST | `/api/auth/logout/` | Logout (refresh tokenni bekor qilish) |

### 2.2 Users

| Method | Endpoint | Tavsif |
|--------|----------|--------|
| GET | `/api/users/me/` | Joriy foydalanuvchi profili |
| PATCH | `/api/users/me/` | Profilni tahrirlash |
| GET | `/api/users/` | Foydalanuvchilar ro'yxati (admin) |
| GET | `/api/users/:id/` | Bitta foydalanuvchi (admin) |

### 2.3 Categories

| Method | Endpoint | Tavsif |
|--------|----------|--------|
| GET | `/api/categories/` | Barcha kategoriyalar |

### 2.4 Publications (Nashrlar)

| Method | Endpoint | Tavsif |
|--------|----------|--------|
| GET | `/api/publications/` | Nashrlar ro'yxati |
| GET | `/api/publications/:id/` | Bitta nashr + uning maqolalari |
| GET | `/api/publications/years/` | Mavjud yillar ro'yxati |
| POST | `/api/publications/` | Yangi nashr yaratish (admin) |
| PATCH | `/api/publications/:id/` | Nashrni tahrirlash (admin) |
| DELETE | `/api/publications/:id/` | Nashrni o'chirish (admin) |

**Query params:** `?year=2024`

### 2.5 Articles (Maqolalar)

| Method | Endpoint | Tavsif |
|--------|----------|--------|
| GET | `/api/articles/` | Maqolalar ro'yxati (filtrlash, saralash, pagination) |
| GET | `/api/articles/:id/` | Bitta maqola to'liq ma'lumot |
| GET | `/api/articles/:id/download/` | PDF yuklab olish (downloads_count++) |
| GET | `/api/articles/popular/` | Mashhur maqolalar |
| GET | `/api/articles/latest/` | Eng so'nggi maqolalar |
| POST | `/api/articles/submit/` | Maqola yuborish (multipart/form-data) |
| PATCH | `/api/articles/:id/` | Maqolani tahrirlash (admin/author) |
| DELETE | `/api/articles/:id/` | Maqolani o'chirish (admin) |

**Query params:**
- `?category=slug` — kategoriya bo'yicha
- `?year=2024` — yil bo'yicha
- `?search=kalit_soz` — qidiruv
- `?sort=date|views|title` — saralash
- `?page=1&page_size=10` — pagination

### 2.6 Article Submission (Maqola yuborish)

`POST /api/articles/submit/` — `multipart/form-data`

```json
{
  "first_name": "Ali",
  "last_name": "Valiyev",
  "email": "ali@example.com",
  "phone": "+998901234567",
  "organization": "TDIU",
  "position": "Dotsent",
  "title": "Maqola nomi",
  "category": 1,
  "language": "uz",
  "abstract_uz": "...",
  "keywords": ["iqtisodiyot", "raqamlashtirish", ...],
  "manuscript": <file>,
  "supplementary": [<file>, ...],
  "agreement": true
}
```

### 2.7 Editorial Board (Tahririyat)

| Method | Endpoint | Tavsif |
|--------|----------|--------|
| GET | `/api/editorial-board/` | Tahririyat hay'ati a'zolari |
| POST | `/api/editorial-board/` | A'zo qo'shish (admin) |
| PATCH | `/api/editorial-board/:id/` | Tahrirlash (admin) |
| DELETE | `/api/editorial-board/:id/` | O'chirish (admin) |

### 2.8 Dashboard (Admin panel)

| Method | Endpoint | Tavsif |
|--------|----------|--------|
| GET | `/api/dashboard/stats/` | Statistika (maqolalar soni, pending, etc.) |
| GET | `/api/dashboard/pending-articles/` | Ko'rib chiqilayotgan maqolalar |
| POST | `/api/articles/:id/approve/` | Maqolani tasdiqlash |
| POST | `/api/articles/:id/reject/` | Maqolani rad etish |

### 2.9 Statistics (Umumiy)

| Method | Endpoint | Tavsif |
|--------|----------|--------|
| GET | `/api/stats/` | Sayt statistikasi (bosh sahifa uchun) |

### 2.10 Search

| Method | Endpoint | Tavsif |
|--------|----------|--------|
| GET | `/api/search/?q=text` | Global qidiruv (maqolalar, mualliflar) |

---

## 3. Autentifikatsiya va Ruxsatlar

| Role | Huquqlari |
|------|----------|
| **Anonim** | GET endpointlar, maqola yuborish |
| **Author** | O'z maqolalarini ko'rish/tahrirlash, profil |
| **Reviewer** | Maqolalarni ko'rib chiqish |
| **Editor** | Maqolalarni tasdiqlash/rad etish, nashrlarni boshqarish |
| **Admin** | To'liq CRUD, foydalanuvchilarni boshqarish |

---

## 4. Pagination formati

```json
{
  "count": 150,
  "page": 1,
  "page_size": 10,
  "total_pages": 15,
  "results": [...]
}
```

---

## 5. Fayl yuklash talablari

| Parametr | Qiymat |
|----------|--------|
| Max manuscript hajmi | 10 MB |
| Ruxsat etilgan formatlar | PDF, DOC, DOCX |
| Max supplementary fayl | 5 MB har biri |
| Max supplementary soni | 5 ta |

---

## 6. i18n — Ko'p tillilik

Response'larda til bo'yicha ma'lumot qaytarish:

```
GET /api/articles/?lang=uz
```

Yoki `Accept-Language: uz` header orqali. Server shunga mos `name_uz`, `name_en`, `name_ru` fieldlardan kerakligini qaytaradi.
