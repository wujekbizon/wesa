import {
  BookOpen,
  Layers,
  Code,
  Blocks,
  Palette,
  Smartphone,
  Building2,
  Heart,
  Stethoscope,
  Brain,
  Monitor,
  Cpu,
  Wrench,
  UserPlus,
} from "lucide-react"

export interface SubMenuItem {
  label: string
  url: string
  hash?: string
}

export interface NavLink {
  label: string
  url: string
  submenu?: SubMenuItem[]
}

export const links: NavLink[] = [
  {
    label: "Architecture",
    url: "/",
    submenu: [
      { label: "Architecture We Use", url: "/", hash: "#architecture" },
      { label: "Monolithic Architecture", url: "/", hash: "#monolithic" },
      { label: "Microservices Architecture", url: "/", hash: "#microservices" },
      { label: "Case Study", url: "/", hash: "#case-study" },
    ],
  },
  {
    label: "Solutions",
    url: "/solutions",
    submenu: [
      { label: "Core Solutions", url: "/solutions" },
      {
        label: "Software Architecture",
        url: "/solutions/software-architecture"
      },
      { label: "Modern Web Apps", url: "/solutions/web" },
      { label: "UI/UX Design", url: "/solutions/design" },
      { label: "Mobile Development", url: "/solutions/mobile" },
    ],
  },
  {
    label: "Customers",
    url: "/customers",
    submenu: [
      { label: "Global Reach", url: "/", hash: "#why-choose-us" },
      { label: "Clients Testimonials", url: "/", hash: "#testimonials" },
      { label: "Educational Software", url: "/customers", hash: "#medical" },
      { label: "AI Tools", url: "/customers", hash: "#ai" },
      {
        label: "Digital Interfaces",
        url: "/customers",
        hash: "#digital-interfaces",
      },
    ],
  },
  {
    label: "Developers",
    url: "/developers",
    submenu: [
      {
        label: "Technologies We Work With",
        url: "/developers",
        hash: "#technologies",
      },
      { label: "Our Services", url: "/developers", hash: "#services" },
      { label: "Join Our Team", url: "/developers", hash: "#join" },
    ],
  },
]

export const iconMap: { [key: string]: any } = {
  "Architecture We Use": Layers,
  "Monolithic Architecture": Building2,
  "Microservices Architecture": Blocks,
  "Case Study": BookOpen,
  "Core Solutions": Cpu,
  "Software Architecture": Layers,
  "Modern Web Apps": Monitor,
  "UI/UX Design": Palette,
  "Mobile Development": Smartphone,
  "Global Reach": Building2,
  "Clients Testimonials": Heart,
  "Medical Educational Software": Stethoscope,
  "AI Tools": Brain,
  "Digital Interfaces": Monitor,
  "Technologies We Work With": Code,
  "Our Services": Wrench,
  "Join Our Team": UserPlus,
}

export const descriptions: { [key: string]: string } = {
  "Architecture We Use":
    "Explore our architectural approaches and methodologies",
  "Monolithic Architecture":
    "Traditional single-tier software application design",
  "Microservices Architecture":
    "Modern distributed system architecture patterns",
  "Case Study": "Real-world examples of our architectural solutions",
  "Core Solutions": "Fundamental services that power your business",
  "Software Architecture": "Scalable and maintainable system design",
  "Modern Web Apps": "Progressive web applications with cutting-edge tech",
  "UI/UX Design": "User-centered design that delights and converts",
  "Mobile Development": "Native and cross-platform mobile solutions",
  "Global Reach": "Why industry leaders choose our solutions",
  "Clients Testimonials": "Success stories from our satisfied clients",
  "Medical Educational Software": "HIPAA-compliant healthcare solutions",
  "AI Tools": "Machine learning and AI-powered applications",
  "Digital Interfaces": "Intuitive interfaces for complex systems",
  "Technologies We Work With": "Modern tech stack and frameworks we master",
  "Our Services": "Comprehensive development and consulting services",
  "Join Our Team": "Career opportunities and our work culture",
}
