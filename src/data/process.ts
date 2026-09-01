export interface ProcessStep {
  stepNumber: string; // e.g. "01" (mono face)
  title: string;
  description: string;
  iconName: string;
}

export const processSteps: ProcessStep[] = [
  {
    stepNumber: "01",
    title: "Understand",
    description: "We perform an on-site physical survey and analyze your business bandwidth, capacity, security and scalability needs.",
    iconName: "Search"
  },
  {
    stepNumber: "02",
    title: "Plan",
    description: "We produce CAD cabling topologies, network diagrams, hardware bill-of-materials and cost estimates for review.",
    iconName: "Compass"
  },
  {
    stepNumber: "03",
    title: "Implement",
    description: "Our certified field engineers run fiber, terminate lines, install servers, mount APs and configure network security switches.",
    iconName: "Wrench"
  },
  {
    stepNumber: "04",
    title: "Support",
    description: "We provide certification reports, network handovers and transition your system to proactive 24/7 SLA-backed helpdesk support.",
    iconName: "Clock"
  }
];
