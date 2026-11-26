/**
 * INDUSTRIES AND CLIENTS
 * Sectors shown as cards and the client logo grid on /industries/.
 * A client with logo: null shows its name only (the live site has no logo file for it yet).
 * To add a logo, put the PNG in public/images/clients/ and set its path here.
 */

export type Sector = { key: string; title: string; text: string; tags: string };
export type Client = { name: string; sector: string; color: string; logo: string | null };

export const sectors: Sector[] = [
  {
    "key": "energy",
    "title": "Energy, Mining & Industrial",
    "text": "Mining, energy, heavy industry and manufacturers.",
    "tags": "Audit · Advisory"
  },
  {
    "key": "financial",
    "title": "Financial Services",
    "text": "Banks, insurers, finance and investment companies.",
    "tags": "Audit · Risk"
  },
  {
    "key": "tech",
    "title": "Technology",
    "text": "SaaS, fintech and high-growth technology firms.",
    "tags": "IT · Tax · Corporate"
  },
  {
    "key": "health",
    "title": "Healthcare",
    "text": "Hospitals, clinics and health-tech.",
    "tags": "Audit · Advisory"
  },
  {
    "key": "consumer",
    "title": "Consumer & Retail",
    "text": "Retail, F&B, e-commerce and consumer brands.",
    "tags": "Audit · Corporate"
  },
  {
    "key": "public",
    "title": "Public Sector & Infrastructure",
    "text": "Authorities, utilities, ports and water.",
    "tags": "Audit · Advisory"
  },
  {
    "key": "agri",
    "title": "Agriculture & Food",
    "text": "Aquaculture, agri and food producers.",
    "tags": "Audit · Advisory"
  },
  {
    "key": "realestate",
    "title": "Real Estate & Construction",
    "text": "Developers, REITs and contractors.",
    "tags": "Audit · Corporate"
  },
  {
    "key": "develop",
    "title": "Development & Non-profit",
    "text": "NGOs and international organisations.",
    "tags": "Audit · Risk"
  }
];

export const clients: Client[] = [
  {
    "name": "Maaden",
    "sector": "energy",
    "color": "#00843d",
    "logo": "/images/clients/maaden.png"
  },
  {
    "name": "Hadeed (SABIC)",
    "sector": "energy",
    "color": "#0033a0",
    "logo": "/images/clients/hadeed-sabic.png"
  },
  {
    "name": "ALUPCO",
    "sector": "energy",
    "color": "#0072bc",
    "logo": "/images/clients/alupco.png"
  },
  {
    "name": "Hira Industries",
    "sector": "energy",
    "color": "#c8102e",
    "logo": null
  },
  {
    "name": "Mayar International",
    "sector": "energy",
    "color": "#1f3a93",
    "logo": null
  },
  {
    "name": "United Mining",
    "sector": "energy",
    "color": "#16645a",
    "logo": null
  },
  {
    "name": "Petromin",
    "sector": "energy",
    "color": "#e2001a",
    "logo": null
  },
  {
    "name": "RAWABI Holding",
    "sector": "energy",
    "color": "#0091b3",
    "logo": null
  },
  {
    "name": "Tadweer",
    "sector": "energy",
    "color": "#2e7d32",
    "logo": null
  },
  {
    "name": "D360 Bank",
    "sector": "financial",
    "color": "#7a2e8e",
    "logo": "/images/clients/d360-bank.png"
  },
  {
    "name": "Al Raedah Finance",
    "sector": "financial",
    "color": "#1b6e5a",
    "logo": "/images/clients/al-raedah-finance.png"
  },
  {
    "name": "Abyan Capital",
    "sector": "financial",
    "color": "#0e7c7b",
    "logo": "/images/clients/abyan-capital.png"
  },
  {
    "name": "Bayan Credit Bureau",
    "sector": "financial",
    "color": "#0b5394",
    "logo": "/images/clients/bayan-credit-bureau.png"
  },
  {
    "name": "Social Development Bank",
    "sector": "financial",
    "color": "#006c35",
    "logo": null
  },
  {
    "name": "Tasheel Finance",
    "sector": "financial",
    "color": "#00529b",
    "logo": null
  },
  {
    "name": "PayTabs",
    "sector": "financial",
    "color": "#0098da",
    "logo": "/images/clients/paytabs.png"
  },
  {
    "name": "Madfu",
    "sector": "financial",
    "color": "#6c2bd9",
    "logo": "/images/clients/madfu.png"
  },
  {
    "name": "Wataniya Insurance",
    "sector": "financial",
    "color": "#00a651",
    "logo": null
  },
  {
    "name": "Foodics",
    "sector": "tech",
    "color": "#ff5a5f",
    "logo": "/images/clients/foodics.png"
  },
  {
    "name": "Unifonic",
    "sector": "tech",
    "color": "#5b2a86",
    "logo": "/images/clients/unifonic.png"
  },
  {
    "name": "iMENA",
    "sector": "tech",
    "color": "#16335b",
    "logo": "/images/clients/imena.png"
  },
  {
    "name": "Saudi Azm",
    "sector": "tech",
    "color": "#00a8a8",
    "logo": null
  },
  {
    "name": "Tahakom",
    "sector": "tech",
    "color": "#1b3a6b",
    "logo": null
  },
  {
    "name": "SmartLink",
    "sector": "tech",
    "color": "#2e7d9a",
    "logo": null
  },
  {
    "name": "Systems Limited",
    "sector": "tech",
    "color": "#ed1c24",
    "logo": null
  },
  {
    "name": "Edarat",
    "sector": "tech",
    "color": "#0072bc",
    "logo": null
  },
  {
    "name": "LearnOBots",
    "sector": "tech",
    "color": "#f7941e",
    "logo": null
  },
  {
    "name": "Almoosa Hospital",
    "sector": "health",
    "color": "#00a99d",
    "logo": "/images/clients/almoosa-hospital.png"
  },
  {
    "name": "Quaid-e-Azam Hospital",
    "sector": "health",
    "color": "#00529b",
    "logo": null
  },
  {
    "name": "Meri Sehat",
    "sector": "health",
    "color": "#2daa9e",
    "logo": "/images/clients/meri-sehat.png"
  },
  {
    "name": "Xylexa",
    "sector": "health",
    "color": "#6c2bd9",
    "logo": "/images/clients/xylexa.png"
  },
  {
    "name": "Arabian Oud",
    "sector": "consumer",
    "color": "#9c7a3c",
    "logo": "/images/clients/arabian-oud.png"
  },
  {
    "name": "Al Rabie",
    "sector": "consumer",
    "color": "#4ca22f",
    "logo": "/images/clients/al-rabie.png"
  },
  {
    "name": "Leejam Sports",
    "sector": "consumer",
    "color": "#ed1c24",
    "logo": null
  },
  {
    "name": "Syarah",
    "sector": "consumer",
    "color": "#00b2a9",
    "logo": "/images/clients/syarah.png"
  },
  {
    "name": "Wego",
    "sector": "consumer",
    "color": "#e5006d",
    "logo": null
  },
  {
    "name": "WeBook",
    "sector": "consumer",
    "color": "#7a1fa2",
    "logo": null
  },
  {
    "name": "Depilex",
    "sector": "consumer",
    "color": "#e5007d",
    "logo": null
  },
  {
    "name": "Mawani",
    "sector": "public",
    "color": "#0b7a4b",
    "logo": "/images/clients/mawani.png"
  },
  {
    "name": "National Water Company",
    "sector": "public",
    "color": "#0072bc",
    "logo": null
  },
  {
    "name": "MEPCO",
    "sector": "public",
    "color": "#1f6fb2",
    "logo": "/images/clients/mepco.png"
  },
  {
    "name": "Asyad",
    "sector": "public",
    "color": "#0096d6",
    "logo": null
  },
  {
    "name": "SALIC",
    "sector": "agri",
    "color": "#007a33",
    "logo": null
  },
  {
    "name": "Naqua",
    "sector": "agri",
    "color": "#0098c3",
    "logo": null
  },
  {
    "name": "Tabuk Fish",
    "sector": "agri",
    "color": "#0072bc",
    "logo": null
  },
  {
    "name": "Al Majal Al Arabi",
    "sector": "realestate",
    "color": "#b8860b",
    "logo": null
  },
  {
    "name": "Red Sea International",
    "sector": "realestate",
    "color": "#c8102e",
    "logo": null
  },
  {
    "name": "Al Jouf Cement",
    "sector": "realestate",
    "color": "#5b6770",
    "logo": null
  },
  {
    "name": "Save the Children",
    "sector": "develop",
    "color": "#e1251b",
    "logo": "/images/clients/save-the-children.png"
  },
  {
    "name": "Pakistan Red Crescent",
    "sector": "develop",
    "color": "#ed1c24",
    "logo": null
  },
  {
    "name": "Indus Heritage Trust",
    "sector": "develop",
    "color": "#8a6d3b",
    "logo": null
  },
  {
    "name": "Invest2Innovate",
    "sector": "develop",
    "color": "#f7941e",
    "logo": "/images/clients/invest2innovate.png"
  }
];
