export interface ProductSummary {
  title: string;
  slug: string;
  description: string;
  features: string[];
  comingSoon: boolean;
}

export interface ProductDetail {
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  features: { title: string; description: string }[];
  comingSoon: boolean;
}

export const products: ProductSummary[] = [
  {
    title: "Work Loom",
    slug: "work-loom",
    description:
      "A comprehensive HR employee management app designed to streamline people operations from onboarding to offboarding.",
    features: [
      "Employee profiles",
      "Leave management",
      "Attendance tracking",
      "Document management",
    ],
    comingSoon: true,
  },
];

export const productDetails: Record<string, ProductDetail> = {
  "work-loom": {
    title: "Work Loom",
    subtitle: "HR Management, Simplified",
    description:
      "A modern employee management platform built for growing teams.",
    longDescription:
      "Work Loom brings together every aspect of employee management into a single, intuitive platform. From onboarding new hires to tracking leave and attendance, Work Loom helps HR teams stay organized and employees stay informed.",
    features: [
      {
        title: "Employee Profiles",
        description:
          "Centralized employee records with role history, documents, and personal details — all in one place.",
      },
      {
        title: "Leave Management",
        description:
          "Streamlined leave requests and approvals with calendar visibility and balance tracking.",
      },
      {
        title: "Attendance Tracking",
        description:
          "Flexible clock-in options with real-time dashboards for managers and payroll integration.",
      },
      {
        title: "Document Management",
        description:
          "Secure storage and sharing of contracts, policies, and employee documents with version control.",
      },
    ],
    comingSoon: true,
  },
};
