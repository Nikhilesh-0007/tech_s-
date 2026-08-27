export interface IndustryItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export const industriesData: IndustryItem[] = [
  {
    id: "corporate",
    title: "Corporate Offices",
    description: "High-density network deployment, structured cabling, and smart access control to power modern corporate environments.",
    iconName: "Building2"
  },
  {
    id: "education",
    title: "Education",
    description: "Campus-wide Wi-Fi networks, structured server racks, classroom projectors, and centralized IP-based PA systems.",
    iconName: "GraduationCap"
  },
  {
    id: "healthcare",
    title: "Healthcare",
    description: "Secure HIPAA-compliant networks, CCTV surveillance, emergency power coordination, and access-controlled wards.",
    iconName: "Activity"
  },
  {
    id: "retail",
    title: "Retail",
    description: "Reliable POS networking, public guest Wi-Fi, loss prevention surveillance, and multi-location networking integrations.",
    iconName: "ShoppingCart"
  },
  {
    id: "hospitality",
    title: "Hospitality",
    description: "Seamless high-bandwidth guest Wi-Fi, keycard access systems, in-room IP telephony, and robust network management.",
    iconName: "Hotel"
  },
  {
    id: "manufacturing",
    title: "Manufacturing",
    description: "Industrial-grade network cabling, high-security server rooms, perimeter CCTV cameras, and factory floor Wi-Fi.",
    iconName: "Factory"
  },
  {
    id: "government",
    title: "Government",
    description: "High-security network architectures, local data centers, physical biometric access controls, and strict compliance setups.",
    iconName: "Landmark"
  },
  {
    id: "residential",
    title: "Residential & Commercial",
    description: "FTTH (Fiber to the home) setup, intercom systems, structured lobby cabling, and automated visitor entry systems.",
    iconName: "Home"
  }
];
