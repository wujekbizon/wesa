import Image from "next/image";
import Logo from "@/src/_components/ui/Logo";

// Components
import { socialLinks, SocialLink } from "../data/socialLinks";
import { termsLinks, TermLink } from "../data/terms";
import { footerLinks, FooterLink } from "../data/footerLinks";
import Link from "next/link";
import FooterCard from "./ui/FooterCard";

const Footer = () => {
  return (
    <footer className="relative z-10 px-12 pb-6 pt-12 lg:px-6 md:px-6 sm:px-6">
      <div className="mx-auto max-w-7xl border-t border-secondary-200 border-opacity-10" />
      <div className="flex h-full w-full flex-col justify-center">
        <div className="flex flex-row items-center py-16 md:flex-col-reverse md:justify-center md:gap-8 sm:py-8">
          <div className="flex flex-1.5 flex-col items-center justify-center md:flex-row md:gap-12 sm:gap-6">
            <Logo />
            <h1 className="text-center font-bold text-primary-200 text-7xl leading-[92px] sm:text-4xl">WESA</h1>
          </div>
          <div className="grid flex-3 grid-cols-auto-fit-minmax-150px items-start lg:grid-cols-4 lg:gap-12 sm:grid-cols-2 sm:gap-12">
            {footerLinks.map((item: FooterLink, index: number) => (
              <FooterCard {...item} key={`${item.label}-${index}`} />
            ))}
          </div>
        </div>
        <div className="flex flex-row items-center justify-between sm:flex-col">
          <div className="ml-10 flex items-center gap-16 lg:ml-0 lg:gap-5 sm:gap-1">
            {termsLinks.map(({ id, label, url }: TermLink) => (
              <Link key={id} href={url} className="text-sm text-gray-400 hover:text-primary-200 transition-colors duration-200">
                {label}
              </Link>
            ))}
          </div>
          <div className="mr-10 flex items-center gap-16 lg:mr-0 lg:gap-5 sm:gap-1">
            {socialLinks.map((link: SocialLink) => (
              <a className="social-link" href={link.url} target="_blank" key={link.id}>
                <div className="social-image_container h-5 w-5 rounded-md p-0.5 transition-colors duration-200 hover:bg-primary-200">
                  <Image src={link.img} alt="social-logo" width={20} height={20} className="h-full w-full object-cover" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
