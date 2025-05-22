import { BarChart, BookOpen, Brain, Brush, Code, CreditCard, Download, Feather, FileText, HelpCircle, House, Layers, LayoutDashboard, LifeBuoy, Pickaxe, Sparkles, User, Wand2 } from "lucide-react";

export const landingPageNavLinks = [
  {
    urlLink: "#home",
    urlText: "Home",
    urlIcon: House,
  },
  {
    urlLink: "#features",
    urlText: "Features",
    urlIcon: Feather,
  },
  {
    urlLink: "#how-it-works",
    urlText: "How it works",
    urlIcon: Pickaxe,
  },
  {
    urlLink: "/generate",
    urlText: "Generate",
    urlIcon: Brain,
  },
];

export const featuresSection = [
  {
    title: "AI-Powered Copywriting",
    desc: "Get engaging, conversion-optimized text in seconds tailored to your brand.",
  },
  {
    title: "No Code Needed",
    desc: "Generate and export full HTML/CSS or React code. Just plug and play.",
  },
  {
    title: "Fast & Responsive Design",
    desc: "All pages are mobile-first, SEO-friendly, and lightning fast.",
  },
];


export const formFields = [
  {type: "text", field: "name", placeholder: "John Doe", label: "Full Name", required: true},
  { type: "email", field: "email", placeholder: "johndoe@example.com", label: "Email", required: true },
  { type: "text", field: "phonenumber", placeholder: "+1 234 567 8900", label: "Phone Number", required: true },
  {type: "password", field: "password", placeholder: "********", label: "Password", required: true},
]


export const sidebarLinks = [
  {
    section: "Main",
    links: [
      { name: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
      { name: "Generate Page", icon: Wand2, href: "/generate" },
      { name: "My Pages", icon: FileText, href: "/pages" },
      { name: "Templates", icon: Layers, href: "/templates" }
    ]
  },
  {
    section: "Customization",
    links: [
      { name: "Editor", icon: Code, href: "/editor" },
      { name: "Branding", icon: Brush, href: "/branding" },
      {name: "Export Center", icon: Download, href: "/export"}
    ]
  },
  {
    section: "Account",
    links: [
      { name: "Profile", icon: User, href: "/profile" },
      { name: "Billing", icon: CreditCard, href: "/billing" },
      {name: "Usage", icon: BarChart, href: "/usage"}
    ]
  },
  {
    section: "Help",
    links: [
      { name: "Docs", icon: BookOpen, href: "/docs" },
      { name: "FAQ", icon: HelpCircle, href: "/faq" },
      { name: "Support", icon: LifeBuoy, href: "/support" },
      {name: "Changelog", icon: Sparkles, href: "/changelog"},
    ]
  }
]
