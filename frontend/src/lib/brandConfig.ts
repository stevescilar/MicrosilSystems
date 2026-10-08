export const brandConfig = {
  name: "Microsil System",
  legalName: "Microsil System Ltd",
  tagline: "Engineering Digital Infrastructure, Intelligent Software & Enterprise Tech",
  description:
    "Microsil System is a premier Kenyan technology powerhouse delivering resilient web architectures, cross-platform mobile apps, fintech platforms, workflow automation, data intelligence, and smart security systems.",
  url: "https://microsilsystem.co.ke",
  phone: "+254 705 549 257",
  whatsapp: "254705549257",
  email: "solutions@microsilsystem.co.ke",
  altEmail: "microsilcorp@gmail.com",
  address: "Nairobi, Kenya",
  officeHours: "Mon - Fri: 8:00 AM - 6:00 PM | Sat: 9:00 AM - 2:00 PM",
  socials: {
    linkedin: "https://linkedin.com/company/microsilsystem",
    twitter: "https://twitter.com/microsilsystem",
    facebook: "https://facebook.com/microsilsystem",
    instagram: "https://instagram.com/microsilsystem",
    github: "https://github.com/microsilsystem",
  },
  colors: {
    navy: "#2F3D58",
    navyDark: "#1E283A",
    green: "#03A63D",
    forest: "#33A65B",
    mint: "#89D9A4",
    tint: "#EEFFF8",
  },
  navItems: [
    { label: "Home", href: "/" },
    {
      label: "Services",
      href: "#services",
      children: [
        { label: "Web & Enterprise Software", href: "#services-web" },
        { label: "Mobile Apps (Flutter & Native)", href: "#services-mobile" },
        { label: "Business Automation & Scripts", href: "#services-automation" },
        { label: "Data Intelligence & Power BI", href: "#services-data" },
        { label: "CCTV, Biometrics & Security", href: "#services-security" },
      ],
    },
    { label: "Case Studies", href: "#portfolio" },
    { label: "Cost Estimator", href: "#estimator" },
    { label: "Tech Shop", href: "/shop" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
  projects: [
    {
      id: "the-money-circle",
      title: "TheMoneyCircle (TMC)",
      category: "Fintech & Wealth Management",
      badge: "Enterprise Platform",
      summary:
        "High-performance fintech ecosystem with automated peer-to-peer savings circles, real-time ledgers, KYC verification, and M-Pesa automated transaction orchestration.",
      techStack: ["Laravel 11", "Flutter", "PostgreSQL", "Daraja M-Pesa API", "Redis Queue"],
      metrics: "Sub-second reconciliations & secure automated payouts",
      accent: "#03A63D",
    },
    {
      id: "odo-app",
      title: "Odo Mobile App",
      category: "Cross-Platform Mobile Application",
      badge: "Mobile Ecosystem",
      summary:
        "Engineered for iOS & Android with buttery-smooth 60fps UI, offline-first data caching, real-time sync, and intuitive customer onboarding flows.",
      techStack: ["Flutter", "Dart", "REST API", "Clean Architecture", "Local SQLite"],
      metrics: "99.8% crash-free sessions across diverse devices",
      accent: "#2F3D58",
    },
    {
      id: "enterprise-automation",
      title: "Cryptographic Data & Workflow Automation",
      category: "Data Engineering & Security",
      badge: "Automation Pipeline",
      summary:
        "Automated cryptographic salting, multi-stage data hashing (MD5/SHA), CSV ingestion pipelines, and automated reporting scripts eliminating manual error.",
      techStack: ["Python", "Cryptography", "Pandas", "Scheduled Cron", "ETL"],
      metrics: "100x faster execution than manual workflows",
      accent: "#33A65B",
    },
    {
      id: "power-bi-dashboards",
      title: "Executive Business Intelligence Suite",
      category: "Data Consultancy & BI",
      badge: "Data Intelligence",
      summary:
        "Custom data warehousing and interactive Power BI dashboards translating complex transaction data into actionable revenue and performance metrics.",
      techStack: ["Power BI", "DAX", "SQL Data Warehouse", "Automated Pipelines"],
      metrics: "Real-time visibility for executive leadership",
      accent: "#89D9A4",
    },
    {
      id: "cctv-smart-security",
      title: "Smart Commercial CCTV & Network Topologies",
      category: "Physical & Cyber Infrastructure",
      badge: "Security Infrastructure",
      summary:
        "Enterprise-grade IP surveillance networks, remote multi-site monitoring, biometric access control, and robust enterprise networking setups.",
      techStack: ["IP Cameras", "NVR Systems", "VLANs", "Cloud Backup", "Access Control"],
      metrics: "24/7 high-definition multi-point coverage",
      accent: "#2F3D58",
    },
  ],
  services: [
    {
      id: "web-software",
      icon: "Code2",
      title: "Web & Enterprise Software Development",
      description:
        "Custom web platforms, SaaS applications, and secure RESTful APIs engineered using Laravel, Next.js, and modern cloud stacks.",
      features: [
        "Scalable Laravel 11 backends",
        "Ultra-fast Next.js 15 frontends",
        "M-Pesa Daraja payment integrations",
        "Role-based access control & audits",
      ],
    },
    {
      id: "mobile-apps",
      icon: "Smartphone",
      title: "Mobile App Development",
      description:
        "Native-grade iOS and Android applications built with Flutter. Clean architectures, offline sync, and delightful animations.",
      features: [
        "Single codebase for iOS & Android",
        "Fluid 60fps animations & UI",
        "Push notifications & deep linking",
        "Secure local storage & biometric auth",
      ],
    },
    {
      id: "automation",
      icon: "Cpu",
      title: "Business Process Automation & Security",
      description:
        "Custom Python bots, cryptographic hashing, data encryption, and automated pipelines that replace repetitive manual tasks.",
      features: [
        "Automated data extraction & ETL",
        "Data encryption & security salting",
        "API connectors & webhook triggers",
        "Scheduled automated reporting",
      ],
    },
    {
      id: "data-bi",
      icon: "BarChart3",
      title: "Data Consultancy & Power BI",
      description:
        "Transforming raw operational data into interactive dashboards, KPI tracking, and predictive insights for decision-makers.",
      features: [
        "Interactive Power BI dashboards",
        "Database modeling & query optimization",
        "Automated scheduled data refreshes",
        "Executive KPI summaries",
      ],
    },
    {
      id: "security",
      icon: "ShieldCheck",
      title: "CCTV, Biometrics & Physical Security",
      description:
        "Comprehensive surveillance systems, structured network cabling, biometric time-attendance, and smart premise security.",
      features: [
        "HD IP camera & NVR setup",
        "Remote viewing on phones & PCs",
        "Biometric access control",
        "Enterprise Wi-Fi & LAN networking",
      ],
    },
    {
      id: "tech-shop",
      icon: "ShoppingBag",
      title: "Enterprise Hardware & Tech Shop",
      description:
        "Direct procurement of verified tech equipment: CCTV kits, enterprise routers, servers, laptops, and custom accessories.",
      features: [
        "Genuine verified equipment",
        "Warranty backed hardware",
        "Installation support",
        "Competitive Kenyan pricing",
      ],
    },
  ],
  stats: [
    { value: "99.9%", label: "Uptime Standard" },
    { value: "50K+", label: "Secured Transactions" },
    { value: "100%", label: "Kenyan Engineering" },
    { value: "< 24hr", label: "Support Turnaround" },
  ],
};

