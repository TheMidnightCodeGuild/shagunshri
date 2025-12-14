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

// GALLERY SLIDER COMPONENT
const GallerySlider = () => {
  const galleryImages = [
    {
      id: 1,
      src: "https://placehold.co/600x400/000000/FFFFFF/png",
      alt: "Gallery Image 1",
    },
    {
      id: 2,
      src: "https://placehold.co/600x400/000000/FFFFFF/png",
      alt: "Gallery Image 2",
    },
    {
      id: 3,
      src: "https://placehold.co/600x400/000000/FFFFFF/png",
      alt: "Gallery Image 3",
    },
    {
      id: 4,
      src: "https://placehold.co/600x400/000000/FFFFFF/png",
      alt: "Gallery Image 4",
    },
    {
      id: 5,
      src: "https://placehold.co/600x400/000000/FFFFFF/png",
      alt: "Gallery Image 5",
    },
    {
      id: 6,
      src: "https://placehold.co/600x400/000000/FFFFFF/png",
      alt: "Gallery Image 6",
    },
  ];

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-neutral-800">
            Our <span className="text-[#8B593E]">Gallery</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-neutral-900 max-w-4xl mx-auto px-2">
            Explore our collection of memorable moments
          </p>
        </div>
        <Swiper
          modules={[Autoplay]}
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 25,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          className="gallery-swiper"
        >
          {galleryImages.map((image) => (
            <SwiperSlide key={image.id}>
              <div className="relative h-[300px] w-full rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="text-center mt-6 sm:mt-8">
          <Link
            href="/gallery"
            className="inline-block bg-[#8B593E] text-white font-semibold px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base rounded-full hover:bg-[#6d4430] transition-colors duration-300 shadow-md"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
};

// GALLERY SLIDER 2 COMPONENT - Vertical Card Style
const GallerySlider2 = () => {
  const galleryImages2 = [
    {
      id: 1,
      src: "https://placehold.co/400x500/8B593E/FFFFFF/png",
      alt: "Portfolio Image 1",
      title: "Financial Planning",
      description: "Strategic wealth management solutions",
    },
    {
      id: 2,
      src: "https://placehold.co/400x500/F9B22B/FFFFFF/png",
      alt: "Portfolio Image 2",
      title: "Investment Advisory",
      description: "Expert investment guidance",
    },
    {
      id: 3,
      src: "https://placehold.co/400x500/2e4667/FFFFFF/png",
      alt: "Portfolio Image 3",
      title: "Retirement Planning",
      description: "Secure your future today",
    },
    {
      id: 4,
      src: "https://placehold.co/400x500/8B593E/FFFFFF/png",
      alt: "Portfolio Image 4",
      title: "Tax Optimization",
      description: "Minimize tax liabilities",
    },
    {
      id: 5,
      src: "https://placehold.co/400x500/F9B22B/FFFFFF/png",
      alt: "Portfolio Image 5",
      title: "Estate Planning",
      description: "Legacy preservation strategies",
    },
  ];

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-b from-[#FDF1F5] to-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-neutral-800">
            Our <span className="text-[#F9B22B]">Gallery</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-neutral-700 max-w-2xl mx-auto px-2">
            Discover our comprehensive range of financial services
          </p>
        </div>
        <Swiper
          modules={[Autoplay]}
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="portfolio-swiper"
        >
          {galleryImages2.map((image) => (
            <SwiperSlide key={image.id}>
              <div className="group relative h-[350px] sm:h-[400px] md:h-[450px] w-full rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-105">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6 text-white transform transition-all duration-300">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2 group-hover:translate-y-[-8px] transition-transform duration-300">
                    {image.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-200 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                    {image.description}
                  </p>

                  {/* Decorative Line */}
                  <div className="w-12 sm:w-16 h-1 bg-[#F9B22B] mt-2 sm:mt-4 group-hover:w-20 sm:group-hover:w-24 transition-all duration-300"></div>
                </div>

                {/* Corner Badge */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-white/20 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
                  <span className="text-white text-[10px] sm:text-xs font-semibold">
                    Featured
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

// CONTACT FORM COMPONENT
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 1500);
  };

  return (
    <section
      className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-[#F5F7FA] to-[#E8EDF2]"
      id="contact"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-neutral-800">
            Get In <span className="text-[#8B593E]">Touch</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-neutral-700 max-w-2xl mx-auto px-2">
            Have questions or ready to start your financial journey? Reach out
            to us and we&apos;ll get back to you shortly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-start">
          {/* Contact Information */}
          <div className="bg-white rounded-2xl shadow-xl p-5 sm:p-6 md:p-8 space-y-4 sm:space-y-6">
            <h3 className="text-2xl font-bold text-[#2e4667] mb-6">
              Contact Information
            </h3>

            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="bg-[#8B593E]/10 p-2 sm:p-3 rounded-lg">
                  <svg
                    className="w-6 h-6 text-[#8B593E]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-[#2e4667] mb-1 text-sm sm:text-base">
                    Address
                  </h4>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    123 Financial Street, Business District
                    <br />
                    Mumbai, Maharashtra 400001
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#8B593E]/10 p-3 rounded-lg">
                  <svg
                    className="w-6 h-6 text-[#8B593E]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-[#2e4667] mb-1">Phone</h4>
                  <p className="text-gray-600 text-sm">+91 98765 43210</p>
                  <p className="text-gray-600 text-sm">+91 98765 43211</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#8B593E]/10 p-3 rounded-lg">
                  <svg
                    className="w-6 h-6 text-[#8B593E]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-[#2e4667] mb-1">Email</h4>
                  <p className="text-gray-600 text-sm">
                    info@financialconsultant.com
                  </p>
                  <p className="text-gray-600 text-sm">
                    support@financialconsultant.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#8B593E]/10 p-3 rounded-lg">
                  <svg
                    className="w-6 h-6 text-[#8B593E]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-[#2e4667] mb-1">
                    Business Hours
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Monday - Friday: 9:00 AM - 6:00 PM
                  </p>
                  <p className="text-gray-600 text-sm">
                    Saturday: 10:00 AM - 2:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-5 sm:p-6 md:p-8">
            <h3 className="text-2xl font-bold text-[#2e4667] mb-6">
              Send Us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B593E] focus:border-transparent outline-none transition-all"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B593E] focus:border-transparent outline-none transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B593E] focus:border-transparent outline-none transition-all"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B593E] focus:border-transparent outline-none transition-all"
                  placeholder="How can we help you?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B593E] focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              {submitStatus === "success" && (
                <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                  <p className="font-medium">Thank you for your message!</p>
                  <p className="text-sm">
                    We&apos;ll get back to you as soon as possible.
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#8B593E] text-white font-semibold px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg hover:bg-[#6d4430] transition-colors duration-300 shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

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
    <section className="bg-[#F5F7FA] py-8 sm:py-12 md:py-16 lg:py-20" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#2e4667] mb-6 sm:mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div className="bg-white rounded-lg shadow" key={i}>
              <button
                onClick={() => handleToggle(i)}
                className={`w-full flex justify-between items-center px-4 sm:px-6 py-3 sm:py-5 focus:outline-none transition-colors duration-200 ${
                  openIndex === i ? "bg-[#F9B22B]/10" : ""
                }`}
                aria-expanded={openIndex === i}
                aria-controls={`faq-answer-${i}`}
              >
                <span className="text-sm sm:text-base md:text-lg font-semibold text-[#2e4667] text-left">
                  {faq.question}
                </span>
                <svg
                  className={`h-4 w-4 sm:h-5 sm:w-5 text-[#F9B22B] transition-transform duration-300 ml-2 sm:ml-4 flex-shrink-0 ${
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
                className={`overflow-hidden transition-all duration-300 px-4 sm:px-6 ${
                  openIndex === i ? "max-h-40 py-2" : "max-h-0"
                }`}
                style={{ minHeight: 0 }}
              >
                <p className="text-[#4B6278] text-sm sm:text-base">
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
      <section id="testimonials" className="py-8 sm:py-12 md:py-16 lg:py-20">
        <div
          ref={sectionRef}
          className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-neutral-800">
              What Our <span className="text-[#8B593E]">Clients</span> Say
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-neutral-900 max-w-4xl mx-auto px-2">
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
                <div className="bg-white rounded-lg shadow-xl overflow-hidden h-[280px] sm:h-[300px] border-2 border-[#8B593E]">
                  <div className="p-4 sm:p-5 md:p-6 flex flex-col justify-between h-full">
                    <div className="text-gray-600 italic mb-3 sm:mb-4 flex-grow overflow-y-auto text-sm sm:text-base">
                      &quot;{data.content}&quot;
                    </div>
                    <div className="flex items-center mt-auto">
                      <div className="flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          className="w-10 h-10 sm:w-12 sm:h-12 text-[#8B593E]"
                        >
                          <path d="M399 384.2C376.9 345.8 335.4 320 288 320l-64 0c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z" />
                        </svg>
                      </div>
                      <div className="ml-3 sm:ml-4">
                        <div className="text-base sm:text-lg font-medium text-[#4A2511]">
                          {data.name}
                        </div>
                        <div className="text-xs sm:text-sm text-[#8B593E]">
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
    <div className="min-h-screen pt-8 sm:pt-12 md:pt-16 lg:pt-20 pb-8 sm:pb-12 md:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8">
      <div className="lg:max-w-[1300px] mx-auto">
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center mb-0">
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
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4">
              About Me
            </h1>
            <div className="h-1 sm:h-1.5 w-16 sm:w-20 md:w-28 bg-orange-600 rounded-full mx-0 mb-3 sm:mb-4 md:mb-6"></div>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-3 sm:mb-4 md:mb-6">
              As a dedicated financial consultant, I specialize in guiding
              individuals, families, and small businesses toward greater
              financial clarity and prosperity. My approach centers on
              personalized advice, helping you make informed decisions across
              investments, tax planning, insurance, retirement, and more.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-700">
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
                  <div className="absolute inset-0 bg-white rounded-xl border border-gray-800 p-4 sm:p-5 md:p-6 lg:p-8 flex flex-col items-center justify-center [backface-visibility:hidden]">
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
                  <div className="absolute inset-0 h-full w-full rounded-xl bg-slate-50 p-4 sm:p-5 md:p-6 text-center [transform:rotateY(180deg)] [backface-visibility:hidden] flex items-center justify-center">
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
      <div className="relative min-h-[100vh] flex items-center justify-start">
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
        <div className="relative z-10 text-left px-4 sm:px-6 md:px-8 lg:px-12 xl:pl-20 max-w-2xl mt-32 sm:mt-36 md:mt-40 lg:mt-44 flex flex-col items-start">
          <span className="tracking-wide uppercase text-white text-xs sm:text-sm md:text-base font-semibold mb-2 sm:mb-3">
            Your Trusted{" "}
            <span className="text-[#F9B22B]">Financial Consultant</span>
          </span>
          <div className="flex items-center mb-3 sm:mb-4 md:mb-5">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              Empower{" "}
              <span className="text-[#f3f5f7] font-bold">
                Your Financial Journey
              </span>
            </h1>
          </div>
          <p className="text-sm sm:text-base md:text-lg max-w-xl text-[#dbebfd] font-normal mb-5 sm:mb-6 md:mb-8 leading-relaxed italic">
            Financial consulting is more than just numbers—it&apos;s about
            understanding your goals and building a secure future. As your
            dedicated consultant, I guide you through investments, insurance,
            tax planning, and more, delivering tailored strategies for lasting
            confidence and peace of mind.
          </p>
          <Link
            href="/components/Contact-us"
            className="inline-block bg-[#F9B22B] text-[#234] font-bold px-5 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 text-sm sm:text-base rounded-full border-2 border-[#fff4] hover:bg-[#f5a311] hover:text-white transition-all duration-300 shadow-md focus:outline-none"
          >
            Speak with an Expert
          </Link>
        </div>
      </div>

      {/* About Section */}
      <About />

      {/* Why Choose Us Section */}
      <section className="w-full mx-auto bg-white py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1300px] mx-auto flex flex-col lg:flex-row items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {/* Left Side: Image */}
          <div className="w-full lg:w-1/2 mb-0 order-2 lg:order-1">
            <div className="rounded-lg overflow-hidden w-full">
              <Image
                src="/images/choose.svg"
                alt="Why Choose Us"
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
              Why Choose Us
            </h2>
            <p className="text-lg sm:text-xl font-medium text-[#24334d] mb-2 sm:mb-3">
              Your trusted partner in achieving financial success and security.
            </p>
            <p className="text-[#445063] text-sm sm:text-base mb-6 sm:mb-8 max-w-xl">
              We combine expertise, personalized service, and proven strategies
              to help you navigate your financial journey with confidence and
              peace of mind.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 md:gap-4">
              {/* Left column */}
              <ul className="space-y-2 sm:space-y-2.5 md:space-y-3">
                <li>
                  <div className="flex items-center gap-2 bg-white border border-[#F9B22B] rounded-lg px-3 sm:px-4 py-2 shadow text-[#2e4667] font-medium text-sm sm:text-base">
                    <span className="inline-block w-2 h-2 bg-[#F9B22B] rounded-full mr-2 shrink-0"></span>
                    Personalized Approach
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-2 bg-white rounded-lg px-3 sm:px-4 py-2 border border-[#F9B22B] shadow text-[#2e4667] font-medium text-sm sm:text-base">
                    <span className="inline-block w-2 h-2 bg-[#F9B22B] rounded-full mr-2 shrink-0"></span>
                    Expert Guidance
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-2 bg-white rounded-lg px-3 sm:px-4 py-2 border border-[#F9B22B] shadow text-[#2e4667] font-medium text-sm sm:text-base">
                    <span className="inline-block w-2 h-2 bg-[#F9B22B] rounded-full mr-2 shrink-0"></span>
                    Proven Track Record
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-2 bg-white rounded-lg px-3 sm:px-4 py-2 border border-[#F9B22B] shadow text-[#2e4667] font-medium text-sm sm:text-base">
                    <span className="inline-block w-2 h-2 bg-[#F9B22B] rounded-full mr-2 shrink-0"></span>
                    Comprehensive Solutions
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-2 bg-white rounded-lg px-3 sm:px-4 py-2 border border-[#F9B22B] shadow text-[#2e4667] font-medium text-sm sm:text-base">
                    <span className="inline-block w-2 h-2 bg-[#F9B22B] rounded-full mr-2 shrink-0"></span>
                    Client-Centric Focus
                  </div>
                </li>
              </ul>
              {/* Right column */}
              <ul className="space-y-2 sm:space-y-2.5 md:space-y-3">
                <li>
                  <div className="flex items-center gap-2 bg-white rounded-lg px-3 sm:px-4 py-2 border border-[#F9B22B] shadow text-[#2e4667] font-medium text-sm sm:text-base">
                    <span className="inline-block w-2 h-2 bg-[#F9B22B] rounded-full mr-2 shrink-0"></span>
                    Transparent Communication
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-2 bg-white rounded-lg px-3 sm:px-4 py-2 border border-[#F9B22B] shadow text-[#2e4667] font-medium text-sm sm:text-base">
                    <span className="inline-block w-2 h-2 bg-[#F9B22B] rounded-full mr-2 shrink-0"></span>
                    Long-Term Relationships
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-2 bg-white rounded-lg px-3 sm:px-4 py-2 border border-[#F9B22B] shadow text-[#2e4667] font-medium text-sm sm:text-base">
                    <span className="inline-block w-2 h-2 bg-[#F9B22B] rounded-full mr-2 shrink-0"></span>
                    Integrity & Trust
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

      {/* Gallery Slider Section */}
      <GallerySlider />

      {/* Gallery Slider 2 Section - Portfolio Style */}
      <GallerySlider2 />

      {/* Contact Form Section */}
      <ContactForm />

      {/* FAQ Section - Dropdown Style */}
      <FaqDropdown />
    </>
  );
};

export default Landing;
