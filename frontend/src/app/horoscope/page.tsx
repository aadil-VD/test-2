"use client";

import { Navbar } from "@/landss/navbar";
import { Hero } from "@/landss/hero";
import { HowItWorks } from "@/landss/how-it-works";
import { WhatYouReceive } from "@/landss/what-you-receive";
import { Testimonials } from "@/landss/testimonials";
import { Pricing } from "@/landss/pricing";
import { Faq } from "@/landss/faq";
import { Footer } from "@/landss/footer";
import "@/styles/landing-page.css";

export default function HoroscopePage() {
  return (
    <div className="lp-body">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <WhatYouReceive />
        <Testimonials />
        <Pricing />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
