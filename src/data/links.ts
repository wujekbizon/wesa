
export interface SubMenuItem {
  label: string
  url: string
  hash: string
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
      { label: "Case Study", url: "/", hash: "#case-study" }
    ]
  },
  {
    label: "Solutions",
    url: "/solutions",
    submenu: [
      { label: "Core Solutions", url: "/", hash: "#core" },
      { label: "Software Architecture", url: "/solutions", hash: "#software-architecture" },
      { label: "Modern Web Apps", url: "/solutions", hash: "#web" },
      { label: "UI/UX Design", url: "/solutions", hash: "#design" },
      { label: "Mobile Development", url: "/solutions", hash: "#mobile" }
    ]
  },
  {
    label: "Customers",
    url: "/customers",
    submenu: [
      { label: "Global Reach", url: "/", hash: "#why-choose-us" },
      { label: "Clients Testimonials", url: "/", hash: "#testimonials" },
      { label: "Medical Educational Software", url: "/customers", hash: "#medical" },
      { label: "AI Tools", url: "/customers", hash: "#ai" },
      { label: "Digital Interfaces", url: "/customers", hash: "#digital-interfaces" }
    ]
  },
  {
    label: "Developers",
    url: "/developers",
    submenu: [
      { label: "Technologies We Work With", url: "/developers", hash: "#technologies" },
      { label: "Our Services", url: "/developers", hash: "#services" },
      { label: "Join Our Team", url: "/developers", hash: "#join" }
    ]
  }
]