export interface ServiceSummary {
  title: string;
  slug: string;
  description: string;
  features: string[];
}

export interface UseCaseItem {
  title: string;
  type: string;
  typeClass: string;
  barGradient: string;
  description: string;
  result: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface ServiceDetail {
  title: string;
  subtitle: string;
  logo?: string;
  longDescription: string;
  features: { title: string; description: string }[];
  process: ProcessStep[];
  useCases: UseCaseItem[];
  benefits: string[];
  audience: string[];
}

export const services: ServiceSummary[] = [
  {
    title: "Power Platform Implementation",
    slug: "power-platform",
    description: "End-to-end Power Platform implementation services that turn business requirements into production-ready apps, flows, and dashboards.",
    features: [
      "Power Apps canvas & model-driven apps",
      "Power Automate cloud & desktop flows",
      "Power BI reports & dashboards",
      "Power Pages external-facing portals",
    ],
  },
  {
    title: "Dynamics CE",
    slug: "dynamics-ce",
    description: "Customer engagement solutions that drive meaningful, lasting relationships.",
    features: [
      "Sales automation",
      "Customer service excellence",
      "Marketing automation",
      "Field service management",
    ],
  },
  {
    title: "Copilot Studio",
    slug: "copilot-studio",
    description: "Custom AI assistants tailored to your business processes and workflows.",
    features: [
      "Custom conversational AI",
      "Integration with Microsoft 365",
      "Workflow automation",
      "Knowledge base integration",
    ],
  },
  {
    title: "Bespoke Applications",
    slug: "bespoke-applications",
    description: "Custom-built applications designed around your exact business requirements — no compromise.",
    features: [
      "Full-stack development",
      "API & system integrations",
      "Scalable architecture",
      "Ongoing support",
    ],
  },
];

export const serviceDetails: Record<string, ServiceDetail> = {
  "power-platform": {
    title: "Power Platform Implementation",
    subtitle: "From Requirements to Production",
    logo: "/PowerPlatform.webp",
    longDescription:
      "We take your business processes from whiteboard to production. Our implementation methodology covers discovery, solution design, build, testing, and go-live — ensuring every Power Platform solution is built to scale, secured to standard, and adopted by your users from day one.",
    features: [
      {
        title: "Power Apps Development",
        description:
          "Canvas and model-driven apps designed around your workflows, with responsive layouts, offline capability, and Dataverse integration.",
      },
      {
        title: "Power Automate Flows",
        description:
          "Cloud flows, desktop flows, and business process flows that eliminate manual handoffs and connect your systems end-to-end.",
      },
      {
        title: "Power BI Reporting",
        description:
          "Interactive dashboards and paginated reports that surface the right data to the right people at the right time.",
      },
      {
        title: "Power Pages Portals",
        description:
          "Secure, external-facing portals for customers, partners, and vendors — integrated with Dataverse and your internal processes.",
      },
    ],
    process: [
      {
        title: "Discovery",
        description: "Understanding your current processes, pain points, and what a successful outcome looks like.",
      },
      {
        title: "Solution Design",
        description: "Architecting the right combination of apps, flows, and data models before a line of code is written.",
      },
      {
        title: "Development",
        description: "Building to agreed acceptance criteria with regular checkpoints. No surprises at sign-off.",
      },
      {
        title: "Testing",
        description: "User acceptance testing in a dedicated test environment before anything goes near production.",
      },
      {
        title: "Deployment",
        description: "Managed go-live with proper ALM, environment promotion, and security role configuration.",
      },
      {
        title: "Support",
        description: "Ongoing management, iteration, and user adoption support after go-live.",
      },
    ],
    useCases: [
      {
        title: "Field Inspection App",
        type: "Operations",
        typeClass: "bg-teal-500/10 text-teal-700 dark:text-teal-400 border border-teal-500/20 dark:border-teal-500/30",
        barGradient: "linear-gradient(to right, #14b8a6, #06b6d4)",
        description:
          "Replace paper-based inspection forms with a canvas app capturing data, photos, and GPS location. Flows sync results to SharePoint and trigger approval and remediation workflows automatically.",
        result: "Eliminated 6 hours/week of manual data entry per inspector",
      },
      {
        title: "Leave and Absence Management",
        type: "HR",
        typeClass: "bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20 dark:border-amber-500/30",
        barGradient: "linear-gradient(to right, #f59e0b, #f97316)",
        description:
          "A model-driven app and Power Automate flows replacing a manual email and spreadsheet process. Line managers approve requests in the system, and calendars update automatically.",
        result: "Approval time reduced from 3 days to same-day",
      },
      {
        title: "Executive Sales Dashboard",
        type: "Management",
        typeClass: "bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 border border-indigo-500/20 dark:border-indigo-500/30",
        barGradient: "linear-gradient(to right, #6366f1, #8b5cf6)",
        description:
          "A Power BI report combining CRM, ERP, and SharePoint data into a single dashboard showing pipeline, revenue, and team performance in real time. Replaced a weekly manual reporting pack.",
        result: "Live self-service analytics replacing weekly reporting",
      },
    ],
    benefits: [
      "Structured implementation methodology with clear milestones",
      "Solutions built on Dataverse with proper security roles and DLP",
      "User adoption through training and change management",
      "Ongoing support and environment management post go-live",
    ],
    audience: [
      "Organisations with manual, paper-based, or spreadsheet-driven processes",
      "IT teams needing to deliver internal tools without full development resource",
      "Finance, operations, and HR teams requiring reporting and workflow automation",
      "Businesses already on Microsoft 365 looking to maximise their existing investment",
    ],
  },

  "dynamics-ce": {
    title: "Dynamics CE",
    subtitle: "Customer Engagement Excellence",
    logo: "/Dynamics365.svg",
    longDescription:
      "Your customers deserve consistent, informed experiences at every touchpoint. We implement Dynamics 365 Customer Engagement solutions that unify your sales, service, and marketing efforts — replacing disconnected tools and manual processes with a single, structured system.",
    features: [
      {
        title: "Sales Automation",
        description:
          "Structured deal stages, automated follow-up sequences, and full pipeline visibility — so your team focuses on selling, not administration.",
      },
      {
        title: "Customer Service Hub",
        description:
          "Unified case management with SLA tracking, a knowledge base, and Teams integration. Full interaction history on every customer record.",
      },
      {
        title: "Marketing Automation",
        description:
          "Segment your audience, run campaigns, and track engagement — with every interaction feeding back into the CRM automatically.",
      },
      {
        title: "Field Service",
        description:
          "Intelligent scheduling, mobile-first work orders, and real-time resource management for field-based teams.",
      },
    ],
    process: [
      {
        title: "Discovery",
        description: "Mapping your sales, service, and marketing processes in detail before configuring anything.",
      },
      {
        title: "Configuration",
        description: "Tailoring the platform to your terminology, deal stages, case types, and team structure.",
      },
      {
        title: "Data Migration",
        description: "Cleansing and importing your existing contacts, accounts, and historical records accurately.",
      },
      {
        title: "Training",
        description: "Enabling your team to use the system effectively from day one — not just showing them the buttons.",
      },
      {
        title: "Go-Live",
        description: "Managed cutover with hypercare support during the transition period.",
      },
      {
        title: "Optimisation",
        description: "Post-launch iteration based on real usage data and team feedback.",
      },
    ],
    useCases: [
      {
        title: "Sales Pipeline Management",
        type: "Sales",
        typeClass: "bg-purple-500/10 text-purple-700 dark:text-purple-400 border border-purple-500/20 dark:border-purple-500/30",
        barGradient: "linear-gradient(to right, #6F00FF, #FE59C2)",
        description:
          "Configure Dynamics Sales with custom deal stages, automated follow-up tasks, and integrated email tracking. Full pipeline reporting gives management real-time visibility without chasing the team for updates.",
        result: "30% improvement in pipeline forecast accuracy",
      },
      {
        title: "Unified Customer Service",
        type: "Service",
        typeClass: "bg-teal-500/10 text-teal-700 dark:text-teal-400 border border-teal-500/20 dark:border-teal-500/30",
        barGradient: "linear-gradient(to right, #14b8a6, #06b6d4)",
        description:
          "Customer Service Hub with SLA timers, a structured knowledge base, and Teams integration. Cases auto-routed by type and complexity, with full interaction history on every record.",
        result: "Case resolution time reduced by 35%",
      },
      {
        title: "Partner Deal Portal",
        type: "External",
        typeClass: "bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20 dark:border-amber-500/30",
        barGradient: "linear-gradient(to right, #f59e0b, #f97316)",
        description:
          "A Power Pages portal allowing partner companies to register deals, track opportunity status, and access sales collateral — all integrated with Dynamics without requiring a Dynamics licence.",
        result: "Self-service for 40+ partner organisations, zero manual admin",
      },
    ],
    benefits: [
      "A single source of truth for every customer relationship",
      "Improved sales team productivity and forecast accuracy",
      "Consistent customer service with full interaction history",
      "Data-driven decisions across sales, service, and marketing",
    ],
    audience: [
      "B2B organisations with a structured sales team and a defined pipeline process",
      "Businesses with a customer service function managing cases or support queues",
      "Companies moving off a legacy CRM or managing customer data in spreadsheets",
      "Organisations with field-based teams or partner-facing operations",
    ],
  },

  "copilot-studio": {
    title: "Copilot Studio",
    subtitle: "AI Assistants Built for Your Business",
    logo: "/CopilotStudio.webp",
    longDescription:
      "Transform how your team and customers interact with your business through intelligent AI assistants. We design and implement Copilot Studio solutions that understand your processes, speak your language, and integrate seamlessly with your existing systems.",
    features: [
      {
        title: "Custom Knowledge Integration",
        description:
          "Connect your documents, databases, and knowledge bases to create AI assistants that understand your business — not just generic answers.",
      },
      {
        title: "Multi-Channel Deployment",
        description:
          "Deploy your AI assistants across Teams, web, mobile, and other channels your users prefer — from a single configuration.",
      },
      {
        title: "Workflow Automation",
        description:
          "Trigger automated processes and Power Automate flows directly from conversational interactions, without any manual intervention.",
      },
      {
        title: "Analytics and Insights",
        description:
          "Track how users interact with your assistants, identify gaps in coverage, and continuously improve accuracy over time.",
      },
    ],
    process: [
      {
        title: "Knowledge Audit",
        description: "Reviewing your documents, FAQs, and data sources to understand what the assistant needs to know.",
      },
      {
        title: "Conversation Design",
        description: "Mapping intents, dialogue flows, and escalation paths before any configuration begins.",
      },
      {
        title: "Integration",
        description: "Connecting to your systems, Microsoft 365 data sources, and any third-party APIs required.",
      },
      {
        title: "Testing",
        description: "Accuracy validation, edge case testing, and user acceptance before deployment.",
      },
      {
        title: "Deployment",
        description: "Multi-channel launch across Teams, web, and any other required surfaces.",
      },
      {
        title: "Optimisation",
        description: "Analytics-driven improvement as real usage data accumulates post-launch.",
      },
    ],
    useCases: [
      {
        title: "IT Helpdesk Bot",
        type: "Internal",
        typeClass: "bg-teal-500/10 text-teal-700 dark:text-teal-400 border border-teal-500/20 dark:border-teal-500/30",
        barGradient: "linear-gradient(to right, #14b8a6, #06b6d4)",
        description:
          "Handles password resets, software access requests, and common IT issues via Teams. Integrates with your ticketing system and escalates to a human agent when it cannot resolve the issue.",
        result: "Up to 40% reduction in L1 ticket volume",
      },
      {
        title: "Lead Qualification Assistant",
        type: "Customer-Facing",
        typeClass: "bg-purple-500/10 text-purple-700 dark:text-purple-400 border border-purple-500/20 dark:border-purple-500/30",
        barGradient: "linear-gradient(to right, #6F00FF, #FE59C2)",
        description:
          "Embedded on your website, it captures visitor intent, qualifies budget and timeline, and books a discovery call — feeding every lead directly into Dynamics CRM with full context.",
        result: "24/7 lead capture with zero manual effort",
      },
      {
        title: "HR Policy Assistant",
        type: "Compliance",
        typeClass: "bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20 dark:border-amber-500/30",
        barGradient: "linear-gradient(to right, #f59e0b, #f97316)",
        description:
          "Staff ask about leave entitlements, expense policies, or data handling procedures and receive consistent, document-grounded answers — reducing noise in the HR team's inbox.",
        result: "Instant, consistent answers from your own documentation",
      },
    ],
    benefits: [
      "24/7 availability for customer and employee queries",
      "Reduced workload on support and HR teams",
      "Consistent, accurate responses grounded in your documentation",
      "Seamless integration with Microsoft 365 and existing workflows",
    ],
    audience: [
      "Organisations with high volumes of repetitive internal queries across IT, HR, or operations",
      "Businesses with customer-facing support that needs to scale without headcount",
      "Teams with valuable knowledge locked in SharePoint, documents, or tribal memory",
      "Companies already using Microsoft 365 and Teams looking to extend their investment",
    ],
  },

  "bespoke-applications": {
    title: "Bespoke Applications",
    subtitle: "Built for You. Built to Last.",
    longDescription:
      "Off-the-shelf software rarely fits the way your business actually works. We design and build applications from the ground up — tailored to your processes, integrated with your existing systems, and built to scale as you grow. No vendor lock-in. No unnecessary compromise.",
    features: [
      {
        title: "Full-Stack Development",
        description:
          "End-to-end application development across web and mobile, built with modern, maintainable technology stacks.",
      },
      {
        title: "API and System Integrations",
        description:
          "Connect your application to the tools and platforms you already rely on — CRMs, ERPs, data warehouses, and third-party APIs.",
      },
      {
        title: "Scalable Architecture",
        description:
          "Designed to grow with your business from day one, with infrastructure and data models that don't need rebuilding as you scale.",
      },
      {
        title: "Ongoing Support",
        description:
          "We don't disappear after go-live. Continuous support, iteration, and feature additions as your needs evolve.",
      },
    ],
    process: [
      {
        title: "Scoping",
        description: "Defining requirements, constraints, and success criteria in detail before anything is designed.",
      },
      {
        title: "Architecture",
        description: "Designing the technical approach, data model, and integration strategy up front.",
      },
      {
        title: "Development",
        description: "Iterative build with regular demos and course-correction checkpoints throughout.",
      },
      {
        title: "Testing",
        description: "Automated and manual QA, performance testing, and structured user acceptance testing.",
      },
      {
        title: "Deployment",
        description: "Production release with full documentation, runbooks, and knowledge transfer.",
      },
      {
        title: "Support",
        description: "Continuous improvement, bug fixes, and new feature development as your business grows.",
      },
    ],
    useCases: [
      {
        title: "Operational Management System",
        type: "Operations",
        typeClass: "bg-teal-500/10 text-teal-700 dark:text-teal-400 border border-teal-500/20 dark:border-teal-500/30",
        barGradient: "linear-gradient(to right, #14b8a6, #06b6d4)",
        description:
          "Replaced a legacy desktop application with a modern web app integrating live data from three separate APIs. Role-based access, full audit logging, and a mobile-responsive interface.",
        result: "Full operational visibility from a single screen",
      },
      {
        title: "Client Reporting Portal",
        type: "External",
        typeClass: "bg-purple-500/10 text-purple-700 dark:text-purple-400 border border-purple-500/20 dark:border-purple-500/30",
        barGradient: "linear-gradient(to right, #6F00FF, #FE59C2)",
        description:
          "A branded portal giving clients real-time access to their project data, documents, and reports — integrated with SharePoint and an internal ERP system via a custom API layer.",
        result: "Eliminated 10 hours/week of manual report generation",
      },
      {
        title: "Legacy Integration Layer",
        type: "Technical",
        typeClass: "bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 border border-indigo-500/20 dark:border-indigo-500/30",
        barGradient: "linear-gradient(to right, #6366f1, #8b5cf6)",
        description:
          "Custom middleware connecting a legacy on-premise ERP with multiple cloud platforms. Real-time event processing with full audit logging, retry logic, and monitoring.",
        result: "Real-time sync replacing nightly batch imports",
      },
    ],
    benefits: [
      "Software that fits your exact workflow without compromise",
      "No unnecessary features, vendor lock-in, or licensing overhead",
      "Integrates with your existing tech stack from day one",
      "Owned entirely by you — the code, the data, the infrastructure",
    ],
    audience: [
      "Organisations whose processes don't map cleanly to any off-the-shelf product",
      "Businesses being held back by legacy, unsupported, or vendor-locked software",
      "Teams needing tight integrations between systems that do not connect natively",
      "Companies with unique data models, compliance requirements, or operational complexity",
    ],
  },
};
