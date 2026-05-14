export type Status = "Active" | "Acquired" | "IPO";
export type Category = "AI" | "B2B" | "Consumer" | "FinTech" | "HealthTech" | "Infrastructure" | "Semiconductors";

export interface Company {
  name: string;
  status: Status;
  categories: Category[];
  featured?: boolean;
}

export const companies: Company[] = [
  { name: "Northwind", status: "Active", categories: ["AI", "Infrastructure"], featured: true },
  { name: "Parallel", status: "Active", categories: ["AI"], featured: true },
  { name: "Ledgerly", status: "IPO", categories: ["FinTech"], featured: true },
  { name: "Coastline", status: "Active", categories: ["FinTech", "B2B"], featured: true },
  { name: "Tidewater", status: "Acquired", categories: ["Consumer"], featured: true },
  { name: "Glide", status: "Active", categories: ["Consumer"], featured: true },
  { name: "Helix", status: "IPO", categories: ["HealthTech"], featured: true },
  { name: "Vela Health", status: "Active", categories: ["HealthTech"], featured: true },
  { name: "Quanta", status: "Active", categories: ["Semiconductors"], featured: true },
  { name: "Vector", status: "Acquired", categories: ["Semiconductors"], featured: true },
  { name: "Forge", status: "Active", categories: ["AI", "B2B"], featured: true },
  { name: "Tessera", status: "Active", categories: ["AI", "Infrastructure"], featured: true },
  { name: "Northstar", status: "Active", categories: ["B2B"] },
  { name: "Outpost", status: "Active", categories: ["B2B"] },
  { name: "Mintwave", status: "Active", categories: ["FinTech"] },
  { name: "Bastion", status: "Active", categories: ["Infrastructure"] },
  { name: "Cipher", status: "Acquired", categories: ["Infrastructure"] },
  { name: "Atlas", status: "Active", categories: ["AI"] },
  { name: "Loop", status: "Active", categories: ["Consumer"] },
  { name: "Pulse", status: "Active", categories: ["HealthTech"] },
  { name: "Cobalt", status: "Acquired", categories: ["FinTech"] },
  { name: "Ember", status: "Active", categories: ["Consumer"] },
  { name: "Granite", status: "IPO", categories: ["B2B"] },
  { name: "Halcyon", status: "Active", categories: ["AI"] },
  { name: "Indigo", status: "Active", categories: ["HealthTech"] },
  { name: "Junction", status: "Acquired", categories: ["B2B"] },
  { name: "Keystone", status: "Active", categories: ["Infrastructure"] },
  { name: "Lumen", status: "Active", categories: ["Semiconductors"] },
  { name: "Meridian", status: "IPO", categories: ["FinTech"] },
  { name: "Nimbus", status: "Active", categories: ["Infrastructure"] },
  { name: "Orbit", status: "Active", categories: ["Consumer"] },
  { name: "Pioneer", status: "Acquired", categories: ["AI"] },
  { name: "Quill", status: "Active", categories: ["B2B"] },
  { name: "Rivet", status: "Active", categories: ["Infrastructure"] },
  { name: "Solstice", status: "Active", categories: ["HealthTech"] },
  { name: "Trellis", status: "Active", categories: ["B2B"] },
  { name: "Umbra", status: "Acquired", categories: ["Consumer"] },
  { name: "Veridian", status: "Active", categories: ["AI"] },
  { name: "Wayfarer", status: "Active", categories: ["Consumer"] },
  { name: "Xenon", status: "Active", categories: ["Semiconductors"] },
  { name: "Yarrow", status: "Active", categories: ["HealthTech"] },
  { name: "Zenith", status: "IPO", categories: ["FinTech"] },
];

export const allCategories: Category[] = [
  "AI",
  "B2B",
  "Consumer",
  "FinTech",
  "HealthTech",
  "Infrastructure",
  "Semiconductors",
];
