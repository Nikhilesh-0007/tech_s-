export interface StatItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
}

export const statsData: StatItem[] = [
  {
    id: "years-exp",
    value: 15,
    suffix: "+",
    label: "Years of Industry Experience"
  },
  {
    id: "projects-done",
    value: 850,
    suffix: "+",
    label: "Projects Successfully Delivered"
  },
  {
    id: "business-clients",
    value: 320,
    suffix: "+",
    label: "Enterprise Clients Serviced"
  },
  {
    id: "tech-solutions",
    value: 18,
    suffix: "+",
    label: "Core Technology Solutions"
  }
];
