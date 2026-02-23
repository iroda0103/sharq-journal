    // Maqola pdf ma'lumotlari - keyinchalik backenddan olinadi
    // Article data - will be fetched from backend later

    // Jurnal konfiguratsiyasi - Crossref va SEO uchun
    export const journalConfig = {
      title: {
        uz: "Sharq Universiteti Jurnali",
        ru: "Журнал Шаркского университета",
        en: "Journal of Sharq University",
      },
      titleEn: "Journal of Sharq University",
      abbreviation: "J. Sharq Univ.",
      publisher: "Sharq Universiteti",
      issn: "3093-9062",
      doiPrefix: "", // Crossref dan olingandan keyin qo'shiladi, masalan: "10.12345"
      siteUrl: "https://journal.sharquniversity.uz", // Sayt domeni - deploy qilinganda o'zgartiring
    };

    export const articles = [
      {
        id: 1,
        slug: "labor-market-development-trends-prospects-and-role-in-the-field-of-pensions",
        doi: "",
        volume: 1,
        issue: 1,
        title: {
          uz: "",
          ru: "",
          en: "Labor market development trends, prospects and role in the field of pensions",
        },
        authors: "O'roqov Mamurali Odil o'g'li",
        category: "economics",
        year: "2026",
        abstract: {
          uz: "This article presents a comprehensive socio-economic analysis of the labor force and its contribution to gross domestic product (GDP) growth, grounded in relevant theoretical frameworks. Using statistical data, the study examines the formation and development of the pension system, its economic implications for the state budget, and the rationale behind increasing the retirement age. Particular attention is paid to assessing the future prospects of the labor force and their role in ensuring sustainable economic growth. Based on empirical analysis, the article identifies practical approaches and policy directions aimed at enhancing economic development through the effective utilization of labor resources and the improvement of pension system sustainability.",
          ru: "",
          en: "",
        },
        pages: "8-17",
        publishDate: "19.01.2026",
        views: 253,
        likes: 6,
        downloads: 198,
        language: "English",
        keywords: {
          uz: [],
          ru: [],
          en: ["Labor force", "socio-economic analysis", "GDP growth", "pension system", "state budget", "retirement age", "economic sustainability", "demographic factors", "labor resources", "economic development"],
        },
        file: "/files/Maqola pdf/Ma'murali-new article_19.01.2026.pdf",
      },
      {
        id: 2,
        slug: "opyt-smi-navoiyskoy-oblasti-v-osveshchenii-sotsialno-ekonomicheskikh-protsessov",
        doi: "",
        volume: 1,
        issue: 1,
        title: {
          uz: "",
          ru: "Опыт СМИ Навоийской области в освещении социально-экономических процессов",
          en: "",
        },
        authors: "Azizbek Ruzimurodov Shonazarovich",
        category: "economics",
        year: "2026",
        abstract: {
          uz: `Mazkur tadqiqotda Navoiy viloyati ommaviy axborot 
  vositalarining hududiy axborot makonida ijtimoiy-iqtisodiy jarayonlarni yoritish 
  bo‘yicha tajribasi tahlil etilgan. Ishda hududiy ommaviy axborot vositalarining dolzarb 
  ijtimoiy muammolarni yoritish, jamoatchilik fikrini shakllantirish, ijtimoiy-iqtisodiy 
  rivojlanishga axborot ta’siri borasidagi faoliyati o‘rganilgan. Tadqiqot, shuningdek, 
  mahalliy matbuot, televidenie va onlayn ommaviy axborot vositalarida ijtimoiyiqtisodiy mavzularni yoritishning xususiyatlari, usullari va samaradorligini o'rganadi. 
  Tadqiqot natijalari mintaqaviy ommaviy axborot vositalari faoliyatini takomillashtirish 
  va mintaqaviy axborot siyosatini ishlab chiqish uchun ilmiy va amaliy ahamiyatga ega`,
          ru: `В данном исследовании анализируется опыт средств массовой 
  информации Навоийской области в освещении социально-экономических 
  процессов в региональном информационном пространстве. Работа изучает 
  вопросы деятельности региональных СМИ в освещении актуальных проблем 
  общества, формировании общественного мнения и информационном влиянии на 
  социально-экономическое развитие. Также раскрываются особенности, методы 
  и эффективность освещения социально-экономических тем в местной прессе, на 
  телевидении и в онлайн-изданиях. Результаты исследования имеют научное и 
  практическое значение для совершенствования деятельности региональных 
  СМИ и разработки региональной информационной политики.`,
          en: `This study analyzes the experience of Navoi region media in covering 
  socio-economic processes in the regional information space. The work examines the 
  activities of regional media in covering current social issues, shaping public opinion, 
  and the informational influence on socio-economic development. The study also 
  explores the characteristics, methods, and effectiveness of covering socioeconomic 
  topics in the local press, television, and online media. The study's findings have 
  scientific and practical implications for improving regional media operations and 
  developing regional information policy.`,
        },
        pages: "18-30",
        publishDate: "19.01.2026",
        views: 198,
        likes: 12,
        downloads: 156,
        language: "Русский",
        keywords: {
          uz: ["hududiy axborot maydoni", "ommaviy axborot vositalari", "Navoiy viloyati", "ijtimoiy-iqtisodiy jarayonlar", "hududiy rivojlanish", "jamoatchilik fikri", "mahalliy ommaviy axborot vositalari", "axborot siyosati"],
          ru: ["региональное информационное пространство", "средства массовой информации", "Навоийская область", "социально-экономические процессы", "региональное развитие", "общественное мнение", "местные СМИ", "информационная политика"],
          en: ["regional information space", "mass media", "Navoi region", "socio-economic processes", "regional development", "public opinion", "local media", "information policy"],
        },
        file: "/files/Maqola pdf/A.Ruzimurodov.pdf",
      },
      {
        id: 3,
        slug: "qishloq-xojaligida-risklarni-boshqarish-turlari-va-tasir-etuvchi-omillar",
        doi: "",
        volume: 1,
        issue: 1,
        title: {
          uz: "Qishloq xo'jaligida risklarni boshqarish: turlari va ta'sir etuvchi omillar",
          ru: "",
          en: "",
        },
        authors: "Xamrokulov Sindor Qahramonovich",
        category: "economics",
        year: "2026",
        abstract: {
          uz: `Mazkur maqolada qishloq xo‘jaligi sohasida yuzaga 
  keladigan risklarning iqtisodiy mohiyati, ularning asosiy turlari hamda 
  shakllanishiga ta’sir etuvchi omillar ilmiy jihatdan tahlil qilinadi. Tadqiqotda 
  agrar ishlab chiqarish jarayoniga xos bo‘lgan tabiiy-iqlim, bozor, moliyaviy, 
  institutsional va texnologik risklar tizimli yondashuv asosida tasniflanadi. 
  Statistik ma’lumotlar va nazariy qarashlar asosida risklarning qishloq xo‘jaligi 
  ishlab chiqarish samaradorligiga ta’siri baholanadi. Shuningdek, risklarni 
  boshqarish mexanizmlarini takomillashtirish, ularni kamaytirish va oldini olish 
  bo‘yicha amaliy tavsiyalar ishlab chiqiladi. Tadqiqot natijalari agrar sohada 
  barqaror rivojlanishni ta’minlash, ishlab chiqarish samaradorligini oshirish hamda 
  risklarni boshqarish bo‘yicha qarorlar qabul qilish jarayonini ilmiy asoslashda 
  muhim ahamiyat kasb etadi`,
          ru: "",
          en: "",
        },
        pages: "31-36",
        publishDate: "19.01.2026",
        views: 176,
        likes: 8,
        downloads: 134,
        language: "O'zbek",
        keywords: {
          uz: ["Qishloq xo‘jaligi","agrar risklar", "risklarni boshqarish", "risk turlari", "ta’sir etuvchi omillar", "agrar ishlab chiqarish", "iqtisodiy barqarorlik", "bozor va iqlim risklari"],
          ru: [],
          en: [],
        },
        file: "/files/Maqola pdf/Xamrakulov S.Q._Ilmi_maqola_19.01.2026.pdf",
      },
      {
        id: 4,
        slug: "navoiy-viloyatida-yengil-va-oziq-ovqat-sanoatining-mustaqillik-yillaridagi",
        doi: "",
        volume: 1,
        issue: 1,
        title: {
          uz: "NAVOIY VILOYATIDA YENGIL VA OZIQ-OVQAT SANOATINING MUSTAQILLIK YILLARIDAGI RIVOJLANISHI: HOLATI, MUAMMOLARI VA ISTIQBOLLARI",
          ru: `РАЗВИТИЕ ЛЁГКОЙ И ПИЩЕВОЙ ПРОМЫШЛЕННОСТИ В 
  НАВОИЙСКОЙ ОБЛАСТИ В ГОДЫ НЕЗАВИСИМОСТИ: 
  СОСТОЯНИЕ, ПРОБЛЕМЫ И ПЕРСПЕКТИВЫ`,
          en: `DEVELOPMENT OF THE LIGHT AND FOOD INDUSTRIES IN THE 
  NAVOI REGION DURING THE YEARS OF INDEPENDENCE: CURRENT 
  STATE, PROBLEMS, AND PROSPECTS`,
        },
        authors: "Xoliqulov Shuxratjon",
        category: "history",
        year: "2026",
        abstract: {
          uz: `Mazkur maqolada mustaqillik yillarida Navoiy viloyatida yengil 
  va oziq-ovqat sanoatining rivojlanish jarayoni tarixiy-iqtisodiy jihatdan tahlil 
  qilinadi. Soha taraqqiyotiga ta’sir etgan institutsional islohotlar, investitsion 
  jarayonlar, ishlab chiqarish tarkibidagi o‘zgarishlar hamda innovatsion 
  modernizatsiya masalalari ilmiy manbalar va normativ-huquqiy hujjatlar asosida 
  yoritiladi. Shuningdek, mavjud muammolar aniqlanib, ularni bartaraf etish va 
  tarmoqning barqaror rivojlanishini ta’minlash bo‘yicha ilmiy asoslangan xulosalar 
  va takliflar ilgari suriladi.`,
          ru: `В статье проводится историко-экономический анализ 
  развития лёгкой и пищевой промышленности Навоийской области в годы 
  независимости. Рассматриваются экономические реформы, структурные 
  преобразования, инвестиционные процессы и вопросы инновационной 
  модернизации, оказавшие влияние на развитие отрасли. Выявляются 
  основные проблемы функционирования предприятий и обосновываются 
  научно-практические предложения, направленные на обеспечение 
  устойчивого развития лёгкой и пищевой промышленности региона`,
          en: `his article provides a historical and economic analysis of the 
  development of the light and food industries in the Navoi region during the years of 
  independence. The study examines economic reforms, structural transformations, 
  investment processes, and issues of innovative modernization that have influenced 
  the sector’s development. In addition, existing problems in industrial enterprises are 
  identified, and scientifically grounded conclusions and recommendations are 
  proposed to ensure the sustainable development of the light and food industries in 
  the region`,
        },
        pages: "37-42",
        publishDate: "19.01.2026",
        views: 145,
        likes: 10,
        downloads: 112,
        language: "O'zbek",
        keywords: {
          uz: ["yengil sanoat", "oziq-ovqat sanoati", "Navoiy viloyati", "iqtisodiy islohotlar", "innovatsiya", "investitsiya", "modernizatsiya"],
          ru: ["лёгкая промышленность", "пищевая промышленность", "Навоийская область", "экономические реформы", "инвестиции", "инновации", "модернизация", "развитие промышленности"],
          en: ["light industry", "food industry", "Navoi region", "economic reforms", 
  "investment", "innovation", "modernization", "industrial development"],
        },
        file: "/files/Maqola pdf/Xoliqulov Shuxratjon.pdf",
      },
      {
        id: 5,
        slug: "ozbekistonda-soliq-siyosatidagi-ozgarishlar-va-ularning-iqtisodiyotga-tasiri",
        doi: "",
        volume: 1,
        issue: 1,
        title: {
          uz: "Ўзбекистонда солиқ сиёсатидаги ўзгаришлар ва уларнинг иқтисодиётга таъсири",
          ru: "",
          en: "",
        },
        authors: "Axmedova Dilnoza Muzaffarovna",
        category: "economics",
        year: "2026",
        abstract: {
          uz: `Mазкур мақолада Ўзбекистон Республикасида 2026 йил учун 
  белгиланган солиқ сиёсатидаги асосий ўзгаришлар таҳлил қилинган. Асосий 
  солиқ ставкаларининг барқарор сақланиши, кичик бизнес ва якка тартибдаги 
  тадбиркорлар учун соддалаштирилган солиқ механизмларининг жорий 
  этилиши, электрон савдо субъектлари учун солиқ юкининг оширилиши ҳамда 
  солиқ маъмурчилигининг рақамлаштирилиши иқтисодий самарадорлик 
  нуқтаи назаридан баҳоланган, солиқ сиёсатидаги янгиланишларнинг 
  иқтисодий мазмуни очиб берилган. Солиқ муносабатларида рақамли 
  технологияларни жорий этиш масалаларига алохида эътибор қаратилган. 
  Таҳлил натижалари 2026 йил солиқ ислоҳотлари иқтисодий барқарорлик ва 
  тадбиркорлик муҳитини яхшилашга ва давлат бюджети барқарорлигини 
  таъминлашга қаратилганлигини кўрсатади`,
          ru: "",
          en: "",
        },
        pages: "43-48",
        publishDate: "19.01.2026",
        views: 189,
        likes: 14,
        downloads: 145,
        language: "O'zbek",
        keywords: {
          uz: ["солиқ сиёсати", "қўшилган қиймат солиғи", "айланмадан олинадиган солиқ", "тадбиркорлик", "электрон савдо", "рақамли иқтисодиёт"],
          ru: [],
          en: [],
        },
        file: "/files/Maqola pdf/Dilnoza Axmedova.pdf",
      },
      {
        id: 6,
        slug: "karyeralar-bortlarining-turgunligini-baholashda-sonli-usullarni-kompleks-qollash",
        doi: "",
        volume: 1,
        issue: 1,
        title: {
          uz: "KARYERLAR BORTLARINING TURG‘UNLIGINI BAHOLASHDA SONLI USULLARNI KOMPLEKS QO‘LLASH",
          ru: "",
          en: "",
        },
        authors: "Norov G'ulomjon Mirzog'olib o'g'li",
        category: "engineering",
        year: "2026",
        abstract: {
          uz: `Ushbu maqola sanoat xavfsizligi va qazib olish ishlarining iqtisodiy
  samaradorligini ta’minlash bilan bevosita bog‘liq bo‘lgan zamonaviy konchilik
  ishlab chiqarishining eng dolzarb vazifalaridan biri bo‘lgan ochiq konlar
  bortlarining barqarorligini o‘rganishga bag‘ishlangan. Tadqiqotning maqsadi 
  differensial tenglamalarni yechishning sonli usullari asosida karyer bortlarining 
  ustuvorligini baholashning matematik modelini ishlab chiqish va asoslashdan 
  iborat. Metodologik asos sifatida bortning geometrik parametrlari va tog‘ 
  jinslarining fizik-mexanik xususiyatlarini hisobga olgan holda tog‘ jinslarining 
  kuchlanganlik-deformatsiyalanganlik holatini tavsiflash imkonini beruvchi 
  Koshining ketma-ket yaqinlashish usuli, Teylor qatoriga yoyish va Eyler usulidan 
  foydalanilgan.
  Tadqiqot ishida analitik va sonli yechimlarni taqqoslash amalga oshirildi, bu 
  esa deformatsion jarayonlarni tahlil qilishda qo‘llaniladigan usullarning aniqligi va 
  qo‘llanilish sohasini baholash imkonini berdi. Sonli modellashtirish natijasida 
  karyer borti bo‘ylab deformatsiyalarning taqsimlanishi olindi, kuchlanishlarning 
  to‘planish zonalari aniqlandi va barqarorlikning buzilishi va qulashlarning 
  rivojlanishi mumkin bo‘lgan kritik sharoitlar aniqlandi. Tadqiqotning ilmiy 
  yangiligi ochiq karyer bortlarini geomexanik tahlil qilish va ularni konchilik ishlab 
  chiqarish sharoitlariga moslashtirish masalalarini yechishda klassik sonli usullarni 
  kompleks qo‘llashdan iborat. Tadqiqot natijalarining amaliy ahamiyati olingan 
  natijalardan bort parametrlarini loyihalashda, xavfli zonalarni bashorat qilishda va 
  karyerlardan foydalanishda xavfsizlikni oshirish va iqtisodiy yo‘qotishlarni 
  kamaytirish bo‘yicha chora-tadbirlarni ishlab chiqishda foydalanish mumkinligi 
  bilan izohlanadi.`,
          ru: `Настоящая статья посвящена исследованию устойчивости бортов 
  открытых карьеров, что является одной из наиболее актуальных задач 
  современного горного производства, напрямую связанной с обеспечением 
  промышленной безопасности и экономической эффективности добычных 
  работ. Целью исследования является разработка и обоснование 
  математической модели оценки устойчивости бортов карьеров на основе 
  численных методов решения дифференциальных уравнений. В качестве 
  методологической основы использованы метод последовательных 
  приближений Коши, разложение в ряд Тейлора и метод Эйлера, 
  позволяющие описывать напряженно-деформированное состояние горных 
  массивов с учетом геометрических параметров борта и физико-механических 
  свойств пород.
  В работе выполнено сравнение аналитических и численных решений, 
  что позволило оценить точность и область применимости используемых 
  методов при анализе деформационных процессов. В результате численного 
  моделирования получены распределения деформаций вдоль борта карьера, 
  выявлены зоны концентрации напряжений и определены критические 
  условия, при которых возможно нарушение устойчивости и развитие 
  обрушений. Научная новизна исследования заключается в комплексном 
  применении классических численных методов для задач геомеханического 
  анализа бортов открытых карьеров и их адаптации к условиям горного 
  производства. Практическая значимость работы состоит в возможности 
  использования полученных результатов при проектировании параметров 
  бортов, прогнозировании опасных зон и разработке мероприятий по 
  повышению безопасности и снижению экономических потерь при 
  эксплуатации карьеров`,
          en: `This article examines the stability of open-pit mine walls, a critical issue in 
  modern mining, directly related to ensuring industrial safety and economic 
  efficiency. The aim of the study is to develop and validate a mathematical model 
  for assessing the stability of open-pit mine walls based on numerical methods for 
  solving differential equations. The methodological framework utilizes the Cauchy 
  method of successive approximations, Taylor series expansion, and Euler's 
  method, which allow for describing the stress-strain state of rock masses, taking 
  into account the wall's geometric parameters and the physical and mechanical 
  properties of the rock.
  This study compared analytical and numerical solutions, enabling an 
  assessment of the accuracy and applicability of the methods used in analyzing 
  deformation processes. Numerical modeling yielded deformation distributions 
  along the quarry wall, identified stress concentration zones, and determined critical 
  conditions that could lead to instability and collapse. The scientific novelty of this 
  study lies in its comprehensive application of classical numerical methods to 
  geomechanical analysis of open-pit mine walls and their adaptation to mining 
  conditions. The practical significance of this study lies in the potential use of the 
  obtained results in designing wall parameters, predicting hazardous zones, and 
  developing measures to improve safety and reduce economic losses during quarry 
  operation.`,
        },
        pages: "49-61",
        publishDate: "19.01.2026",
        views: 167,
        likes: 9,
        downloads: 128,
        language: "O'zbek",
        keywords: {
          uz: ["ochiq karyer", "bort ustuvorligi", "differensial tenglamalar", "Koshi usuli", "Eyler usuli", "Teylor qatoriga yoyish", "sonli usullar", "modellashtirish"],
          ru: ["открытый карьер, устойчивость борта", "дифференциальные уравнения", "метод Коши", "метод Эйлера", "разложение в ряд Тейлора", "численные методы", "моделирование"],
          en: ["open pit", "side stability", "differential equations", "Cauchy method", 
  "Euler method", "Taylor series expansion", "numerical methods", "modeling"],
        },
        file: "/files/Maqola pdf/Maqola_Norov G.M..pdf",
      },
      {
        id: 7,
        slug: "yopishqoqlikni-oshiruvchi-reagent-tasirida-sanoat-suspensiyasining-oquvchanlik",
        doi: "",
        volume: 1,
        issue: 1,
        title: {
          uz: "YOPISHQOQLIKNI OSHIRUVCHI REAGENT TA’SIRIDA SANOAT SUSPENSIYASINING OQUVCHANLIK XUSUSIYATLARINI EKSPERIMENTAL VA SONLI TAHLILI",
          ru: "",
          en: "",
        },
        authors: "Ahmadov Ilhom Aktam o'g'li",
        category: "engineering",
        year: "2026",
        abstract: {
          uz: `Ushbu tadqiqot yopishqoqlikni oshiruvchi maxsus reagent ta’sirida sanoat 
  po‘lpasining oquvchanlik va reologik xossalarini o‘rganishga bag‘ishlangan. 
  Tadqiqotning predmeti sanoat chiqindilaridan hosil bo‘lgan sanoat suspensiyasi 
  bo‘lib, ishning asosiy maqsadi reagent miqdori va suv tarkibining po‘lpaning oqim 
  xususiyatlariga ta’sirini aniqlash hamda eng muqobil miqdorni belgilashdan iborat. 
  Mazkur muammo sanoat suspensiyalarini gidrotransport tizimlarida samarali 
  tashish, energiya sarfini kamaytirish va texnologik jarayonlarni boshqarish nuqtayi 
  nazaridan dolzarb hisoblanadi. Tadqiqot jarayonida eksperimental usullar 
  qo‘llanilib, po‘lpaning oquvchanligi kesik konussimon idish yordamida aniqlangan 
  yoyilish radiusi orqali baholandi. Olingan eksperimental ma’lumotlar statistik 
  jihatdan qayta ishlanib, oquvchanlikning konsentratsiya va reagent miqdoriga 
  bog‘liqligi natural kubik splayn interpolatsiyasi asosida modellashtirildi. Natijada 
  uzluksiz va silliq matematik model qurilib, u oraliq qiymatlar uchun oquvchanlikni 
  bashorat qilish imkonini berdi. Tadqiqot natijalari sanoat suspensiyalarining 
  reologik xossalarini boshqarish, gidrotransport tizimlarining samaradorligini 
  oshirish hamda sanoat chiqindilarini qayta ishlash jarayonlarini optimallashtirishda 
  amaliy qo‘llanishga ega bo‘lib, muhandislik va texnologik tadqiqotlar uchun 
  muhim ilmiy ahamiyat kasb etadi`,
          ru: "",
          en: "",
        },
        pages: "62-75",
        publishDate: "19.01.2026",
        views: 312,
        likes: 15,
        downloads: 245,
        language: "O'zbek",
        keywords: {
          uz: ["anoat suspensiyasi","sanoat chiqindilari", "oquvchanlik", "yopishqoqlik", "reologik xossalar", "Natural kubik splayn interpolatsiyasi", "sonli tahlil", "eksperimental tadqiqot", "konsentratsiya", "eng muqobil (optimal) miqdor", "reologik model", "oqim xususiyatlari", "polidispers tizimlar"],
          ru: [],
          en: [],
        },
        file: "/files/Maqola pdf/Ahmadov  Ilhom  Sharq universitati.pdf",
      },
      {
        id: 8,
        slug: "pedagogical-and-psychological-foundations-of-ai-based-methodological-training",
        doi: "",
        volume: 1,
        issue: 1,
        title: {
          uz: "",
          ru: "",
          en: "PEDAGOGICAL AND PSYCHOLOGICAL FOUNDATIONS OF AIBASED METHODOLOGICAL TRAINING FOR FUTURE PRIMARY ",
        },
        authors: "Najmiddinova Gulnora Najmiddin qizi",
        category: "pedagogy",
        year: "2026",
        abstract: {
          uz: "",
          ru: "",
  en:`The rapid integration of artificial intelligence (AI) into education 
  has intensified the need to reconsider the pedagogical and psychological foundations 
  of teacher preparation, particularly in primary education. This study aims to 
  synthesize contemporary theoretical perspectives on AI-based methodological 
  training for future primary school teachers, with a focus on pedagogical principles 
  and psychological mechanisms that enhance professional readiness. Using a 
  thematic literature review of international studies published between 2018 and 2025, 
  the research analyzes scholarly works addressing AI-supported scaffolding, adaptive 
  learning, feedback systems, and competency-based teacher education frameworks. 
  The findings indicate that AI technologies function as effective cognitive and 
  motivational scaffolds by personalizing instruction, managing cognitive load, 
  enhancing self-efficacy, and reducing performance-related anxiety among pre￾service teachers. From a pedagogical perspective, AI-enhanced methodological 
  training aligns with constructivist, student-centered, and reflective learning 
  approaches, particularly through the integration of intelligent tutoring systems, 
  simulations, and AI-extended TPACK models. The study also emphasizes the 
  importance of ethical, human-centered AI use to preserve empathy, professional 
  judgment, and pedagogical responsibility. The article concludes that AI-based 
  methodological training, when grounded in sound pedagogical and psychological 
  theory, represents a sustainable and innovative pathway for improving the quality of future primary teacher education in Uzbekistan and comparable educational 
  contexts`      },
        pages: "76-83",
        publishDate: "19.01.2026",
        views: 203,
        likes: 11,
        downloads: 167,
        language: "English",
        keywords: {
          uz: [],
          ru: [],
          en: ["artificial intelligence", "teacher education", "methodological training", "pedagogical foundations", "psychological foundations", "pre-service primary teachers"],
        },
        file: "",
      },
      {
        id: 9,
        slug: "oliy-talim-tizimida-loyiha-boshqaruvining-raqamli-transformatsiyasi",
        doi: "",
        volume: 1,
        issue: 1,
        title: {
          uz: "Oliy ta'lim tizimida loyiha boshqaruvining raqamli transformatsiyasi va boshqaruvda xolislikni ta'minlash",
          ru: "",
          en: "",
        },
        authors: "Yodgorova Nafisa Baxriddinovnа",
        category: "management",
        year: "2026",
        abstract: {
          uz: "Mazkur maqolada oliy ta'lim tizimida loyiha boshqaruvining raqamli transformatsiyasi jarayonlari hamda ushbu jarayonlarning boshqaruvda xolislikni ta'minlashdagi o'rni tahlil qilinadi. Tadqiqotda loyiha boshqaruvini raqamlashtirish orqali qarorlar qabul qilishda inson omilining salbiy ta'sirini kamaytirish, ma'lumotlarning ochiqligi va shaffofligini oshirish hamda boshqaruv jarayonlarida adolat tamoyillarini mustahkamlash imkoniyatlari ko'rib chiqiladi.",
          ru: `В данной статье анализируются процессы цифровой 
трансформации управления проектами в системе высшего образования, а 
также роль этих процессов в обеспечении объективности управления. В 
исследовании рассматриваются возможности снижения негативного влияния 
человеческого фактора при принятии управленческих решений за счёт 
цифровизации проектного управления, повышения открытости и 
прозрачности информации, а также укрепления принципов справедливости в 
управленческих процессах.`,
          en: `This аrticle аnаlyzes the prоcesses оf digitаl trаnsfоrmаtiоn оf 
prоject mаnаgement in the higher educаtiоn system, аs well аs the rоle оf these 
prоcesses in ensuring оbjectivity in mаnаgement. The study exаmines the 
pоssibilities оf reducing the negаtive impаct оf the humаn fаctоr in mаnаgeriаl 
decisiоn-mаking thrоugh the digitаlizаtiоn оf prоject mаnаgement, increаsing the 
оpenness аnd trаnspаrency оf infоrmаtiоn, аnd strengthening the principles оf 
fаirness in mаnаgement prоcesses.`,
        },
        pages: "84-88",
        publishDate: "19.01.2026",
        views: 142,
        likes: 7,
        downloads: 109,
        language: "O'zbek",
        keywords: {
          uz: [ "rаqаmlаshtirish", "олий та’лим", "та'лимдаги инновациялар", "шффофлик", "холислик ва адолатлилик принциплари"],
          ru: ["ифровизация", "высшее образование", "инновации в образовании", "прозрачность", "беспристрастность", "справедливость"],
          en: ["digitаlizаtiоn", "higher educаtiоn", "innоvаtiоns in educаtiоn", "trаnspаrency", "impаrtiаlity", "fаirness"],
        },
        file: "/files/Maqola pdf/Yodgorova.pdf",
      },
      {
        id: 10,
        slug: "integrating-digital-technologies-into-english-language-instruction",
        doi: "",
        volume: 1,
        issue: 1,
        title: {
          uz: "",
          ru: "",
          en: "Integrating digital technologies into english language instruction: a case of secondary education",
        },
        authors: "Barno Raxmatullaeva",
        category: "pedagogy",
        year: "2026",
        abstract: {
          uz: "",
          ru: "",
          en: "The article explores the integration of digital technologies into English language instruction in secondary education. Modern methods and their effectiveness in language teaching are analyzed.",
        },
        pages: "89-98",
        publishDate: "19.01.2026",
        views: 156,
        likes: 8,
        downloads: 120,
        language: "English",
        keywords: {
          uz: [],
          ru: [],
          en: ["digital technologies", "English language", "secondary education", "instruction"],
        },
        file: "/files/Maqola pdf/Barno Rahmatullayeva.pdf",
      },
      {
        id: 11,
        slug: "the-role-of-technology-in-second-language-acquisition",
        doi: "",
        volume: 1,
        issue: 1,
        title: {
          uz: "",
          ru: "",
          en: "The role of technology in second language acquisition",
        },
        authors: "Fariza Ergasheva O'lmas qizi",
        category: "linguistics",
        year: "2026",
        abstract: {
          uz: "",
          ru: "",
          en: "This article examines the role of technology in second language acquisition. Various technological tools and their impact on language learning processes are analyzed.",
        },
        pages: "99-107",
        publishDate: "19.01.2026",
        views: 134,
        likes: 6,
        downloads: 98,
        language: "English",
        keywords: {
          uz: [],
          ru: [],
          en: ["technology", "second language acquisition", "language learning"],
        },
        file: "/files/Maqola pdf/Ergasheva Fariza.pdf",
      },
      {
        id: 12,
        slug: "derivational-and-semantic-principles-of-ecological-terminology-in-uzbek-and-english",
        doi: "",
        volume: 1,
        issue: 1,
        title: {
          uz: "",
          ru: "",
          en: "Derivational and semantic principles of ecological terminology in uzbek and English",
        },
        authors: "Ruziyeva Muhayyo Baxtiyor qizi",
        category: "linguistics",
        year: "2026",
        abstract: {
          uz: "",
          ru: "",
          en: "The article investigates derivational and semantic principles of ecological terminology in Uzbek and English languages. A comparative analysis of term formation patterns is presented.",
        },
        pages: "108-117",
        publishDate: "19.01.2026",
        views: 128,
        likes: 5,
        downloads: 95,
        language: "English",
        keywords: {
          uz: [],
          ru: [],
          en: ["ecological terminology", "derivation", "semantics", "Uzbek", "English"],
        },
        file: "/files/Maqola pdf/Рузиева М.Б. мақола.pdf",
      },
      {
        id: 13,
        slug: "the-use-of-multimedia-tools-in-developing-oral-speech-skills",
        doi: "",
        volume: 1,
        issue: 1,
        title: {
          uz: "",
          ru: "",
          en: "The use of multimedia tools in developing oral speech skills in the educational process",
        },
        authors: "Sayidova Moxichexra Islomovna",
        category: "pedagogy",
        year: "2026",
        abstract: {
          uz: "",
          ru: "",
          en: "The article discusses the use of multimedia tools in developing oral speech skills in the educational process. The effectiveness of various multimedia resources in language education is examined.",
        },
        pages: "118-121",
        publishDate: "19.01.2026",
        views: 171,
        likes: 10,
        downloads: 139,
        language: "English",
        keywords: {
          uz: [],
          ru: [],
          en: ["multimedia", "oral speech", "educational process", "language skills"],
        },
        file: "/files/Maqola pdf/Maqola Sayidova M+++++.pdf",
      },
      {
        id: 14,
        slug: "institutsional-yondashuv-asosida-bolajak-pedagoglarda-kasbiy-madaniyatni",
        doi: "",
        volume: 1,
        issue: 1,
        title: {
          uz: "Institutsional yondashuv asosida bo'lajak pedagoglarda kasbiy madaniyatni shakllantirish",
          ru: "",
          en: "",
        },
        authors: "Hamroyev Murodullo Nemat o'g'li",
        category: "pedagogy",
        year: "2026",
        abstract: {
          uz: "Maqolada institutsional yondashuv asosida bo'lajak pedagoglarda kasbiy madaniyatni shakllantirish masalalari ko'rib chiqilgan. Pedagogik kadrlar tayyorlash tizimidagi zamonaviy yondashuvlar tahlil qilingan.",
          ru: "",
          en: "",
        },
        pages: "122-131",
        publishDate: "19.01.2026",
        views: 148,
        likes: 7,
        downloads: 115,
        language: "O'zbek",
        keywords: {
          uz: ["institutsional yondashuv", "kasbiy madaniyat", "pedagog", "ta'lim"],
          ru: [],
          en: [],
        },
        file: "/files/Maqola pdf/Murodullo Hamroyev.pdf",
      },
      {
        id: 15,
        slug: "utilizing-multimodal-pedagogy-combining-visual-spatial-gestural-audio",
        doi: "",
        volume: 1,
        issue: 1,
        title: {
          uz: "",
          ru: "",
          en: "Utilizing multimodal pedagogy: combining visual, spatial, gestural, audio, and linguistic modes",
        },
        authors: "Madina Muzaffarova Umid qizi",
        category: "pedagogy",
        year: "2026",
        abstract: {
          uz: "",
          ru: "",
          en: "The article explores multimodal pedagogy that combines visual, spatial, gestural, audio, and linguistic modes in education. Practical implications for modern teaching are discussed.",
        },
        pages: "132-135",
        publishDate: "19.01.2026",
        views: 163,
        likes: 11,
        downloads: 125,
        language: "English",
        keywords: {
          uz: [],
          ru: [],
          en: ["multimodal pedagogy", "visual", "linguistic modes", "teaching"],
        },
        file: "/files/Maqola pdf/Muzaffarova Madina.pdf",
      },
      {
        id: 16,
        slug: "yoshlar-emotsional-intellekti-va-ijtimoiy-muloqot-konikmalari",
        doi: "",
        volume: 1,
        issue: 1,
        title: {
          uz: "Yoshlar emotsional intellekti va ijtimoiy muloqot ko'nikmalari o'rtasidagi bog'liqlik",
          ru: "",
          en: "",
        },
        authors: "Qodirova Aziza Kamolovna",
        category: "psychology",
        year: "2026",
        abstract: {
          uz: "Maqolada yoshlar emotsional intellekti va ijtimoiy muloqot ko'nikmalari o'rtasidagi bog'liqlik tadqiq qilingan. Emotsional intellektning shaxslararo munosabatlarga ta'siri tahlil qilingan.",
          ru: "",
          en: "",
        },
        pages: "136-141",
        publishDate: "19.01.2026",
        views: 137,
        likes: 9,
        downloads: 108,
        language: "O'zbek",
        keywords: {
          uz: ["emotsional intellekt", "ijtimoiy muloqot", "yoshlar", "psixologiya"],
          ru: [],
          en: [],
        },
        file: "/files/Maqola pdf/Qodirova Aziza Kamolovna.pdf",
      },
      {
        id: 17,
        slug: "sotsiolingvistik-metod-va-metodlar-masalasi",
        doi: "",
        volume: 1,
        issue: 1,
        title: {
          uz: "Sotsiolingvistik metod va metodlar masalasi",
          ru: "",
          en: "",
        },
        authors: "Safoyeva Shodiya Ma'ruf qizi",
        category: "linguistics",
        year: "2026",
        abstract: {
          uz: "Maqolada sotsiolingvistik metod va metodlar masalasi ko'rib chiqilgan. Tilshunoslikdagi sotsiolingvistik tadqiqot usullari va ularning qo'llanilishi tahlil qilingan.",
          ru: "",
          en: "",
        },
        pages: "142-149",
        publishDate: "19.01.2026",
        views: 155,
        likes: 8,
        downloads: 118,
        language: "O'zbek",
        keywords: {
          uz: ["sotsiolingvistika", "metod", "tilshunoslik", "tadqiqot usullari"],
          ru: [],
          en: [],
        },
        file: "/files/Maqola pdf/Safoyeva Shodiya MAQOLA.pdf",
      },
      {
        id: 18,
        slug: "talabalarda-til-organish-motivatsiyasini-shakllantirishning-ilmiy-asoslari",
        doi: "",
        volume: 1,
        issue: 1,
        title: {
          uz: "Talabalarda til o'rganish motivatsiyasini shakllantirishning ilmiy asoslari",
          ru: "",
          en: "",
        },
        authors: "Shavqieva Sabina Asqarali qizi",
        category: "linguistics",
        year: "2026",
        abstract: {
          uz: "Maqolada talabalarda til o'rganish motivatsiyasini shakllantirishning ilmiy asoslari ko'rib chiqilgan. Motivatsiyaning til o'rganish jarayonidagi o'rni va uni rivojlantirish yo'llari tahlil qilingan.",
          ru: "",
          en: "",
        },
        pages: "150-156",
        publishDate: "19.01.2026",
        views: 192,
        likes: 13,
        downloads: 152,
        language: "O'zbek",
        keywords: {
          uz: ["motivatsiya", "til o'rganish", "talabalar", "ilmiy asos"],
          ru: [],
          en: [],
        },
        file: "/files/Maqola pdf/Shavkieva Sabina_Maqola (2).pdf",
      },
      {
        id: 19,
        slug: "shaxs-psixologik-barqarorligini-taminlashda-himoya-mexanizmlarining",
        doi: "",
        volume: 1,
        issue: 1,
        title: {
          uz: "Shaxs psixologik barqarorligini ta'minlashda himoya mexanizmlarining funksional xususiyatlari",
          ru: "",
          en: "",
        },
        authors: "Nasulloyeva Shahnoza Ilhom qizi",
        category: "psychology",
        year: "2026",
        abstract: {
          uz: "Maqolada shaxs psixologik barqarorligini ta'minlashda himoya mexanizmlarining funksional xususiyatlari tadqiq qilingan. Psixologik himoya mexanizmlari va ularning shaxs barqarorligiga ta'siri tahlil qilingan.",
          ru: "",
          en: "",
        },
        pages: "157-166",
        publishDate: "19.01.2026",
        views: 185,
        likes: 12,
        downloads: 147,
        language: "O'zbek",
        keywords: {
          uz: ["psixologik barqarorlik", "himoya mexanizmlari", "shaxs", "funksional xususiyatlar"],
          ru: [],
          en: [],
        },
        file: "/files/Maqola pdf/Shaxs psixologik barqarorligini ta.pdf",
      },
      {
        id: 20,
        slug: "improving-writing-productivity-of-english-philology-students-in-higher-education",
        doi: "",
        volume: 1,
        issue: 1,
        title: {
          uz: "",
          ru: "",
          en: "Improving writing productivity of english philology students in higher education",
        },
        authors: "Jalilova Umida Abdusalimovna",
        category: "pedagogy",
        year: "2026",
        abstract: {
          uz: "",
          ru: "",
          en: "The article examines strategies for improving writing productivity of English philology students in higher education. Effective approaches to academic writing instruction are analyzed.",
        },
        pages: "167-170",
        publishDate: "19.01.2026",
        views: 144,
        likes: 7,
        downloads: 110,
        language: "English",
        keywords: {
          uz: [],
          ru: [],
          en: ["writing productivity", "English philology", "higher education", "academic writing"],
        },
        file: "/files/Maqola pdf/Umida Jalilova.pdf",
      },
      {
        id: 21,
        slug: "internet-reklama-tili-ingliz-va-ozbek-tillarida-derivatsiya-jarayonining",
        doi: "",
        volume: 1,
        issue: 1,
        title: {
          uz: "Internet reklama tili: ingliz va o'zbek tillarida derivatsiya jarayonining qiyosiy tahlili",
          ru: "",
          en: "",
        },
        authors: "Qahhorova Guliston Abdug'affor qizi",
        category: "linguistics",
        year: "2026",
        abstract: {
          uz: `Ushbu maqolada internet reklama tilining lingvistik 
xususiyatlari, xususan, ingliz va o‘zbek tillaridagi derivatsiya (so‘z yasash) 
jarayonlarining qiyosiy tahlili yoritilgan. Internet reklamalari zamonaviy 
kommunikatsiyaning muhim turlaridan biri sifatida tilshunoslik nuqtai nazaridan 
alohida o‘rganishni talab etadi, chunki ular auditoriyani qisqa, ta’sirli va esda qolarli 
shaklda ma’lumot bilan ta’minlashni maqsad qiladi. Shu bois, reklama tili so‘z 
yasashning turli mexanizmlaridan – affiksatsiya, konversiya, kompozitsiya, 
qisqartma, blending (so‘zlarning qo‘shilishi) va boshqa innovatsion usullardan faol 
foydalanadi. Maqolada ingliz va o‘zbek tillarida internet reklama matnlarida hosil 
bo‘lgan yangi leksik birliklarning strukturaviy va semantik tahlili amalga oshirildi.`,
          ru: `В данной статье рассматриваются лингвистические 
особенности языка интернет-рекламы, в частности, проводится 
сопоставительный анализ процессов деривации (словообразования) в 
английском и узбекском языках. Интернет-реклама, как один из важных видов 
современной коммуникации, требует специального изучения с 
171
лингвистической точки зрения, поскольку она ставит своей целью 
предоставление аудитории информации в краткой, эффективной и 
запоминающейся форме. Поэтому в языке рекламы активно используются 
различные механизмы словообразования - аффиксация, конверсия, 
словосложение, аббревиация, блендинг (соединение слов) и другие 
инновационные приемы. В статье проведен структурно-семантический анализ 
новых лексических единиц, образованных в текстах интернет-рекламы на 
английском и узбекском языках`,
          en: `This article discusses the linguistic features of the language 
of Internet advertising, in particular, a comparative analysis of the processes of 
derivation (word formation) in the English and Uzbek languages. Internet 
advertising, as one of the important types of modern communication, requires 
special study from a linguistic point of view, since it aims to provide the audience 
with information in a short, effective and memorable form. Therefore, the 
advertising language actively uses various mechanisms of word formation -
affixation, conversion, composition, abbreviation, blending (joining words) and 
other innovative methods. The article carried out a structural and semantic analysis 
of new lexical units formed in Internet advertising texts in English and Uzbek`,
        },
        pages: "171-185",
        publishDate: "19.01.2026",
        views: 121,
        likes: 5,
        downloads: 88,
        language: "O'zbek",
        keywords: {
          uz: ["internet reklama", "derivatsiya", "qiyosiy tahlil", "ingliz tili", "o'zbek tili"],
          ru: [],
          en: [],
        },
        file: "/files/Maqola pdf/Qahhorova Guliston Abdug'affor qizi New (2).pdf",
      },
      {
        id: 22,
        slug: "organizatsiya-navoiyskogo-oblastnogo-gosudarstvennogo-arkhiva",
        doi: "",
        volume: 1,
        issue: 1,
        title: {
          uz: "",
          ru: "Организация навоийского областного государственного архива и классификация фондов",
          en: "",
        },
        authors: "Iskandarova Shoxsanam Isoyevna",
        category: "history",
        year: "2026",
        abstract: {
          uz: `Ushbu maqolada Navoiy viloyatida arxiv ishini tashkil etilishi 
hamda arxiv faoliyatining yo‘lga qo‘yilishi to‘g‘risida batafsil ma’lumot berilib, har 
bir fakt arxiv ma’lumotlari asosida tahlil etilgan. Arxiv ishi faoliyati yo‘lga 
qo‘yilguniga qadar duch kelingan muammolar va ularning bartaraf etilishi 
ko‘rsatilgan. Fondlashtirish masalasiga alohida ahamiyat berilgan. Arxiv hujjatlari 
fondlarga jamlanishi va qayta xatlovdan o‘tkazilishi, buning arxiv faoliyatiga ta’siri 
masalalari yoritilgan. O‘zbekiston arxiv ishi tarixida Navoiy viloyati arxivining 
o‘rni tahlil etilgan`,
          ru: `В данной статье представлена подробная информация об 
организации архивной работы и создании архивной деятельности в 
Навоийской области, каждый факт анализируется на основе архивных данных. 
Указаны проблемы, возникшие до создания архивной деятельности, и способы 
их решения. Особое внимание уделяется вопросу целостности фондов. 
Рассмотрены вопросы концентрации и перерегистрации архивных документов 
в фондах и их влияние на архивную деятельность. Анализируется место 
Навоийского архива в истории архивной работы в Узбекистане`,
          en: `This article provides detailed information on the organization of 
archival work and the establishment of archival activities in the Navoi region, 
analyzing each fact based on archival data. Problems that arose before the 
establishment of archival activities and solutions are identified.Particular attention 
is given to the integrity of the collections. The issues of concentration and reregistration of archival documents in collections and their impact on archival 
activities are examined. The place of the Navoi Archive in the history of archival 
work in Uzbekistan is analyzed`,
        },
        pages: "186-198",
        publishDate: "19.01.2026",
        views: 109,
        likes: 3,
        downloads: 76,
        language: "Русский",
        keywords: {
          uz: ["arxiv", "raqamlashtirish", "fond", "ro‘yxat", "yig‘ma jild", "varaq", "fondlashtirish", "hujjat saralash", "arxivchi", "shtat birligi"],
          ru: ["aрхив", "оцифровка", "фонд", "список", "том коллекции", "лист", "фонд", "сортировка документов", "архивариус", "штатное подразделение"],
          en: ["archive", "digitization", "collection", "list", "collection volume", "sheet", "collection", "document sorting", "archivist", "staff unit"],
        },
        file: "/files/Maqola pdf/Shohsanam Isoyevna.pdf",
      },
      {
        id: 23,
        slug: "talabalarda-tolerantlik-xususiyatlarini-shakllantirishning-ilmiy-nazariy-asoslari",
        doi: "",
        volume: 1,
        issue: 1,
        title: {
          uz: "Talabalarda tolerantlik xususiyatlarini shakllantirishning ilmiy-nazariy asoslari",
          ru: "",
          en: "",
        },
        authors: "Toshtemirova Bahora Alisher qizi",
        category: "psychology",
        year: "2026",
        abstract: {
          uz: `Ushbu maqolada talabalarda tolerantlik xususiyatlarini 
shakllantirishning ilmiy-nazariy asoslari tahlil qilinadi. Tolerantlik fenomenining 
ilmiy tasniflari, xalqaro va milliy normativ-huquqiy hujjatlardagi talqini yoritiladi. 
O‘rta Osiyo mutafakkirlari hamda xorijiy olimlar ta’limotlarida tolerantlik, 
bag‘rikenglik, sabr-toqat va o‘zaro hurmat g‘oyalarining etnopedagogik va 
psixologik asoslari ochib beriladi`,
          ru: `В статье анализируются научно-теоретические основы 
формирования толерантных качеств у студентов. Рассматриваются научные 
классификации феномена толерантности, его отражение в международных и 
национальных нормативно-правовых документах. Раскрываются 
этнопедагогические и психологические основы формирования толерантности 
в трудах мыслителей Средней Азии и зарубежных ученых`,
          en: `This article analyzes the scientific and theoretical foundations of 
forming tolerance qualities in students. Scientific classifications of the phenomenon 
of tolerance, as well as its interpretation in international and national legal 
documents, are examined. The ethnopedagogical and psychological foundations of 
199
tolerance formation in the teachings of Central Asian thinkers and foreign scholars 
are revealed`,
        },
        pages: "199-207",
        publishDate: "19.01.2026",
        views: 138,
        likes: 7,
        downloads: 103,
        language: "O'zbek",
        keywords: {
          uz: ["tolerantlik", "bag‘rikenglik","talaba" , "etnopedagogika", "psixologik tarbiya", "ijtimoiy moslashuv"],
          ru: ["толерантность", "терпимость", "студент", "этнопедагогика"," психологическое воспитание", "социальная адаптация"],
          en: ["tolerance", "student", "ethnopedagogy", "psychological education", "social adaptation"],
        },
        file: "/files/Maqola pdf/Toshtemirova Bahora Alisher qizi.pdf",
      },
      {
        id: 24,
        slug: "navoiy-gazallarida-badiiyat-badiiy-sanatlardan-foydalanish-mahorati",
        doi: "",
        volume: 1,
        issue: 1,
        title: {
          uz: "NAVOIY G‘AZALLARIDA BADIIYAT, BADIIY SAN’ATLARDAN FOYDALANISH MAHORAT",
          ru: "",
          en: "",
        },
        authors: "Shirinova Xursheda Sharifovna",
        category: "literature",
        year: "2026",
        abstract: {
          uz: "Ushbu maqolada badiiyat san’atiga ta’rif berilgan. Navoiy g‘azallllarida badiiyatning o‘rni xususida so‘z boradi. Navoiy bobomiz o‘zining “Xamsa” asari orqali badiiy mahoratini namoyish etgan. Shuningdek, g‘azallaridagi tasvirlar va she’riy san’atlarning o‘ziga xos xususiyatlari haqida ta’kidlanadi",
          ru: `В данной статье дается определение искусства 
  художественной прозы. Рассматривается роль художественной прозы в 
  газелях Навои. Наш дед Навои продемонстрировал свое художественное 
  мастерство в своем произведении «Хамса». Также подчеркиваются образы в 
  его газелях и специфические особенности поэтического искусства.`,
          en: `This article defines the art of fiction. It discusses the role of fiction 
  in Navoi's ghazals. Our grandfather Navoi demonstrated his artistic skills through 
  his work "Khamsa". It also emphasizes the images in his ghazals and the specific 
  features of poetic art`,
        },
        pages: "208-213",
        publishDate: "19.01.2026",
        views: 115,
        likes: 4,
        downloads: 82,
        language: "O'zbek",
        keywords: {
          uz: ["badiiyat, badiiy san’at", "tashbeh", "Xamsa", "mubolag‘a", "Funun ul-balog’a", "g‘ulu", "tamsil", "husni ta’lil", "turkiy ti"],
          ru: ["художественная проза", "аллегория", "Хамса", "преувеличение", "Фунун уль-балога", "цветок", "метафора", "прекрасная интерпретация", "турецкий язык"],
          en: ["fiction", "allegory", "Hamsa", "exaggeration", "Funun ul-balog’a", "flower", "metaphor", "beautiful interpretation", "Turkish language"],
        },
        file: "/files/Maqola pdf/Shirinova Xursheda tayyorMaqola  (2).pdf",
      },
      {
        id: 25,
        slug: "solntse-kak-ekzistentsialnyy-simvol-v-lirike-konstantin-balmont",
        doi: "",
        volume: 1,
        issue: 1,
        title: {
          uz: "",
          ru: "Солнце как экзистенциальный символ в лирике Константин бальмонт",
          en: "",
        },
        authors: "Fazliddinov Shuxrat Faxriddinovich",
        category: "literature",
        year: "2026",
        abstract: {
          uz: "",
          ru: `Статья посвящена анализу образа Солнца в лирике 
  Константина Бальмонта как ключевого экзистенциального символа, 
  определяющего философско-поэтическую модель мира поэта. На материале 
  стихотворений разных периодов («Я в этот мир пришёл, чтоб видеть 
  Солнце…», «Будем как Солнце», «Я мечтою ловил уходящие тени…» и др.) и 
  программных эстетических высказываний («Элементарные слова о 
  символической поэзии») рассматривается семантика солнечного образа в её 
  онтологическом, аксиологическом и экзистенциальном измерениях. В 
  сопоставлении с философскими концепциями Фридрих Ницше и Артур 
  Шопенгауэр выявляется специфика бальмонтовского понимания бытия как 
  утверждения жизни, света и творческой воли. В работе используются 
  исследования И. М. Меркулова, Н. П. Крохиной, О. В. Епишевой, М. А. 
  Дударевой и др.`,
          en: "",
        },
        pages: "214-218",
        publishDate: "19.01.2026",
        views: 122,
        likes: 5,
        downloads: 89,
        language: "Русский",
        keywords: {
          uz: [],
          ru: ["K. Д. Бальмонт", "русский символизм", "солнечная символика", "экзистенциальный символ", "свет", "воля", "поэтическое бытие"],
          en: [],
        },
        file: "/files/Maqola pdf/Shuxrat Fazliddinov.pdf",
      },
      {
        id: 26,
        slug: "songgi-amirning-vasiyati",
        doi: "",
        volume: 1,
        issue: 1,
        title: {
          uz: "So'nggi amirning vasiyati",
          ru: "",
          en: "",
        },
        authors: "Mahmud Hamrayev",
        category: "history",
        year: "2026",
        abstract: {
          uz:`Mаzkur mаqоlаdа Buxоrо аmirligining sо‘nggi hukmdоri Аmir Sаid Оlimxоnning vаsiyаti mаsаlаsi tаrixiy mаnbаlаr vа аrxiv hujjаtlаri аsоsidа tаhlil qilinаdi. Tаdqiqоtdа аmirning siyоsiy fаоliyаti yаkunidаgi qаrаshlаri, dаvlаt vа аvlоd tаqdiri hаqidаgi mulоhаzаlаri hаmdа vаsiyаt mаzmunining tаrixiy-huquqiy vа mа’nаviy аhаmiyаti yоritilаdi. Mаqоlаdа sо‘nggi аmir vаsiyаtining Buxоrо аmirligi inqirоzi, mustаmlаkаchilik jаrаyоnlаri vа muhоjirlikdаgi hаyоt bilаn bоg‘liq jihаtlаri оchib berilаdi. Tаdqiqоt nаtijаlаri О‘zbekistоnning XX аsr bоshlаridаgi siyоsiy tаrixi vа hukmdоrlik аn’аnаlаri hаqidаgi tаsаvvurlаrni bоyitishgа xizmаt qilаdi`,
          ru: `В данной статье на основе исторических источников и архивных документов анализируется вопрос завещания последнего правителя Бухарского эмирата — эмира Саид Алимхана. В исследовании рассматриваются его взгляды, сформировавшиеся на завершающем этапе политической деятельности, размышления о судьбе государства и династии, а также раскрывается историко-правовое и духовное значение содержания завещания. В статье освещаются аспекты завещания последнего эмира, связанные с кризисом Бухарского эмирата, колониальными процессами и жизнью в эмиграции. Результаты исследования способствуют расширению представлений о политической истории Узбекистана начала XX века и традициях правления`,
          en: `This article analyzes the issue of the testament of the last ruler of the Bukhara Emirate, Emir Said Alim Khan, on the basis of historical sources and archival documents. The study examines his views formed at the final stage of his political activity, his reflections on the fate of the state and the dynasty, as well as the historical, legal, and spiritual significance of the content of the testament. The article also reveals aspects of the last emir’s testament related to the crisis of the Bukhara Emirate, colonial processes, and life in exile. The results of the study contribute to enriching the understanding of the political history of Uzbekistan in the early twentieth century and the traditions of rulership`,
        },
        pages: "219-226",
        publishDate: "19.01.2026",
        views: 118,
        likes: 4,
        downloads: 85,
        language: "O'zbek",
        keywords: {
          uz: ["Amir Olimxon", "Buxoro amirligi", "so'nggi amir", "bolsheviklar", "qizil armiya", "muhojirlik", "Afg'oniston", "vasiyatnoma", "Nuriddin Hatinog'lu", "Hoji Ismoil"],
          ru: ["Амир Алимхан", "Бухарский эмират", "последний эмир", "большевики", "Красная армия", "эмиграция", "Афганистан", "завещание", "Нуриддин Хатиноглу", "Ходжи Исмаил"],
          en: ["Amir Olimkhan", "Bukhara Emirate", "last emir", "Bolsheviks", "Red Army", "emigration", "Afghanistan", "will", "Nuriddin Khatinoglu", "Khoji Ismoil"],
        },
        file: "/files/Maqola pdf/M.Hamrayev maqola.pdf",
      },
      {
        id: 27,
        slug: "sport-oyinlari-asosida-jismoniy-sifatlarni-rivojlantirish-metodikasi",
        doi: "",
        volume: 1,
        issue: 1,
        title: {
          uz: "Sport o'yinlari asosida jismoniy sifatlarni rivojlantirish metodikasi",
          ru: "",
          en: "",
        },
        authors: "Oblayev Shaxzodbek Shamsiddin o'g'li",
        category: "sports",
        year: "2026",
        abstract: {
          uz:`Mazkur maqolada sport o‘yinlari asosida jismoniy sifatlarni 
  rivojlantirish metodikasining nazariy va amaliy jihatlari IMRAD modeli asosida 
  tahlil qilinadi. Tadqiqot jarayonida sport o‘yinlarining o‘quvchilarda kuch, 
  tezkorlik, chidamlilik, chaqqonlik va egiluvchanlik sifatlarini rivojlantirishdagi 
  samaradorligi o‘rganildi. Olingan natijalar sport o‘yinlariga asoslangan 
  mashg‘ulotlar an’anaviy jismoniy mashqlarga nisbatan yuqori motivatsiya va 
  ijobiy jismoniy rivojlanishni ta’minlashini ko‘rsatdi.`,
          ru: "",
          en: "",
        },
        pages: "227-233",
        publishDate: "19.01.2026",
        views: 131,
        likes: 6,
        downloads: 97,
        language: "O'zbek",
        keywords: {
          uz: ["sport o'yinlari", "jismoniy sifatlar", "metodika", "jismoniy tarbiya"],
          ru: [],
          en: [],
        },
        file: "/files/Maqola pdf/Oblayev Shaxzod.pdf",
      },
      {
        id: 28,
        slug: "mikrokoordinatsiya-mashqlarining-yengil-atletikadagi-samaradorligi",
        doi: "",
        volume: 1,
        issue: 1,
        title: {
          uz: "Mikrokoordinatsiya mashqlarining yengil atletikadagi samaradorligi",
          ru: "",
          en: "",
        },
        authors: "Abdullayeva Shahlo Asqar qizi",
        category: "sports",
        year: "2026",
        abstract: {
          uz:`Ushbu maqolada yengil atletikaning texnik jihatdan murakkab 
  turlaridan biri bo‘lgan 400 metr masofaga g‘ovlar osha yugurishda sportchi 
  qizlarning jismoniy tayyorgarligini takomillashtirish masalalari yoritilgan. 
  Tadqiqotning asosiy yangiligi sport mashg‘ulotlariga "mikroordinatsiya" 
  tushunchasini va uning maxsus mashqlar majmuasini tatbiq etishdan iborat. Muallif 
  tomonidan ishlab chiqilgan haftalik mikrotsikllar sportchilarning harakat 
  trayektoriyasini mikrodarajada boshqarish va neyromushak sinxronizatsiyasini 
  oshirishga yo‘naltirilgan. Pedagogik tajriba natijalari shuni ko‘rsatdiki, 
  mikroordinatsiya mashqlarining qo‘llanilishi tajriba guruhidagi sportchilarning 400 
  metrga g‘ovlar osha yugurish natijalarini va portlovchi kuch ko‘rsatkichlarini 
  nazorat guruhiga nisbatan sezilarli darajada yaxshilanishiga xizmat qilgan.`,
          ru: `В данной статье рассматриваются вопросы 
  совершенствования физической подготовки спортсменок в беге на 400 метров 
  с барьерами. Основная новизна исследования заключается во внедрении 
  понятия «микроординация» и комплекса специальных упражнений в 
  тренировочный процесс. Разработанные еженедельные микроциклы 
  направлены на управление траекторией движения на микроуровне и 
  повышение нейромышечной синхронизации. Результаты педагогического 
  эксперимента показали, что использование упражнений на микроординацию 
  способствовало значительному улучшению результатов в беге на 400 метров 
  с барьерами и показателей взрывной силы у спортсменок экспериментальной 
  группы по сравнению с контрольной`,
          en: `This article discusses the issues of improving the physical fitness of 
  female athletes in the 400-meter hurdles. The main novelty of the research lies in the 
  introduction of the concept of "microordination" and a complex of special exercises 
  into the training process. The developed weekly microcycles are aimed at managing 
  the movement trajectory at the micro-level and increasing neuromuscular 
  synchronization. The results of the pedagogical experiment showed that the use of 
  microordination exercises contributed to a significant improvement in 400-meter 
  hurdles results and explosive power indicators in the experimental group compared 
  to the control group`,
        },
        pages: "234-240",
        publishDate: "19.01.2026",
        views: 126,
        likes: 5,
        downloads: 92,
        language: "O'zbek",
        keywords: {
          uz: ["Mikrokoordinatsiya", "yengil atletika", "g‘ovlar osha yugurish", "400 metr", "jismoniy tayyorgarlik", "neyromushak sinxronizatsiyasi", "mikrotsikl", "pedagogik tajriba"],
          ru: ["Микроординация", "легкая атлетика", "бег с барьерами", 
  "400 метров", "физическая подготовка", "нейромышечная синхронизация", 
  "микроцикл", "педагогический эксперимент"],
          en: ["Microordination", "athletics", "hurdles", "400 meters", "physical fitness", 
  "neuromuscular synchronization", "microcycle", "pedagogical experiment"],
        },
        file: "/files/Maqola pdf/Абдуллаева.pdf",
      },
    ];

    // Keyinchalik API dan olish uchun tayyor funksiyalar
    // Ready-made functions for future API integration

    export function getArticles() {
      // TODO: Replace with API call: return axios.get('/api/articles')
      return Promise.resolve([...articles]);
    }

    export function getArticleById(id) {
      // TODO: Replace with API call: return axios.get(`/api/articles/${id}`)
      const article = articles.find((a) => a.id === Number(id));
      return Promise.resolve(article || null);
    }

    export function getArticleBySlug(slug) {
      // TODO: Replace with API call: return axios.get(`/api/articles/slug/${slug}`)
      const article = articles.find((a) => a.slug === slug);
      return Promise.resolve(article || null);
    }

    export function getArticlesByCategory(category) {
      if (!category) return getArticles();
      return Promise.resolve(articles.filter((a) => a.category === category));
    }

    export function getFeaturedArticles(count = 4) {
      // TODO: Replace with API call: return axios.get('/api/articles/featured')
      return Promise.resolve(
        [...articles].sort((a, b) => b.views - a.views).slice(0, count)
      );
    }

    export function getRelatedArticles(articleId, count = 3) {
      const article = articles.find((a) => a.id === Number(articleId));
      if (!article) return Promise.resolve([]);
      return Promise.resolve(
        articles
          .filter((a) => a.id !== article.id && a.category === article.category)
          .slice(0, count)
      );
    }

    // Til bo'yicha matn olish uchun yordamchi funksiya
    // Helper to get localized text from a multilingual field
    // Usage: getLocalized(article.title, 'uz') || getLocalized(article.title, 'en')
    export function getLocalized(field, lang = "uz") {
      if (!field || typeof field === "string") return field || "";
      return field[lang] || field.uz || field.en || field.ru || "";
    }
