export interface Member {
  name: string;
  photo: string;
  linkedinUrl?: string;
  department: string; // key matching aboutPage translation keys (e.g. mechanicalTitle, electronicsTitle, marketingTitle, managementTitle)
}

export const members: Member[] = [
  {
    name: "Diogo Ribeiro",
    photo: "/diogo.jpeg",
    linkedinUrl: "https://www.linkedin.com/in/dribeiro28/",
    department: "electronicsTitle"
  },
  {
    name: "Gabriel Faria",
    photo: "/gabriel.png",
    linkedinUrl: "https://linkedin.com/in/gabriel-ldfaria",
    department: "electronicsTitle"
  },
  {
    name: "Guilherme Gonçalves",
    photo: "/guilherme.png",
    linkedinUrl: "https://www.linkedin.com/in/guilherme-gon%C3%A7alves4/",
    department: "marketingTitle"
  },
  {
    name: "Hugo Vieira",
    photo: "/hugo.png",
    linkedinUrl: "https://www.linkedin.com/in/hugofariavieira/",
    department: "managementTitle"
  },
  {
    name: "Licínia Mendes",
    photo: "/licinia.jpeg",
    linkedinUrl: "https://www.linkedin.com/in/liciniaamendes/",
    department: "mechanicalTitle"
  },
  {
    name: "Patrícia Gomes",
    photo: "/patricia.jpeg",
    linkedinUrl: "",
    department: "marketingTitle"
  },
  {
    name: "Rita Marracho",
    photo: "/Rita_G&P_MKT.jpg",
    linkedinUrl: "https://www.linkedin.com/in/ana-rita-brand%C3%A3o-marracho-b21196385",
    department: "marketingTitle"
  },
  {
    name: "André Almeida",
    photo: "/Andre_Almeida_MEC&ELETRO.jpg",
    linkedinUrl: "https://www.linkedin.com/in/andrefralmeida/",
    department: "mechanicalTitle"
  },
  {
    name: "Dinis Ribeiro",
    photo: "/Dinis_MEC&Eletro.jpg",
    linkedinUrl: "https://www.linkedin.com/in/dinis-ribeiro-759673363",
    department: "mechanicalTitle"
  },
  {
    name: "Dinis Matos",
    photo: "/Dinis_Matos.jpg",
    linkedinUrl: "",
    department: "mechanicalTitle"
  },
  {
    name: "Francisco Cunha",
    photo: "/Francisco_G&P_MKT.png",
    linkedinUrl: "https://www.linkedin.com/in/franciscorosascunha",
    department: "managementTitle"
  },
  {
    name: "Margarida Carvalho",
    photo: "/Margarida_Carvalho_G&P_MKT.jpg",
    linkedinUrl: "https://www.linkedin.com/in/margaridancarvalho/",
    department: "managementTitle"
  },
  {
    name: "Maria Surreira",
    photo: "/Maria_Surreira_Mec&Eletro.jpg",
    linkedinUrl: "https://www.linkedin.com/in/maria-surreira-83221538b",
    department: "mechanicalTitle"
  },
  {
    name: "Raquel Alves",
    photo: "/Raquel_Alves_MEC&ELEtro.jpg",
    linkedinUrl: "",
    department: "mechanicalTitle"
  },
  {
    name: "Luís Fernandes",
    photo: "/Luis_Fernandes.jpg",
    linkedinUrl: "",
    department: "electronicsTitle"
  },
  {
    name: "Maria Monge",
    photo: "/Maria_Monge_G&P_MKT.jpg",
    linkedinUrl: "https://www.linkedin.com/in/maria-monge-in/",
    department: "marketingTitle"
  },
  {
    name: "João Valério",
    photo: "/Joao_Valerio.jpg",
    linkedinUrl: "https://www.linkedin.com/in/jo%C3%A3o-val%C3%A9rio-204a24218",
    department: "mechanicalTitle"
  },
  {
    name: "Bruno Cerqueira",
    photo: "/Bruno_Cerqueira_MEC&Eletro.jpg",
    linkedinUrl: "",
    department: "electronicsTitle"
  }
];