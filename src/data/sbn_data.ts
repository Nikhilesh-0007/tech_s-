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
      "Routers",
      "Switches",
      "Firewalls",
      "Wireless",
      "VoIP Phones",
      "Access Points",
      "Servers",
      "Storage",
      "Server RAM",
      "GPUs",
      "Hard Disks",
      "Other Networking Hardware"
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
  address: "1st, 46/3, 1st Cross Rd, Old Gurappanapalya, BTM 1st Stage, Bengaluru, Karnataka 560029",
  hours: {
    days: "Monday – Friday: 11:00 AM – 7:00 PM",
    time: "Saturday: 11:00 AM – 3:00 PM | Sunday: Closed"
  },
  ceo: "Dadapeer",
  gstin: "29EYUPD5781F1ZR",
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
    desc: "Enterprise managed, PoE, and fiber optical switches for core, distribution, and edge routing.",
    iconName: "Network",
    imageUrl: "/products/switch.jpeg"
  },
  {
    id: "servers",
    title: "Servers",
    desc: "Rack and tower servers configured with custom CPUs, RAM, power supplies, and storage arrays.",
    iconName: "Server",
    imageUrl: "/products/Server.jpeg"
  },
  {
    id: "routers",
    title: "Routers",
    desc: "High-capacity core and edge routers for offices, branches, and wide-area networking tunnels.",
    iconName: "Cpu",
    imageUrl: "/products/router.jpeg"
  },
  {
    id: "firewalls",
    title: "Firewalls",
    desc: "Next-gen security appliances for secure perimeter shielding, threat checking, and VPN tunnels.",
    iconName: "Shield",
    imageUrl: "/products/Firewall.jpeg"
  },
  {
    id: "ram",
    title: "Server RAM",
    desc: "High-speed DDR3, DDR4, and DDR5 ECC registered memory modules for server virtualization loads.",
    iconName: "Layers",
    imageUrl: "/products/Server%20Ram.jpeg"
  },
  {
    id: "sfp",
    title: "SFP Transceivers",
    desc: "1G, 10G, and 25G transceivers for reliable optical fiber links across enterprise switches.",
    iconName: "Zap",
    imageUrl: "/products/SFP.jpeg"
  },
  {
    id: "access-points",
    title: "Access Points",
    desc: "Enterprise wireless access points for high-density office environments and seamless roaming.",
    iconName: "Wifi",
    imageUrl: "/products/Access%20points.jpeg"
  },
  {
    id: "ip-phones",
    title: "IP Phones",
    desc: "Enterprise VoIP desk phones, expansion modules, and conference terminals for clear business communication.",
    iconName: "Phone",
    imageUrl: "/products/IP%20Phones.jpeg"
  },
  {
    id: "supervisor-engines",
    title: "Cisco Supervisor Engines",
    desc: "High-performance supervisor engines and line cards for modular enterprise switch chassis.",
    iconName: "Cpu",
    imageUrl: "/products/CISCO%20SUPERVISOR%20ENGINE.jpeg"
  },
  {
    id: "stack-cables",
    title: "Stack Cables",
    desc: "High-bandwidth stacking cables for daisy-chaining and managing stackable enterprise switches.",
    iconName: "Cable",
    imageUrl: "/products/Stack%20Cable.jpeg"
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
