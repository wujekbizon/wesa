export interface FooterLinkItem {
  label: string;
  url: string;
}

export interface FooterLink {
  label: string;
  links: FooterLinkItem[];
}

export const footerLinks: FooterLink[] = [
  {
    label: "Product",
    links: [
      {
        label: "Features",
        url: "#",
      },
      {
        label: "Pricing",
        url: "#",
      },
    ],
  },
  {
    label: "Company",
    links: [
      {
        label: "About Us",
        url: "#",
      },
      {
        label: "Careers",
        url: "#",
      },
    ],
  },
];
