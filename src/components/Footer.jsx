import { Mail, Phone } from 'lucide-react';
import { articleFooterColumns } from '../data/articlesData.js';

const socialLinks = [
  { label: 'f', href: '#' },
  { label: 'x', href: '#' },
  { label: 'in', href: '#' },
  { label: 'ig', href: '#' },
  { label: 'yt', href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-[#f7f8fb] px-4 pb-10 pt-8 sm:px-6">
      <div className="mx-auto max-w-[1320px]">
        <div className="grid gap-10 md:grid-cols-4">
          {articleFooterColumns.map((column) => (
            <div key={column.title}>
              <h3 className="mb-4 text-base font-medium text-[#394968]">{column.title}</h3>
              <div className="flex flex-col gap-2">
                {column.links.map((link) => (
                  <a key={link} href="#" className="text-sm text-[#6b6968] no-underline transition-colors hover:underline">
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="my-6 border-t border-[#e5e7eb]" />

        <div className="text-center">
          <p className="mb-2 text-sm text-[#394968]">
            PBPartners is a Brand of Policybazaar Insurance Brokers Private Limited
          </p>

          <div className="mb-1 flex flex-wrap items-center justify-center gap-x-2 gap-y-2 text-sm text-[#394968]">
            <a href="tel:1800120800" className="inline-flex items-center gap-1.5 text-[#0065ff] hover:underline">
              <Phone size={16} /> 1800 120 800 (Toll Free)
            </a>
            <span className="hidden sm:inline">|</span>
            <span>10 AM to 8 PM (Monday - Sunday)</span>
            <span className="hidden sm:inline">|</span>
            <a href="mailto:support@pbpartners.com" className="inline-flex items-center gap-1.5 text-[#0065ff] hover:underline">
              <Mail size={16} /> support@pbpartners.com
            </a>
          </div>

          <p className="my-3 text-sm text-[#394968]">
            Copyright © 2026 <a href="/articles" className="font-medium text-[#0065ff] no-underline hover:underline">PBPartners</a>. All rights reserved.{' '}
            <a href="#" className="text-[#0065ff] hover:underline">Legal Information</a>
          </p>

          <div className="flex flex-col items-center justify-center gap-2">
            <p className="text-sm font-medium text-[#394968]">Follow us on:</p>
            <div className="flex items-center justify-center gap-2">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#374151] text-[11px] font-semibold uppercase text-white hover:bg-[#0065ff]"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
