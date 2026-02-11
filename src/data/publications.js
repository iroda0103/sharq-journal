// Nashrlar ma'lumotlari - keyinchalik backenddan olinadi
// Publication data - will be fetched from backend later

export const publications = [
  {
    id: 1,
    title: "1-son (Yanvar-Mart)",
    year: 2026,
    date: "19.01.2026",
    articlesCount: 28,
    pages: 240,
    views: 1870,
    likes: 80,
    downloads: 10,
    cover: "/img/journal_bg.jpg",
    file: "/files/Jurnal.pdf",
    issn: "",
    // issn: "2181-4430",
  },
];

// Keyinchalik API dan olish uchun tayyor funksiyalar

export function getPublications() {
  // TODO: Replace with API call: return axios.get('/api/publications')
  return Promise.resolve([...publications]);
}

export function getPublicationsByYear(year) {
  return Promise.resolve(
    publications.filter((p) => p.year === Number(year))
  );
}

export function getPublicationById(id) {
  // TODO: Replace with API call: return axios.get(`/api/publications/${id}`)
  const pub = publications.find((p) => p.id === Number(id));
  return Promise.resolve(pub || null);
}

export function getYears() {
  const years = [...new Set(publications.map((p) => p.year))].sort(
    (a, b) => b - a
  );
  return Promise.resolve(years);
}
