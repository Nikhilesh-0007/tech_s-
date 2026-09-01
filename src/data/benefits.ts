export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export const benefitsData: BenefitItem[] = [
  {
    id: "reliable-infra",
    title: "Reliable Infrastructure",
    description: "Every cabling run is certified and every device is stress-tested. We design systems with active failovers to prevent single points of failure.",
    iconName: "Zap"
  },
  {
    id: "professional-expertise",
    title: "Professional Expertise",
    description: "Our engineers hold certifications in leading hardware vendors and wiring standards. We follow strict international structured cabling rules.",
    iconName: "Award"
  },
  {
    id: "scalable-solutions",
    title: "Scalable Solutions",
    description: "We deploy architectures that accommodate your future corporate growth. Upgrading bandwidth, adding nodes, or adding offices requires zero rework.",
    iconName: "TrendingUp"
  },
  {
    id: "security-first",
    title: "Security First",
    description: "We secure your technology layers from the physical biometric door lock to the network firewall. Data protection is built into our default design.",
    iconName: "ShieldCheck"
  },
  {
    id: "end-to-end-support",
    title: "End-to-End Support",
    description: "From initial predictive site survey and architectural design to passive wiring, active configuration and ongoing SLA helpdesk support.",
    iconName: "Headphones"
  },
  {
    id: "customer-focused",
    title: "Customer Focused",
    description: "We don't offer generic templates. We build custom technology matrices aligned directly to your specific layout, seat count and budget.",
    iconName: "Users"
  }
];
