export interface TeamMember {
  name: string;
  role: string;
  focus: string[];
  companies: string[];
  initials: string;
}

export const team: TeamMember[] = [
  { name: "Avery Chen", role: "General Partner", focus: ["AI", "Infrastructure"], companies: ["Northwind", "Parallel"], initials: "AC" },
  { name: "Maya Okafor", role: "General Partner", focus: ["FinTech", "B2B"], companies: ["Ledgerly", "Coastline"], initials: "MO" },
  { name: "Daniel Park", role: "General Partner", focus: ["Consumer", "Marketplaces"], companies: ["Tidewater", "Glide"], initials: "DP" },
  { name: "Priya Subramanian", role: "Partner", focus: ["HealthTech", "Bio"], companies: ["Helix", "Vela Health"], initials: "PS" },
  { name: "Jonas Weiss", role: "Partner", focus: ["Semiconductors", "Deep Tech"], companies: ["Quanta", "Vector"], initials: "JW" },
  { name: "Sara Lindqvist", role: "Partner", focus: ["AI", "Developer Tools"], companies: ["Forge", "Tessera"], initials: "SL" },
  { name: "Ravi Kapoor", role: "Principal", focus: ["B2B SaaS", "Vertical AI"], companies: ["Northstar", "Outpost"], initials: "RK" },
  { name: "Elena Russo", role: "Principal", focus: ["FinTech", "Crypto"], companies: ["Mintwave"], initials: "ER" },
  { name: "Marcus Hale", role: "Principal", focus: ["Infrastructure", "Security"], companies: ["Bastion", "Cipher"], initials: "MH" },
  { name: "Yuki Tanaka", role: "Investor", focus: ["AI", "Robotics"], companies: ["Atlas"], initials: "YT" },
  { name: "Cameron Reid", role: "Investor", focus: ["Consumer", "Media"], companies: ["Loop"], initials: "CR" },
  { name: "Noor Haddad", role: "Investor", focus: ["HealthTech"], companies: ["Pulse"], initials: "NH" },
  { name: "Theo Andersen", role: "Platform", focus: ["Talent"], companies: [], initials: "TA" },
  { name: "Isla Moreno", role: "Platform", focus: ["Marketing"], companies: [], initials: "IM" },
  { name: "Quinn Bauer", role: "Operations", focus: ["Finance"], companies: [], initials: "QB" },
  { name: "Wren Sato", role: "Operations", focus: ["Legal"], companies: [], initials: "WS" },
];
