export interface ProductCat {
  id: string;
  title: string;
  desc: string;
  iconName: string;
  imageUrl: string;
}

export interface ServiceCat {
  id: string;
  title: string;
  short: string;
  body: string;
  iconName: string;
  imageUrl: string;
}

export interface ProcessItem {
  no: string;
  title: string;
  text: string;
}

export const sbnProfile = {
  name: "CIS Tech Solutions",
  tagline: "Refurbished IT Solutions",
  descriptor: "New & Refurbished Networking Hardware | IT Infrastructure | Data Center | Telecom",
  hero: {
    label: "NEW • REFURBISHED • RENTAL • SOFTWARE SOLUTIONS",
    heading: "Powering Networks With Trusted Hardware & Infrastructure",
    sub: "Premier Supplier of New & Refurbished Switches, Servers, Routers, Firewalls, and Modules—Backed by Expert Technical Support."
  },
  trustStrip: [
    "PAN-INDIA & GLOBAL SUPPLY",
    "REDUCED IT CAPEX",
    "RAPID DISPATCH",
    "RIGOROUSLY TESTED",
    "FLEXIBLE RENTALS"
  ],
  about: {
    heading: "Reliable Networking Hardware. Practical Infrastructure Solutions.",
    body: "CIS Tech Solutions carries a full range of New & Refurbished Networking Hardware. We serve customers pan India and globally, with active supplies to international markets like the UAE, China, South Korea, and the USA.",
    range: [
      "Switches",
      "Servers",
      "Routers",
      "Firewalls",
      "Server RAM",
      "SFP Modules",
      "Fiber Patch Cords",
      "QSFP Modules",
      "Network Interface Cards",
      "Managed & Unmanaged Switches",
      "VoIP Phones",
      "Wireless Access Points",
      "Line Cards & Supervisor Engines"
    ],
    offers: ["Sales", "Rental", "Technical Support"]
  },
  quality: {
    heading: "Quality & Reliability Are Non-Negotiable",
    body: "Every refurbished server, switch, router and firewall undergoes multi-point inspection and stress testing by experienced network engineers. Equipment is supplied in optimal operational condition and backed by dependable warranty support.",
    cards: ["Multi-Point Inspection", "Stress Tested", "Engineer Verified", "Operationally Checked", "Warranty Support"]
  },
  process: [
    { no: "01", title: "Sourcing", text: "Equipment sourced through trusted enterprise supply channels." },
    { no: "02", title: "Inspection", text: "Multi-point physical and component level inspection." },
    { no: "03", title: "Testing", text: "Load and stress testing across ports, memory and power." },
    { no: "04", title: "Verification", text: "Configuration and operational verification by engineers." },
    { no: "05", title: "Delivery", text: "Packed, documented and dispatched with support in place." }
  ] as ProcessItem[],
  why: [
    "New & Refurbished Options",
    "Wide Hardware Range",
    "Enterprise Networking Brands",
    "Engineer-Checked Equipment",
    "Flexible Rental Plans",
    "Expert Technical Support"
  ],
  phones: ["6362314041"],
  whatsapp: "6362314041",
  emails: ["cistechsolutions0@gmail.com"],
  address: "GROUND FLOOR, NO 158, 10TH MAIN, BTM Layout Stage 1, Bengaluru, Bengaluru Urban, Karnataka, 560029",
  hours: {
    days: "Monday to Friday - 11:00 AM to 7:00 PM",
    time: "Saturday - 11:00 AM to 3:00 PM | Sunday - Off"
  },
  ceo: "Dadapeer",
  maps: {
    share: "https://maps.app.goo.gl/2ZExqkCKFWr6cs2n6",
    embed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15555.02641902381!2d77.58776264665238!3d12.923359040622639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae150006ddd0d5%3A0xc5a2c15fc0d89e4f!2sSBN%20networks!5e0!3m2!1sen!2sin!4v1787309366617!5m2!1sen!2sin",
    directions: "https://www.google.com/maps/dir/?api=1&destination=SBN%20networks"
  },
  social: {
    youtube: "https://www.youtube.com/@SBNNETWORKS42",
    instagram: "https://www.instagram.com/sbn_networks_cisco",
    indiamart: "https://www.indiamart.com/sbnnetworks/",
    linkedin: "https://www.linkedin.com/in/sbn-networks-08146542b?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
  }
};

export const sbnProducts: ProductCat[] = [
  {
    id: "switches",
    title: "Switches",
    desc: "Enterprise managed, PoE, and optical switches for core, distribution, and edge networks.",
    iconName: "Network",
    imageUrl: "/products/switches.png"
  },
  {
    id: "servers",
    title: "Servers",
    desc: "Rack and tower servers configured with multi-core CPUs, ECC RAM, and high-density storage arrays.",
    iconName: "Server",
    imageUrl: "/products/servers.png"
  },
  {
    id: "routers",
    title: "Routers",
    desc: "High-capacity core and branch edge routers for enterprise WAN routing and VPN tunnels.",
    iconName: "Cpu",
    imageUrl: "/products/routers.png"
  },
  {
    id: "firewalls",
    title: "Firewalls",
    desc: "Next-generation perimeter security appliances, threat detection engines, and gateway shields.",
    iconName: "Shield",
    imageUrl: "/products/firewalls.png"
  },
  {
    id: "server-ram",
    title: "Server RAM",
    desc: "High-performance ECC registered DDR3, DDR4, and DDR5 memory modules for virtualization workloads.",
    iconName: "Layers",
    imageUrl: "/products/server-ram.png"
  },
  {
    id: "sfp-modules",
    title: "SFP Modules",
    desc: "1G, 10G, and 25G optical transceivers for reliable short and long-range fiber switch uplinks.",
    iconName: "Zap",
    imageUrl: "/products/sfp-modules.png"
  },
  {
    id: "fiber-patch-cords",
    title: "Fiber Patch Cords",
    desc: "Single-mode and multi-mode fiber optic patch cables, duplex jumpers, and armored patch leads.",
    iconName: "Activity",
    imageUrl: "/products/fiber-patch-cords.png"
  },
  {
    id: "qsfp-modules",
    title: "QSFP Modules",
    desc: "40G and 100G high-density optical transceiver modules for data center core switch fabrics.",
    iconName: "Zap",
    imageUrl: "/products/qsfp-modules.png"
  },
  {
    id: "nic",
    title: "Network Interface Cards",
    desc: "High-speed PCIe copper and optical fiber NIC adapters for enterprise servers and host nodes.",
    iconName: "Cpu",
    imageUrl: "/products/nic.png"
  },
  {
    id: "managed-switches",
    title: "Managed & Unmanaged Switches",
    desc: "Full Layer 2/3 managed switches and plug-and-play unmanaged switches for branch networks.",
    iconName: "Network",
    imageUrl: "/products/managed-switches.png"
  },
  {
    id: "voip-phones",
    title: "VoIP Phones",
    desc: "Enterprise IP desk phones, VoIP terminals, conference phones, and attendant extension pads.",
    iconName: "Phone",
    imageUrl: "/products/voip-phones.png"
  },
  {
    id: "wireless-ap",
    title: "Wireless Access Points",
    desc: "High-speed Wi-Fi 6 / 6E indoor and outdoor enterprise wireless access points and controllers.",
    iconName: "Wifi",
    imageUrl: "/products/wireless-ap.png"
  },
  {
    id: "line-cards",
    title: "Line Cards & Supervisor Engines",
    desc: "Chassis supervisor engines, interface line cards, power modules, and core switch expansion blades.",
    iconName: "HardDrive",
    imageUrl: "/products/line-cards.png"
  }
];

export const sbnServices: ServiceCat[] = [
  {
    id: "os-upgrades",
    title: "IOS / OS Upgrades & Software Solutions",
    short: "Firmware updates, Cisco IOS/JunOS flashing, OS patching, software troubleshooting, and license configuration across all network devices.",
    body: "Keep your networking hardware protected and running optimally. We handle flashing new versions, checking licenses, installing firmware patches, and resetting OS credentials across routers, switches, and firewalls.",
    iconName: "Cpu",
    imageUrl: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "troubleshooting-support",
    title: "Network Troubleshooting & Tech Support",
    short: "Remote and on-site fault isolation, device configuration fixes, network link diagnostics, and hardware replacement support.",
    body: "SLA-backed reactive troubleshooting and technical assistance. Our network engineers help you identify loop events, interface drops, IP route routing issues, and configure backup parameters.",
    iconName: "Wrench",
    imageUrl: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "datacenter-infra",
    title: "Data Center Works & Infrastructure",
    short: "Server room setups, structured fiber/copper cabling, rack integration, cable management, and PDU distribution deployment.",
    body: "Physical rack-and-stack integration, structured patch panels cabling, labeled trunk runs, clean fiber path splicing, and cooling path coordination inside corporate server rooms.",
    iconName: "Layers",
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "sourcing-supply",
    title: "Hardware Sourcing & Supply",
    short: "Certified new, refurbished, and pre-owned switches, servers, routers, RAM, fiber optics, and transceivers.",
    body: "PAN-India hardware logistics. We maintain direct inventory and supply links for Cisco, Juniper, Fortinet, Dell, and HP hardware, dramatically reducing IT Capex.",
    iconName: "Network",
    imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "hardware-rentals",
    title: "Enterprise Hardware Rentals",
    short: "Short- and long-term rental plans for testing labs, temporary server deployments, and event networks.",
    body: "Reduce temporary infrastructure deployment costs. We offer switches, routers, and server rentals with flexible short-term and long-term lease packages.",
    iconName: "Clock",
    imageUrl: "https://images.unsplash.com/photo-1563770660941-20978e870e26?q=80&w=800&auto=format&fit=crop"
  }
];
