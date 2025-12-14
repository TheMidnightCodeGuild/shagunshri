import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";

// Service categories displayed in dropdown and mobile accordion
const SERVICES_CATEGORIES = [
  {
    title: "Investment & Documentation",
    items: [
      { label: "Mutual Funds", href: "/services/mutual-funds" },
      { label: "Retirement Planning", href: "/services/retirement-planning" },
      { label: "Tax Planning", href: "/services/tax-planning" },
      {
        label: "Portfolio Management Services (PMS)",
        href: "/services/portfolio-management-services",
      },
      { label: "Pan Card", href: "/services/pan-card" },
      { label: "Passport", href: "/services/passport" },
    ],
  },
  {
    title: "Online Insurance",
    items: [
      { label: "Life Insurance", href: "/services/life-insurance" },
      { label: "General Insurance", href: "/services/general-insurance" },
      { label: "Motor Insurance", href: "/services/motor-insurance" },
      { label: "Health Insurance", href: "/services/health-insurance" },
    ],
  },
];

const MOBILE_NAV_LINKS = [
  {
    label: "Home",
    href: "/",
    isExternal: false,
  },
  {
    label: "Who We Are",
    href: "https://partner.claimantmitra.com/join/partner",
    isExternal: true,
  },
  {
    label: "Blogs",
    href: "/components/Blogs",
    isExternal: false,
  },
  {
    label: "Contact Us",
    href: "/",
    isExternal: true,
  },
];

const Header = () => {
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const mobileNavRef = useRef(null);

  // Animate mobile nav
  useEffect(() => {
    if (!mobileNavRef.current) return;
    if (mobileMenuOpen) {
      gsap.fromTo(
        mobileNavRef.current,
        { x: "100%", opacity: 0 },
        { x: "0%", opacity: 1, duration: 0.4, ease: "power3.out" }
      );
    } else {
      gsap.to(mobileNavRef.current, {
        x: "100%",
        opacity: 0,
        duration: 0.4,
        ease: "power3.in",
      });
    }
  }, [mobileMenuOpen]);

  // Desktop dropdown for services
  const renderServicesLinks = () => (
    <div className="flex flex-col md:flex-row gap-3 md:gap-6 min-w-[18rem] md:min-w-[28rem]">
      {SERVICES_CATEGORIES.map((category) => (
        <div key={category.title} className="flex-1 px-1">
          <div className="px-4 py-2 font-semibold text-[#1AC0D8] text-base border-b border-gray-100 mb-2">
            {category.title}
          </div>
          {category.items.map((service) => (
            <Link
              key={service.label}
              href={service.href}
              className="relative block py-2 px-4 hover:bg-[#1AC0D8] hover:text-white rounded-lg text-gray-900 font-medium text-sm transition-colors"
            >
              {service.label}
            </Link>
          ))}
        </div>
      ))}
    </div>
  );

  // Mobile-only services section with padding
  const renderMobileServicesLinks = () => (
    <div className="ml-0 border-l-0 md:ml-2 md:border-l md:border-gray-200 mt-2">
      {SERVICES_CATEGORIES.map((category) => (
        <div key={category.title}>
          <div className="px-4 py-2 font-semibold text-[#1AC0D8] text-base">
            {category.title}
          </div>
          {category.items.map((service) => (
            <Link
              key={service.label}
              href={service.href}
              className="block px-6 py-2 text-gray-700 hover:bg-gray-100 rounded transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              {service.label}
            </Link>
          ))}
        </div>
      ))}
    </div>
  );

  return (
    <nav className="fixed top-0 w-full z-50 bg-white">
      {/* Responsive topbar */}
      <div className="hidden sm:block bg-[#F99024] text-black px-2 sm:px-5 py-2">
        <div className="lg:max-w-[1450px] px-1 sm:px-5 mx-auto">
          <div className="flex justify-between items-center text-xs sm:text-sm">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-y-1 sm:space-x-4">
              <Link
                href="mailto:support@insurancesamadhan.com"
                className="flex items-centezr hover:text-gray-200 text-xs sm:text-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="truncate">shagunshri.invest@gmail.com</span>
              </Link>
              <Link
                href="tel:02269645811"
                className="flex items-center hover:text-gray-200 text-xs sm:text-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="truncate">1243342321</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <div className="border-b border-black/10 bg-white">
        <div className="max-w-full lg:max-w-[1350px] px-3 sm:px-6 mx-auto">
          <div className="flex justify-between items-center min-h-[70px]">
            <Link href="/" className="flex items-center justify-center">
              <Image
                src="/images/logo.png"
                alt="ShagunShri"
                width={120}
                height={50}
                className="sm:w-40 sm:h-20 w-20 h-10 object-cover my-0"
                priority
              />
            </Link>
            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-4 lg:gap-6 text-black font-montserrat text-[15px] font-medium">
              <Link
                href="/"
                className="relative rounded-full py-1 transition-colors group"
              >
                Home
                <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#1AC0D8] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </Link>
              <Link
                href="https://partner.claimantmitra.com/join/partner"
                className="relative rounded-full py-1 transition-colors group"
                target="_blank"
                rel="noopener noreferrer"
              >
                Who We Are
                <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#1AC0D8] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </Link>
              <div
                className="relative inline-flex text-gray-800"
                onMouseEnter={() => setServicesDropdown(true)}
                onMouseLeave={() => setServicesDropdown(false)}
              >
                <button
                  type="button"
                  className="relative flex items-center gap-2 rounded-full py-1 group"
                >
                  What We Do
                  <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#1AC0D8] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                  <svg
                    className={`w-2.5 h-2.5 transform transition-transform duration-200 ${
                      servicesDropdown ? "rotate-180" : ""
                    }`}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    ></path>
                  </svg>
                </button>
                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 z-40 transition-all duration-200 w-[96vw] max-w-lg md:min-w-[28rem] bg-white shadow-lg rounded-lg p-4 ${
                    servicesDropdown
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible -translate-y-2"
                  }`}
                >
                  {renderServicesLinks()}
                </div>
              </div>
              <Link
                href="/components/Blogs"
                className="relative rounded-full py-1 transition-colors group"
              >
                Blogs
                <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#1AC0D8] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </Link>
              <Link
                href="https://partner.claimantmitra.com"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-block px-4 py-2 font-medium group"
              >
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-[#1AC0D8]"></span>
                <span className="relative text-black group-hover:text-white">
                  Contact Us
                </span>
              </Link>
              <div
                id="google_translate_element"
                className="px-2 py-1 rounded-md hover:bg-gray-50 transition-colors duration-200"
              ></div>
            </div>
            {/* Mobile nav toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring"
              aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          <div
            ref={mobileNavRef}
            className="fixed md:hidden top-0 right-0 w-full h-screen bg-white z-50"
            style={{ transform: "translateX(100%)", opacity: 0 }}
          >
            <div className="flex justify-between items-center px-4 py-2 border-b shadow-sm">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center"
              >
                <Image
                  src="/images/logo.png"
                  alt="ShagunShri"
                  width={110}
                  height={40}
                  priority
                  className="h-auto w-auto"
                />
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full"
                aria-label="Close Mobile Menu"
              >
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            {/* Mobile nav links and content */}
            <div className="overflow-y-auto h-[calc(100vh-56px)] pb-20 text-base transition-all">
              <div className="flex flex-col p-4 gap-2">
                {/* Main mobile navigation links */}
                {MOBILE_NAV_LINKS.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`px-4 py-2 rounded-lg transition ${
                      link.label === "Home"
                        ? "text-gray-900 font-semibold hover:bg-gray-100"
                        : "text-gray-800 hover:bg-gray-100"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                    target={link.isExternal ? "_blank" : undefined}
                    rel={link.isExternal ? "noopener noreferrer" : undefined}
                  >
                    {link.label}
                  </Link>
                ))}

                {/* What We Do - Accordion (mobile only, always visible on mobile) */}
                <div className="mt-1">
                  <button
                    onClick={() => setMobileServicesOpen((v) => !v)}
                    className="flex items-center justify-between w-full px-4 py-2 text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none select-none"
                    aria-expanded={mobileServicesOpen}
                    aria-controls="mobile-services-dropdown"
                  >
                    <span>What We Do</span>
                    <svg
                      className={`w-5 h-5 transition-transform duration-200 ${
                        mobileServicesOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <div
                    id="mobile-services-dropdown"
                    className={`transition-all duration-300 overflow-hidden ${
                      mobileServicesOpen
                        ? "max-h-[900px] opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    {mobileServicesOpen && renderMobileServicesLinks()}
                  </div>
                </div>

                {/* Action row for mobile (login/register/translate) */}
                <div className="mt-4 flex flex-col gap-3 border-t border-gray-200 pt-4">
                  <Link
                    href="https://partner.claimantmitra.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center py-3 px-4 rounded-lg bg-gray-100 text-gray-900 font-medium hover:bg-gray-200 transition"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Partner Login
                  </Link>
                  <Link
                    href="/components/Register-complaint"
                    className="block text-center py-3 px-4 rounded-lg font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 shadow hover:from-cyan-600 hover:to-blue-700 transition"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Register a complaint
                  </Link>
                  <div id="google_translate_element"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
