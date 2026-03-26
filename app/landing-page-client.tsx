"use client";

import { useEffect, useMemo, useState } from "react";
import { AboutInstituteSection } from "./landing-page/about-institute-section";
import { AboutProgrammeSection } from "./landing-page/about-programme-section";
import { AdmissionProcessSection } from "./landing-page/admission-process-section";
import { AudienceSection } from "./landing-page/audience-section";
import { CompareSection } from "./landing-page/compare-section";
import { ContactSection } from "./landing-page/contact-section";
import { FaqsSection } from "./landing-page/faqs-section";
import { FeeStructureSection } from "./landing-page/fee-structure-section";
import { HeroSection } from "./landing-page/hero-section";
import { InstructorsSection } from "./landing-page/instructors-section";
import { LearningSection } from "./landing-page/learning-section";
import { NbfcPartnersSection } from "./landing-page/nbfc-partners-section";
import {
  MobileStickyCta,
  PageFooter,
} from "./landing-page/page-footer";
import { PageHeader } from "./landing-page/page-header";
import { SupportSection } from "./landing-page/support-section";
import { WhyChooseSection } from "./landing-page/why-choose-section";

function useHeroInView() {
  const [isHeroVisible, setIsHeroVisible] = useState(true);

  useEffect(() => {
    const hero = document.getElementById("hero-form-anchor");
    if (!hero || !("IntersectionObserver" in window)) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeroVisible(entry.isIntersecting);
      },
      { threshold: 0.2 },
    );

    observer.observe(hero);

    return () => observer.disconnect();
  }, []);

  return isHeroVisible;
}

export default function LandingPageClient() {
  const isHeroVisible = useHeroInView();
  const primaryCtaHref = useMemo(() => "#hero-form-anchor", []);

  return (
    <div className="bg-[#fffdfa] text-[#21191b]">
      <PageHeader />

      <main>
        <HeroSection />
        <WhyChooseSection />
        <LearningSection />
        <InstructorsSection />
        <AdmissionProcessSection />
        <FeeStructureSection />
        <NbfcPartnersSection />
        <AudienceSection />
        <CompareSection />
        <AboutProgrammeSection />
        <AboutInstituteSection />
        <SupportSection />
        <FaqsSection />
        <ContactSection />
      </main>

      <PageFooter />
      <MobileStickyCta hidden={isHeroVisible} href={primaryCtaHref} />
    </div>
  );
}
