import { useEffect, useRef, useState } from 'react';
import { ChevronDown, Menu, Phone } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const navItems = [
  {
    label: 'Insurance',
    dropdown: true,
    href: '#',
    items: [
      { label: 'Motor Insurance', href: '/articles/motor-insurance' },
      { label: 'Life Insurance', href: '/articles/life-insurance' },
      { label: 'Health Insurance', href: '/articles/health-insurance' },
      { label: 'Travel Insurance', href: '/articles/travel-insurance' },
      { label: 'Others Insurance', href: '/articles/other-insurance' },
    ],
  },
  {
    label: 'Become An Insurance Advisor',
    dropdown: true,
    href: '#',
    items: [
      { label: 'Motor Insurance Advisor', href: '/how-to-become-a-motor-insurance-agent' },
      { label: 'Life Insurance Advisor', href: '/how-to-become-a-life-insurance-agent' },
      { label: 'Health Insurance Advisor', href: '/how-to-become-a-health-insurance-agent' },
      { label: 'Travel Insurance Advisor', href: '/how-to-become-a-travel-insurance-agent' },
      { label: 'Home Insurance Advisor', href: '/how-to-become-a-home-insurance-agent' },
      { label: 'Commercial Lines Insurance Advisor', href: '/how-to-become-a-commercial-lines-insurance-agent' },
    ],
  },
  { label: 'Our Experience Centers', href: '/experience-centers' },
  { label: 'Articles', href: '/articles' },
  { label: 'Careers', href: '/careers' },
];

export default function Navbar() {
  const [isSupportOpen, setIsSupportOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const supportRef = useRef(null);
  const navRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  function handleMobileNavigate(href) {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
    setIsSupportOpen(false);

    if (location.pathname === href) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    navigate(href);
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (supportRef.current && !supportRef.current.contains(event.target)) {
        setIsSupportOpen(false);
      }
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    }

    function handleEscape(event) {
      if (event.key === 'Escape') {
        setIsSupportOpen(false);
        setIsMobileMenuOpen(false);
        setOpenDropdown(null);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#eef3fb] bg-white">
      <div className="mx-auto flex h-[80px] max-w-[1088px] items-center justify-between px-2 sm:px-3">
        <Link to="/" className="shrink-0">
          <img
            src="https://www.pbpartners.com/images/logo.svg"
            alt="PBPartners"
            className="h-[50px] w-auto"
          />
        </Link>

        <nav ref={navRef} className="hidden items-center gap-7 pl-6 md:flex">
          {navItems.map((item) => (
            item.dropdown ? (
              <div key={item.label} className="relative">
                <button
                  type="button"
                  onClick={() => setOpenDropdown((current) => (current === item.label ? null : item.label))}
                  className="inline-flex items-center gap-1 whitespace-nowrap text-[15px] font-medium text-[#111111] transition hover:text-[#4b80fd]"
                >
                  {item.label}
                  <ChevronDown
                    size={13}
                    strokeWidth={2}
                    className={`mt-[1px] text-[#4b80fd] transition ${openDropdown === item.label ? 'rotate-180' : ''}`}
                  />
                </button>

                {openDropdown === item.label ? (
                  <div className="absolute left-0 top-[48px] min-w-[210px] overflow-hidden rounded-[2px] border border-[#e6e6e6] bg-white shadow-[0_8px_22px_rgba(0,0,0,0.08)]">
                    {item.items.map((dropdownItem, index) => (
                      <Link
                        key={dropdownItem.label}
                        to={dropdownItem.href}
                        onClick={() => setOpenDropdown(null)}
                        className={`block whitespace-nowrap px-4 py-3 text-[15px] text-[#3a3a3a] transition hover:bg-[#fafcff] ${
                          index === 0 ? 'border-t-2 border-[#4b80fd]' : ''
                        } ${index !== item.items.length - 1 ? 'border-b border-[#ececec]' : ''}`}
                      >
                        {dropdownItem.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ) : item.href.startsWith('/') ? (
              <Link
                key={item.label}
                to={item.href}
                className="inline-flex items-center gap-1 whitespace-nowrap text-[15px] font-medium text-[#111111] transition hover:text-[#4b80fd]"
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="inline-flex items-center gap-1 whitespace-nowrap text-[15px] font-medium text-[#111111] transition hover:text-[#4b80fd]"
              >
                {item.label}
              </a>
            )
          ))}
        </nav>

        <div className="hidden items-center gap-4 pl-4 md:flex">
          <div className="relative" ref={supportRef}>
            <button
              type="button"
              onClick={() => setIsSupportOpen((open) => !open)}
              className="flex h-[40px] items-center gap-2 rounded-[8px] border border-[#dce8ff] bg-[#edf5ff] px-[12px] text-[#2d6df6]"
            >
              <img
                src="https://www.pbpartners.com/images/icon-support.svg"
                alt=""
                className="h-[16px] w-[16px]"
              />
              <span className="text-[15px] font-medium">Support</span>
              <ChevronDown
                size={13}
                strokeWidth={2}
                className={`text-[#4b80fd] transition ${isSupportOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {isSupportOpen ? (
              <div className="absolute right-0 top-[58px] w-[352px] rounded-[12px] border border-[#d7d7d7] bg-white px-8 py-7 shadow-[0_8px_24px_rgba(0,0,0,0.12)]">
                <div className="relative mb-7 border-t border-[#e1e1e1] pt-8">
                  <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#fff4df] px-3 py-1 text-[12px] font-medium text-[#f5a623]">
                    Need help?
                  </span>
                </div>

                <div className="border-b border-[#e1e1e1] pb-6">
                  <p className="mb-4 text-[24px] font-semibold text-[#2a2a2a]">Call Us</p>
                  <div className="flex items-center gap-4">
                    <div className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-[#eef4ff]">
                      <Phone size={20} strokeWidth={2} className="text-[#4b80fd]" />
                    </div>
                    <div>
                      <a href="tel:1800120800" className="block text-[18px] font-semibold text-[#4b80fd]">
                        1800 120 800
                      </a>
                      <p className="text-[12px] text-[#98a0ad]">10 AM to 8 PM (Monday - Sunday)</p>
                    </div>
                  </div>
                </div>

                <div className="pt-5">
                  <p className="mb-3 text-[24px] font-semibold text-[#2a2a2a]">Email Us</p>
                  <a href="mailto:support@pbpartners.com" className="text-[18px] font-semibold text-[#4b80fd]">
                    support@pbpartners.com
                  </a>
                </div>
              </div>
            ) : null}
          </div>

          <button className="h-[42px] rounded-[4px] border border-[#4b80fd] px-[18px] text-[12px] font-medium uppercase tracking-[0.01em] text-[#4b80fd] transition hover:bg-[#4b80fd] hover:text-white">
            Register
          </button>
        </div>

        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          className="rounded-md p-2 text-slate-700 md:hidden"
        >
          <Menu size={22} />
        </button>
      </div>

      {isMobileMenuOpen ? (
        <div className="border-t border-[#eef3fb] bg-white md:hidden">
          <div className="mx-auto flex max-w-[1088px] flex-col px-4 py-4">
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                item.dropdown ? (
                  <div key={item.label} className="rounded-[8px]">
                    <button
                      type="button"
                      onClick={() => setOpenDropdown((current) => (current === item.label ? null : item.label))}
                      className="inline-flex w-full items-center justify-between rounded-[8px] px-2 py-3 text-left text-[15px] font-medium text-[#111111] transition hover:bg-[#f5f9ff]"
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        size={13}
                        strokeWidth={2}
                        className={`text-[#4b80fd] transition ${openDropdown === item.label ? 'rotate-180' : ''}`}
                      />
                    </button>

                    {openDropdown === item.label ? (
                      <div className="mt-1 overflow-hidden rounded-[8px] border border-[#ececec] bg-white">
                        {item.items.map((dropdownItem, index) => (
                          <button
                            key={dropdownItem.label}
                            type="button"
                            onClick={() => handleMobileNavigate(dropdownItem.href)}
                            className={`block w-full px-4 py-3 text-left text-[15px] text-[#3a3a3a] ${
                              index === 0 ? 'border-t-2 border-[#4b80fd]' : ''
                            } ${index !== item.items.length - 1 ? 'border-b border-[#ececec]' : ''}`}
                          >
                            {dropdownItem.label}
                          </button>
                        ))}
                      </div>
                    ) : null}
                  </div>
                ) : item.href.startsWith('/') ? (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => handleMobileNavigate(item.href)}
                    className="inline-flex w-full items-center justify-between rounded-[8px] px-2 py-3 text-[15px] font-medium text-[#111111] transition hover:bg-[#f5f9ff]"
                  >
                    <span>{item.label}</span>
                  </button>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="inline-flex items-center justify-between rounded-[8px] px-2 py-3 text-[15px] font-medium text-[#111111] transition hover:bg-[#f5f9ff]"
                  >
                    <span>{item.label}</span>
                  </a>
                )
              ))}
            </nav>

            <div className="mt-4 flex flex-col gap-2 border-t border-[#eef3fb] pt-4">
              <button
                type="button"
                onClick={() => setIsSupportOpen((open) => !open)}
                className="flex h-[40px] items-center justify-center gap-2 rounded-[8px] border border-[#dce8ff] bg-[#edf5ff] px-[12px] text-[#2d6df6]"
              >
                <img
                  src="https://www.pbpartners.com/images/icon-support.svg"
                  alt=""
                  className="h-[16px] w-[16px]"
                />
                <span className="text-[15px] font-medium">Support</span>
              </button>
              {isSupportOpen ? (
                <div className="rounded-[10px] border border-[#d7d7d7] bg-white px-4 py-4 shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
                  <p className="text-[16px] font-semibold text-[#2a2a2a]">Call Us</p>
                  <a href="tel:1800120800" className="mt-2 block text-[16px] font-semibold text-[#4b80fd]">
                    1800 120 800
                  </a>
                  <p className="text-[12px] text-[#98a0ad]">10 AM to 8 PM (Monday - Sunday)</p>
                  <p className="mt-4 text-[16px] font-semibold text-[#2a2a2a]">Email Us</p>
                  <a href="mailto:support@pbpartners.com" className="mt-1 block text-[15px] font-semibold text-[#4b80fd]">
                    support@pbpartners.com
                  </a>
                </div>
              ) : null}
              <button className="h-[42px] rounded-[4px] border border-[#4b80fd] px-[18px] text-[12px] font-medium uppercase tracking-[0.01em] text-[#4b80fd] transition hover:bg-[#4b80fd] hover:text-white">
                Register
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
