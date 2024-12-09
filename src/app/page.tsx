"use client";

// EXTERNAL DEPS ===============================================================
import React from "react";
import { HeroSection } from "@/components/hero-section";
import { ThemeProvider } from "fictoan-react";
import FeaturesSection  from "@/components/feature-section";
import { CTASection } from "@/components/cta-section";
import BenefitsSection from "@/components/benefits-section";
import Footer  from "@/components/footer";
// INTERNAL DEPS ===============================================================
import {Element} from "fictoan-react";

const SetusLandingPage = () => {
  return (
    <Element as="article" id="page-setus">
      <HeroSection />
      <FeaturesSection />
      <BenefitsSection />
      <CTASection />
      <Footer />
    </Element>
  );
};

export default SetusLandingPage;