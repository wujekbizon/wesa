import React from 'react';
import Link from "next/link";

interface FooterCardProps {
  label: string;
  links: { label: string; url: string }[];
}

const FooterCard: React.FC<FooterCardProps> = ({ label, links }) => {
  return (
    <div className="flex flex-col items-center justify-center lg:items-start lg:justify-start">
      <h3 className="mb-4 text-xl font-bold text-primary-200">{label}</h3>
      <ul className="flex flex-col items-center justify-center gap-2 lg:items-start lg:justify-start">
        {links.map((link, index) => (
          <li key={index}>
            <Link href={link.url} className="text-sm text-gray-400 hover:text-primary-200 transition-colors duration-200">{link.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterCard;
