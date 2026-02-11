// Tahririyat ma'lumotlari - keyinchalik backenddan olinadi
// Editorial board data - will be fetched from backend later

export const chiefEditor = {
  name: "Atamuradov Sherzod Akramovich",
  degree: "i.f.d. (PhD), dotsent",
  position: "Bosh muharrir",
  organization: "Sharq Universiteti",
};

export const deputyEditor = {
  name: "Shirinova Shaxnoza Abdinabiyevna",
  degree: "",
  position: "Bosh muharrir o'rinbosari",
  organization: "Sharq Universiteti",
};

export const secretary = {
  name: "Qodirov Bektosh Sherquvat o'g'li",
  degree: "",
  position: "Mas'ul kotib",
  organization: "Sharq Universiteti",
};

export const boardMembers = [
  {
    id: 1,
    name: "Ashurova Nasiba Batirovna",
    degree: "iqtisodiyot fanlari doktori, professor",
    organization: "Sharq Universiteti",
  },
  {
    id: 2,
    name: "Zaynalov Jahongir Rasulovich",
    degree: "iqtisodiyot fanlari doktori, professor",
    organization: "Sharq Universiteti",
  },
  {
    id: 3,
    name: "Kostayev Umidjon Umirzakovich",
    degree: "iqtisodiyot fanlari doktori, dotsent",
    organization: "Sharq Universiteti",
  },
  {
    id: 4,
    name: "Baqoyev Husan Nuriddinovich",
    degree: "iqtisodiyot fanlari bo'yicha falsafa doktori (PhD), dotsent",
    organization: "Sharq Universiteti",
  },
  {
    id: 5,
    name: "Rashidov Mels Karimovich",
    degree: "iqtisodiyot fanlari bo'yicha falsafa doktori (PhD), dotsent",
    organization: "Sharq Universiteti",
  },
  {
    id: 6,
    name: "Islomova Risolat Abdullayevna",
    degree: "iqtisodiyot fanlari bo'yicha falsafa doktori (PhD), dotsent",
    organization: "Sharq Universiteti",
  },
  {
    id: 7,
    name: "Yodgorova Shaxnoza Xayridinovna",
    degree: "iqtisodiyot fanlari bo'yicha falsafa doktori (PhD), dotsent",
    organization: "Sharq Universiteti",
  },
  {
    id: 8,
    name: "Kalandarov Ilyos Ibodullayevich",
    degree: "texnika fanlari doktori (DSc), dotsent",
    organization: "Sharq Universiteti",
  },
  {
    id: 9,
    name: "Botirov To'lqin Vafoqulovich",
    degree: "texnika fanlari doktori (DSc), dotsent",
    organization: "Sharq Universiteti",
  },
  {
    id: 10,
    name: "Ishmamatov Matlab Raxmatovich",
    degree: "texnika fanlari nomzodi, dotsent",
    organization: "Sharq Universiteti",
  },
  {
    id: 11,
    name: "Tagayev Ilhom Axrorovich",
    degree: "qishloq xo'jaligi fanlari nomzodi, dotsent",
    organization: "Sharq Universiteti",
  },
  {
    id: 12,
    name: "Husanov Bahodir Sheraliyevich",
    degree: "iqtisodiyot fanlari bo'yicha falsafa doktori (PhD), dotsent",
    organization: "Sharq Universiteti",
  },
  {
    id: 13,
    name: "Aliyeva Susanna Seyranovna",
    degree: "iqtisodiyot fanlari bo'yicha falsafa doktori (PhD), dotsent",
    organization: "Sharq Universiteti",
  },
  {
    id: 14,
    name: "Mahmudov G'iyosjon Baqoyevich",
    degree: "texnika fanlari bo'yicha falsafa doktori (PhD)",
    organization: "Sharq Universiteti",
  },
  {
    id: 15,
    name: "Yorkulov Behzod Abdugabbarovich",
    degree: "texnika fanlari bo'yicha falsafa doktori (PhD)",
    organization: "Sharq Universiteti",
  },
];

// Keyinchalik API dan olish uchun tayyor funksiyalar

export function getChiefEditor() {
  // TODO: Replace with API call
  return Promise.resolve({ ...chiefEditor });
}

export function getDeputyEditor() {
  // TODO: Replace with API call
  return Promise.resolve({ ...deputyEditor });
}

export function getSecretary() {
  // TODO: Replace with API call
  return Promise.resolve({ ...secretary });
}

export function getBoardMembers() {
  // TODO: Replace with API call
  return Promise.resolve([...boardMembers]);
}
