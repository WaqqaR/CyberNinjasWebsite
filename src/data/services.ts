export interface ServiceSummary {
  title: string;
  slug: string;
  description: string;
  features: string[];
}

export interface ServiceDetail {
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  features: { title: string; description: string }[];
  benefits: string[];
}

export const services: ServiceSummary[] = [
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
    title: "AI Agent Automation",
    slug: "ai-automation",
    description: "Intelligent automation using Copilot and n8n to transform your operations.",
    features: [
      "AI-powered workflows",
      "n8n automation",
      "Process optimization",
      "Custom AI agents",
    ],
  },
];

export const serviceDetails: Record<string, ServiceDetail> = {
  "copilot-studio": {
    title: "Copilot Studio",
    subtitle: "AI Assistants Built for Your Business",
    description: "Custom conversational AI solutions powered by Microsoft Copilot Studio.",
    longDescription: "Transform how your team and customers interact with your business through intelligent AI assistants. We design and implement Copilot Studio solutions that understand your processes, speak your language, and integrate seamlessly with your existing systems.",
    features: [
      {
        title: "Custom Knowledge Integration",
        description: "Connect your documents, databases, and knowledge bases to create AI assistants that truly understand your business.",
      },
      {
        title: "Multi-Channel Deployment",
        description: "Deploy your AI assistants across Teams, web, mobile, and other channels your users prefer.",
      },
      {
        title: "Workflow Automation",
        description: "Trigger automated processes and workflows directly from conversational interactions.",
      },
      {
        title: "Analytics & Insights",
        description: "Gain visibility into how users interact with your AI assistants and continuously improve their effectiveness.",
      },
    ],
    benefits: [
      "24/7 availability for customer and employee queries",
      "Reduced workload on support teams",
      "Consistent, accurate responses every time",
      "Seamless Microsoft 365 integration",
    ],
  },
  "power-platform": {
    title: "Power Platform Implementation",
    subtitle: "From Requirements to Production",
    description: "End-to-end Power Platform implementation that delivers real business value.",
    longDescription: "We take your business processes from whiteboard to production. Our implementation methodology covers discovery, solution design, build, testing, and go-live\u2014ensuring every Power Platform solution is built to scale, secured to standard, and adopted by your users from day one.",
    features: [
      {
        title: "Power Apps Development",
        description: "Canvas and model-driven apps designed around your workflows, with responsive layouts, offline capability, and Dataverse integration.",
      },
      {
        title: "Power Automate Flows",
        description: "Cloud flows, desktop flows, and business process flows that eliminate manual handoffs and connect your systems end-to-end.",
      },
      {
        title: "Power BI Reporting",
        description: "Interactive dashboards and paginated reports that surface the right data to the right people at the right time.",
      },
      {
        title: "Power Pages Portals",
        description: "Secure, external-facing portals for customers, partners, and vendors\u2014integrated with Dataverse and your internal processes.",
      },
    ],
    benefits: [
      "Structured implementation methodology with clear milestones",
      "Solutions built on Dataverse with proper security roles and DLP",
      "User adoption through training and change management",
      "Ongoing support and environment management post go-live",
    ],
  },
  "dynamics-ce": {
    title: "Dynamics CE",
    subtitle: "Customer Engagement Excellence",
    description: "Build lasting customer relationships with Dynamics 365 Customer Engagement.",
    longDescription: "Your customers deserve exceptional experiences at every touchpoint. We implement Dynamics CE solutions that unify your sales, service, and marketing efforts into a cohesive strategy for customer success.",
    features: [
      {
        title: "Sales Automation",
        description: "Streamline your sales process from lead to close with intelligent tools and insights.",
      },
      {
        title: "Customer Service Hub",
        description: "Deliver exceptional support experiences with unified case management and AI-assisted resolution.",
      },
      {
        title: "Marketing Automation",
        description: "Create personalized customer journeys that drive engagement and conversion.",
      },
      {
        title: "Field Service",
        description: "Optimize field operations with intelligent scheduling and mobile-first solutions.",
      },
    ],
    benefits: [
      "360-degree customer view",
      "Improved sales productivity",
      "Higher customer satisfaction",
      "Data-driven decision making",
    ],
  },
  "ai-automation": {
    title: "AI Agent Automation",
    subtitle: "Intelligent Workflows, Effortless Execution",
    description: "Harness the power of AI agents with Copilot and n8n automation.",
    longDescription: "The future of work is autonomous. We design and implement AI agent systems that can reason, plan, and execute complex tasks on your behalf. Using Microsoft Copilot and n8n, we create intelligent automation that goes beyond simple rule-based workflows.",
    features: [
      {
        title: "AI Agent Design",
        description: "Purpose-built AI agents that understand context and make intelligent decisions.",
      },
      {
        title: "n8n Workflow Automation",
        description: "Powerful, flexible automation that connects hundreds of apps and services.",
      },
      {
        title: "Process Intelligence",
        description: "Analyze and optimize your processes with AI-driven insights and recommendations.",
      },
      {
        title: "Human-in-the-Loop",
        description: "Maintain oversight with intelligent escalation and approval workflows.",
      },
    ],
    benefits: [
      "Reduced manual work",
      "Faster process execution",
      "Improved accuracy",
      "Scalable operations",
    ],
  },
};
