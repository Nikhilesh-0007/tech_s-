export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  location: string;
  description: string;
  imageUrl: string;
}

export const projectsData: ProjectItem[] = [
  {
    id: "project-1",
    title: "Corporate Office Network Upgrade",
    category: "Networking & Cabling",
    location: "Hyderabad, India",
    description: "Design and deployment of a full Cat6A structured cabling grid and core routing upgrade for a 500+ seat facility.",
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "project-2",
    title: "Multi-Campus Fiber Loop ring",
    category: "Structured Cabling",
    location: "Pune, India",
    description: "Interconnecting 6 academic block buildings using an outdoor armored single-mode fiber optic ring with high-redundancy failover.",
    imageUrl: "https://images.unsplash.com/photo-1544256718-3bcf237f3974?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "project-3",
    title: "Healthcare Facility IP Surveillance",
    category: "CCTV & Security",
    location: "Chennai, India",
    description: "Installation of a 150+ camera IP CCTV surveillance system with AI analytics, failover NVR recording, and centralized security room monitors.",
    imageUrl: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "project-4",
    title: "High-Density Logistics Center Wi-Fi",
    category: "Wireless Solutions",
    location: "Bengaluru, India",
    description: "Predictive heatmap design and active deployment of rugged, IP67-rated warehouse access points for real-time barcode scanner tracking.",
    imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "project-5",
    title: "Luxury Hotel Network & Card Access",
    category: "Hospitality IT & Access Control",
    location: "Mumbai, India",
    description: "Deploying high-speed guest Wi-Fi gateways, lobby fiber points, and smart RFID hotel door lock server system.",
    imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "project-6",
    title: "Data Center Fiber Core Switch Refresh",
    category: "Server & Data Center",
    location: "Noida, India",
    description: "Live hot-migration of legacy core switches to high-density 100G fiber switches without active system downtime.",
    imageUrl: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=800&auto=format&fit=crop"
  }
];
