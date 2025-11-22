import React from "react";
import Link from "next/link";
import Image from "next/image";

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

      {/* What We Do Section */}
      <section className="w-full h-screen mx-auto bg-[#F3F4F6] py-24">
        <div className="max-w-[1300px] mx-auto  flex flex-col lg:flex-row items-center gap-12">
          {/* Left Side: Image */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-2">
            <div className="rounded-lg overflow-hidden w-full h-full bg-gray-100">
              <Image
                src="/images/what-we-do.png"
                alt="What We Do"
                width={600}
                height={450}
                className="object-cover w-full h-full"
                priority={false}
              />
            </div>
          </div>
          {/* Right Side: Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl md:text-5xl font-extrabold text-black mb-3">
              What We Do
            </h2>
            <p className="text-xl font-medium text-[#24334d] mb-2">
              You define freedom. We&apos;ll design the path to help you get
              there.
            </p>
            <p className="text-[#445063] text-base mb-6 max-w-xl">
              From financial planning to retirement planning and everything in
              between, our guidance is designed with one goal in mind: to help
              you find your freedom.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Left column */}
              <ul className="space-y-3">
                <li>
                  <div className="flex items-center gap-2 bg-white rounded-lg px-4 py-2 shadow text-[#2e4667] font-medium text-base">
                    <span className="inline-block w-2 h-2 bg-[#F9B22B] rounded-full mr-2"></span>
                    Financial Planning
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-2 bg-white rounded-lg px-4 py-2 shadow text-[#2e4667] font-medium text-base">
                    <span className="inline-block w-2 h-2 bg-[#F9B22B] rounded-full mr-2"></span>
                    Retirement Planning
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-2 bg-white rounded-lg px-4 py-2 shadow text-[#2e4667] font-medium text-base">
                    <span className="inline-block w-2 h-2 bg-[#F9B22B] rounded-full mr-2"></span>
                    Estate Planning
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-2 bg-white rounded-lg px-4 py-2 shadow text-[#2e4667] font-medium text-base">
                    <span className="inline-block w-2 h-2 bg-[#F9B22B] rounded-full mr-2"></span>
                    Investment Management
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-2 bg-white rounded-lg px-4 py-2 shadow text-[#2e4667] font-medium text-base">
                    <span className="inline-block w-2 h-2 bg-[#F9B22B] rounded-full mr-2"></span>
                    Tax Planning
                  </div>
                </li>
              </ul>
              {/* Right column */}
              <ul className="space-y-3">
                <li>
                  <div className="flex items-center gap-2 bg-white rounded-lg px-4 py-2 shadow text-[#2e4667] font-medium text-base">
                    <span className="inline-block w-2 h-2 bg-[#F9B22B] rounded-full mr-2"></span>
                    Business Ownership
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-2 bg-white rounded-lg px-4 py-2 shadow text-[#2e4667] font-medium text-base">
                    <span className="inline-block w-2 h-2 bg-[#F9B22B] rounded-full mr-2"></span>
                    Private Client Services
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-2 bg-white rounded-lg px-4 py-2 shadow text-[#2e4667] font-medium text-base">
                    <span className="inline-block w-2 h-2 bg-[#F9B22B] rounded-full mr-2"></span>
                    Insurance Consultation
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Landing;
