import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";
import Image from "next/image";

// FAQ DROPDOWN COMPONENT (unchanged)
const faqs = [
  {
    question: "What types of clients do you work with?",
    answer:
      "I work with individuals, families, and business owners seeking personalized financial guidance, including wealth management, retirement planning, estate strategies, and more.",
  },
  {
    question: "How are your services compensated?",
    answer:
      "My compensation structure is transparent and tailored to your needs. Depending on the service, I may charge a flat fee, hourly rate, or asset-based fee. We&apos;ll discuss this clearly before we begin working together.",
  },
  {
    question: "Do I need a lot of assets to work with you?",
    answer:
      "No. I believe everyone deserves expert financial advice, regardless of their current asset level. My services are designed to accommodate a variety of financial situations.",
  },
  {
    question: "How do I get started?",
    answer:
      "Simply contact me to schedule a complimentary consultation. We’ll discuss your goals and determine how I can best assist you on your financial journey.",
  },
];

const FaqDropdown = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="bg-[#F5F7FA] py-16" id="faq">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#2e4667] mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div className="bg-white rounded-lg shadow" key={i}>
              <button
                onClick={() => handleToggle(i)}
                className={`w-full flex justify-between items-center px-6 py-5 focus:outline-none transition-colors duration-200 ${
                  openIndex === i ? "bg-[#F9B22B]/10" : ""
                }`}
                aria-expanded={openIndex === i}
                aria-controls={`faq-answer-${i}`}
              >
                <span className="text-lg font-semibold text-[#2e4667] text-left">
                  {faq.question}
                </span>
                <svg
                  className={`h-5 w-5 text-[#F9B22B] transition-transform duration-300 ml-4 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                id={`faq-answer-${i}`}
                className={`overflow-hidden transition-all duration-300 px-6 ${
                  openIndex === i ? "max-h-40 py-2" : "max-h-0"
                }`}
                style={{ minHeight: 0 }}
              >
                <p className="text-[#4B6278] text-base">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: faq.answer,
                    }}
                  />
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// TESTIMONIAL COMPONENT (updated for financial consultant)
const Testimonial = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const section = sectionRef.current;
    gsap.fromTo(
      section,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "top 20%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  // Updated testimonials for a financial consultant
  const TestimonialData = [
    {
      id: 1,
      content:
        "Working with this firm has changed my entire outlook on money. I had little awareness of how to save and invest before, but now I have a plan and the confidence to follow it. The guidance on retirement and reducing my tax bill was invaluable.",
      name: "Priya Sharma",
      role: "Marketing Professional, Mumbai",
    },
    {
      id: 2,
      content:
        "I always thought financial advisory was just for the rich. After my first meeting, I realized how every family can benefit. The advice is always clear and tailored, and I've already seen better returns with less stress.",
      name: "Rahul Desai",
      role: "Small Business Owner, Pune",
    },
    {
      id: 3,
      content:
        "Extremely knowledgeable, approachable, and ethical. Helped me set up a comprehensive estate plan and gave great insight into legacy planning for my children. Highly recommended for anyone wanting to secure their family's future.",
      name: "Meera Iyer",
      role: "Retiree, Bengaluru",
    },
    {
      id: 4,
      content:
        "I had so many questions about investments, insurance, and saving for my child's education. Every advice was practical and actionable—no jargon, just real financial solutions. Thank you for making finance simple.",
      name: "Manish Kulkarni",
      role: "IT Specialist, Hyderabad",
    },
    {
      id: 5,
      content:
        "The personalized attention—whether for tax-efficiency or retirement—was a breath of fresh air. I trust their expertise completely and now recommend their services to all my friends and colleagues.",
      name: "Neha Verma",
      role: "HR Manager, Delhi",
    },
  ];

  return (
    <>
      <section id="testimonials" className="py-16 ">
        <div ref={sectionRef} className="max-w-[1300px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold mb-4 text-neutral-800">
              What Our <span className="text-[#8B593E]">Clients</span> Say
            </h2>
            <p className="text-base md:text-base text-neutral-900 max-w-4xl mx-auto">
              Discover the experiences of individuals and families we&apos;ve
              helped achieve their financial goals
            </p>
          </div>
          <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            spaceBetween={20}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 25,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="swiper-container"
          >
            {TestimonialData.map((data) => (
              <SwiperSlide key={data.id}>
                <div className="bg-white rounded-lg shadow-xl overflow-hidden h-[300px] border-2 border-[#8B593E]">
                  <div className="p-6 flex flex-col justify-between h-full">
                    <div className="text-gray-600 italic mb-4 flex-grow overflow-y-auto">
                      &quot;{data.content}&quot;
                    </div>
                    <div className="flex items-center mt-auto">
                      <div className="flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          className="w-12 h-12 text-[#8B593E]"
                        >
                          <path d="M399 384.2C376.9 345.8 335.4 320 288 320l-64 0c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <div className="text-lg font-medium text-[#4A2511]">
                          {data.name}
                        </div>
                        <div className="text-sm text-[#8B593E]">
                          {data.role}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

// ABOUT SECTION (inserted after hero section)
const About = () => {
  return (
    <div className="min-h-screen pt-8 sm:pt-12 pb-8 sm:pb-12 px-4 md:px-12 ">
      <div className="lg:max-w-[1300px] mx-auto">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center mb-6 sm:mb-10">
          <div className="relative h-[300px] sm:h-[400px] md:h-[550px] w-full rounded-lg overflow-hidden order-2 md:order-1">
            <Image
              src="/images/about.png"
              alt="Financial Consultant"
              fill
              className="object-cover mt-4 sm:mt-10"
              priority
            />
          </div>
          <div className="order-1 md:order-2">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">
              About Me
            </h1>
            <div className="h-1 sm:h-1.5 w-16 sm:w-20 md:w-28 bg-orange-600 rounded-full mx-0 mb-3 sm:mb-6"></div>
            <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6">
              As a dedicated financial consultant, I specialize in guiding
              individuals, families, and small businesses toward greater
              financial clarity and prosperity. My approach centers on
              personalized advice, helping you make informed decisions across
              investments, tax planning, insurance, retirement, and more.
            </p>
            <p className="text-base sm:text-lg text-gray-700">
              Trust, integrity, and lasting relationships are at the heart of my
              practice. Together, we&apos;ll chart your financial
              course—empowering you to achieve your goals and build a secure
              future.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Services Section (added after What We Do)
const Services = () => {
  const [flippedCards, setFlippedCards] = useState(new Set());

  const toggleCard = (index) => {
    setFlippedCards((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const services = [
    {
      title: "Mutual Funds",
      description:
        "Offering diverse mutual fund investment options tailored to your goals, risk tolerance, and time horizon, with ongoing portfolio reviews and guidance.",
      icon: "https://www.integratedindia.in/assets/img/blog/mutual-fund.jpg",
    },
    {
      title: "Retirement Planning",
      description:
        "Comprehensive retirement strategies to build and secure your future, covering investment choices, tax-optimization, projected income, and ongoing plan adjustments.",
      icon: "https://www.integratedindia.in/assets/img/blog/mutual-fund.jpg",
    },
    {
      title: "Tax Planning",
      description:
        "Personalized tax planning to minimize liability, maximize deductions, and ensure all filings are complete, accurate, and timely.",
      icon: "https://www.integratedindia.in/assets/img/blog/mutual-fund.jpg",
    },
    {
      title: "Portfolio Management Services (PMS)",
      description:
        "Customized portfolio management services for discerning investors seeking professional management and periodic rebalancing to meet long-term wealth objectives.",
      icon: "https://www.integratedindia.in/assets/img/blog/mutual-fund.jpg",
    },
    {
      title: "Pan Card",
      description:
        "Hassle-free assistance for new PAN card applications, corrections, or tracking, ensuring compliance and peace of mind for all financial transactions.",
      icon: "https://www.integratedindia.in/assets/img/blog/mutual-fund.jpg",
    },
    {
      title: "Passport",
      description:
        "Expert help in obtaining or renewing your passport, guiding you through required documentation, application process, and appointment scheduling.",
      icon: "https://www.integratedindia.in/assets/img/blog/mutual-fund.jpg",
    },
  ];

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-[#FDF1F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-10 md:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Our Services
          </h1>
          <div className="h-1.5 w-20 sm:w-24 bg-orange-600 rounded-full mx-auto mb-4 sm:mb-6"></div>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            We offer comprehensive accounting and financial services to help
            businesses achieve their financial goals and maintain compliance.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => {
            const isFlipped = flippedCards.has(index);
            return (
              <div
                key={index}
                className="group h-[250px] sm:h-[280px] [perspective:1000px] flex justify-center cursor-pointer"
                onClick={() => toggleCard(index)}
              >
                <div
                  className={`relative h-full w-full rounded-xl transition-all duration-500 [transform-style:preserve-3d] ${
                    isFlipped
                      ? "[transform:rotateY(180deg)]"
                      : "md:group-hover:[transform:rotateY(180deg)]"
                  }`}
                >
                  {/* Front */}
                  <div className="absolute inset-0 bg-white rounded-xl border border-gray-800 p-4 sm:p-6 lg:p-8 flex flex-col items-center justify-center [backface-visibility:hidden]">
                    <div className="flex flex-col items-center">
                      <div className="relative w-20 h-20 sm:w-48 sm:h-36 mb-4 sm:mb-1 flex items-center justify-center">
                        <Image
                          src={service.icon}
                          alt={service.title}
                          fill
                          className="object-contain h-full w-full"
                        />
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 text-center mt-5">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  {/* Back */}
                  <div className="absolute inset-0 h-full w-full rounded-xl bg-slate-50 p-4 text-center [transform:rotateY(180deg)] [backface-visibility:hidden] flex items-center justify-center">
                    <div className="flex min-h-full flex-col items-center justify-center">
                      <p className="text-sm sm:text-base text-gray-900 font-medium">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const Landing = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-start">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-banner.jpg"
            alt="Financial consultant background"
            fill
            className="object-cover"
            priority
          />
          {/* Left-to-right gradient overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to right, rgba(25,31,47,0.90) 0.10%, rgba(25,31,47,0.86) 30%, rgba(25,31,47,0.63) 58%, rgba(25,31,47,0.12) 100%)",
            }}
          ></div>
        </div>
        {/* Main Content */}
        <div className="relative z-10 text-left px-4 sm:px-8 lg:pl-20 max-w-2xl mt-40 sm:mt-48 md:mt-36 flex flex-col items-start">
          <span className="tracking-wide uppercase text-white text-xs sm:text-base font-semibold mb-2 sm:mb-0 ">
            Your Trusted{" "}
            <span className="text-[#F9B22B]">Financial Consultant</span>
          </span>
          <div className="flex items-center mb-3 sm:mb-5">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white ">
              Empower{" "}
              <span className="text-[#f3f5f7] font-bold">
                Your Financial Journey
              </span>
            </h1>
          </div>
          <p className="text-base sm:text-lg max-w-xl text-[#dbebfd] font-normal mb-6 sm:mb-8 leading-relaxed italic">
            Financial consulting is more than just numbers—it&apos;s about
            understanding your goals and building a secure future. As your
            dedicated consultant, I guide you through investments, insurance,
            tax planning, and more, delivering tailored strategies for lasting
            confidence and peace of mind.
          </p>
          <Link
            href="/components/Contact-us"
            className="inline-block bg-[#F9B22B] text-[#234] font-bold px-6 py-2.5 text-base rounded-full border-2 border-[#fff4] hover:bg-[#f5a311] hover:text-white transition-all duration-300 shadow-md focus:outline-none"
          >
            Speak with an Expert
          </Link>
        </div>
      </div>

      {/* About Section */}
      <About />

      {/* What We Do Section */}
      <section className="w-full mx-auto bg-white py-8 sm:py-12 md:py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1300px] mx-auto flex flex-col lg:flex-row items-center gap-8 sm:gap-10 lg:gap-12">
          {/* Left Side: Image */}
          <div className="w-full lg:w-1/2 mb-6 sm:mb-8 lg:mb-0 order-2 lg:order-1">
            <div className="rounded-lg overflow-hidden w-full bg-gray-100">
              <Image
                src="/images/what-we-do.png"
                alt="What We Do"
                width={600}
                height={450}
                className="object-cover w-full h-auto"
                priority={false}
              />
            </div>
          </div>
          {/* Right Side: Content */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-black mb-3 sm:mb-4">
              What We Do
            </h2>
            <p className="text-lg sm:text-xl font-medium text-[#24334d] mb-2 sm:mb-3">
              You define freedom. We&apos;ll design the path to help you get
              there.
            </p>
            <p className="text-[#445063] text-sm sm:text-base mb-6 sm:mb-8 max-w-xl">
              From financial planning to retirement planning and everything in
              between, our guidance is designed with one goal in mind: to help
              you find your freedom.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {/* Left column */}
              <ul className="space-y-3">
                <li>
                  <div className="flex items-center gap-2 bg-white rounded-lg px-3 sm:px-4 py-2 shadow text-[#2e4667] font-medium text-sm sm:text-base">
                    <span className="inline-block w-2 h-2 bg-[#F9B22B] rounded-full mr-2 shrink-0"></span>
                    Financial Planning
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-2 bg-white rounded-lg px-3 sm:px-4 py-2 shadow text-[#2e4667] font-medium text-sm sm:text-base">
                    <span className="inline-block w-2 h-2 bg-[#F9B22B] rounded-full mr-2 shrink-0"></span>
                    Retirement Planning
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-2 bg-white rounded-lg px-3 sm:px-4 py-2 shadow text-[#2e4667] font-medium text-sm sm:text-base">
                    <span className="inline-block w-2 h-2 bg-[#F9B22B] rounded-full mr-2 shrink-0"></span>
                    Estate Planning
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-2 bg-white rounded-lg px-3 sm:px-4 py-2 shadow text-[#2e4667] font-medium text-sm sm:text-base">
                    <span className="inline-block w-2 h-2 bg-[#F9B22B] rounded-full mr-2 shrink-0"></span>
                    Investment Management
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-2 bg-white rounded-lg px-3 sm:px-4 py-2 shadow text-[#2e4667] font-medium text-sm sm:text-base">
                    <span className="inline-block w-2 h-2 bg-[#F9B22B] rounded-full mr-2 shrink-0"></span>
                    Tax Planning
                  </div>
                </li>
              </ul>
              {/* Right column */}
              <ul className="space-y-3">
                <li>
                  <div className="flex items-center gap-2 bg-white rounded-lg px-3 sm:px-4 py-2 shadow text-[#2e4667] font-medium text-sm sm:text-base">
                    <span className="inline-block w-2 h-2 bg-[#F9B22B] rounded-full mr-2 shrink-0"></span>
                    Business Ownership
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-2 bg-white rounded-lg px-3 sm:px-4 py-2 shadow text-[#2e4667] font-medium text-sm sm:text-base">
                    <span className="inline-block w-2 h-2 bg-[#F9B22B] rounded-full mr-2 shrink-0"></span>
                    Private Client Services
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-2 bg-white rounded-lg px-3 sm:px-4 py-2 shadow text-[#2e4667] font-medium text-sm sm:text-base">
                    <span className="inline-block w-2 h-2 bg-[#F9B22B] rounded-full mr-2 shrink-0"></span>
                    Insurance Consultation
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <Services />

      {/* Testimonial Section */}
      <Testimonial />

      {/* FAQ Section - Dropdown Style */}
      <FaqDropdown />
    </>
  );
};

export default Landing;
