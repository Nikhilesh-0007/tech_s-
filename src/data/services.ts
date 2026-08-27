export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string; // Will map to a Lucide icon component in the UI
}

export const servicesData: ServiceItem[] = [
  {
    id: "network-infrastructure",
    title: "Network Infrastructure",
    description: "Enterprise routing, switching, and core network designs built for high throughput, low latency, and zero-fail availability.",
    iconName: "Network"
  },
  {
    id: "it-infrastructure",
    title: "IT Infrastructure",
    description: "End-to-end hardware provisioning, systems integration, and virtualization to power your daily business operations.",
    iconName: "Cpu"
  },
  {
    id: "structured-cabling",
    title: "Structured Cabling",
    description: "Cat6/Cat6A and optical fiber cabling installations, certification, and cable management for seamless data transmission.",
    iconName: "Layers"
  },
  {
    id: "server-data-center",
    title: "Server & Data Center Solutions",
    description: "Rack optimization, server deployment, cooling path coordination, and backup power integration for high-density compute.",
    iconName: "HardDrive"
  },
  {
    id: "network-security",
    title: "Network Security",
    description: "Next-gen firewalls, threat prevention systems, endpoint protection, and VPN tunnels to keep business data secure.",
    iconName: "Shield"
  },
  {
    id: "cctv-surveillance",
    title: "CCTV & Surveillance",
    description: "IP-based high-definition cameras, network video recorders (NVR), remote monitoring, and smart video analytics.",
    iconName: "Eye"
  },
  {
    id: "wifi-wireless",
    title: "Wi-Fi & Wireless Solutions",
    description: "Site survey, heatmaps, controller-based high-density access points, and guest network isolation for reliable coverage.",
    iconName: "Wifi"
  },
  {
    id: "access-control",
    title: "Access Control",
    description: "Biometric and RFID readers, magnetic door locks, and centralized management console for perimeter security.",
    iconName: "Lock"
  },
  {
    id: "cloud-solutions",
    title: "Cloud & Business Solutions",
    description: "Hybrid cloud migration, Google Workspace, Microsoft 365, secure cloud backup, and recovery setup.",
    iconName: "Cloud"
  },
  {
    id: "it-support",
    title: "IT Support & Maintenance",
    description: "SLA-driven maintenance contracts, reactive helpdesk, server patch management, and periodic health checks.",
    iconName: "Wrench"
  }
];
