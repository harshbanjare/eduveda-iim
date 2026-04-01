"use client";

import { useState } from "react";
import { faqCategories } from "../landing-page-data";
import { SectionHeader } from "./shared";

export function FaqsSection() {
  const [activeFaqCategory, setActiveFaqCategory] = useState(0);
  const [openFaqItem, setOpenFaqItem] = useState("0-0");

  const activeFaqs = faqCategories[activeFaqCategory];

  return (
    <section
      id="faqs"
      className="mx-auto w-full max-w-[1240px] px-4 py-16 md:px-6 md:py-24"
    >
      <SectionHeader title="FAQs" align="center" />
      <div className="mt-10 flex gap-3 overflow-x-auto pb-2">
        {faqCategories.map((category, index) => {
          const isActive = activeFaqCategory === index;
          return (
            <button
              key={category.label}
              type="button"
              onClick={() => {
                setActiveFaqCategory(index);
                setOpenFaqItem(`${index}-0`);
              }}
              className={`whitespace-nowrap rounded-full px-5 py-3 text-[14px] font-[700] transition-colors ${
                isActive
                  ? "bg-[#0e478e] text-white"
                  : "bg-[#d9e8ff] text-[#2f2a2a]"
              }`}
            >
              {category.label}
            </button>
          );
        })}
      </div>
      <div className="mt-8 space-y-4">
        {activeFaqs.items.map((item, index) => {
          const itemKey = `${activeFaqCategory}-${index}`;
          const isOpen = openFaqItem === itemKey;
          return (
            <article
              key={item.question}
              className="overflow-hidden rounded-[24px] border border-[#eadfd6] bg-white shadow-[0_12px_30px_rgba(20,18,14,0.04)]"
            >
              <button
                type="button"
                onClick={() => setOpenFaqItem(isOpen ? "" : itemKey)}
                className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left md:px-7"
              >
                <span className="text-[18px] font-[700] leading-7 text-[#21191b]">
                  {item.question}
                </span>
                <span className="text-[26px] font-[500] text-[#0e478e]">
                  {isOpen ? "−" : "+"}
                </span>
              </button>
              {isOpen ? (
                <div className="whitespace-pre-line border-t border-[#f0e8e0] px-5 py-5 text-[15px] leading-7 text-[#5f5658] md:px-7">
                  {item.answer}
                </div>
              ) : null}
            </article>
          );
        })}
      </div>
    </section>
  );
}
