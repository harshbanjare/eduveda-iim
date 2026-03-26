"use client";

import Image from "next/image";
import { useState } from "react";
import { audienceSegments } from "../landing-page-data";

export function AudienceSection() {
  const [activeAudience, setActiveAudience] = useState(0);
  const activeAudienceData = audienceSegments[activeAudience];

  return (
    <section id="who-is-this-course-for" className="bg-white">
      <div className="mx-auto w-full max-w-[1280px] px-4 py-16 md:px-6 md:py-24">
        <h2 className="text-center font-ui text-[34px] font-[800] leading-[1.04] tracking-[-0.05em] text-[#21191b] md:text-[48px]">
          Who Is This Course For?
        </h2>
        <p className="mx-auto mt-5 max-w-[840px] text-center font-ui text-[18px] leading-[1.5] text-[#2d2628] md:text-[22px]">
          Anyone with a passion for building a career in Digital Marketing
        </p>

        <div className="mt-10 flex gap-3 overflow-x-auto pb-2 md:mt-12 md:justify-center">
          {audienceSegments.map((segment, index) => {
            const isActive = activeAudience === index;

            return (
              <button
                key={segment.label}
                type="button"
                onClick={() => setActiveAudience(index)}
                className={`whitespace-nowrap rounded-full border px-6 py-3 font-ui text-[15px] font-[700] tracking-[-0.02em] transition-colors md:text-[16px] ${
                  isActive
                    ? "border-[#0e478e] bg-[#0e478e] text-white shadow-[0_10px_22px_rgba(14,71,142,0.18)]"
                    : "border-[#d9dde4] bg-white text-[#2d2628]"
                }`}
              >
                {segment.label}
              </button>
            );
          })}
        </div>

        <div className="mt-12 grid items-center gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-12">
          <div className="mx-auto w-full max-w-[520px] overflow-hidden rounded-[30px] shadow-[0_20px_42px_rgba(20,18,16,0.08)]">
            <Image
              src="/audience-assets/non-tech-professionals.webp"
              alt={activeAudienceData.label}
              width={513}
              height={513}
              className="h-auto w-full object-cover"
            />
          </div>

          <div className="rounded-[34px] border border-[#d9dde4] bg-white p-7 shadow-[0_20px_42px_rgba(20,18,16,0.06)] md:p-10">
            <ul className="space-y-5 font-ui text-[17px] leading-[1.55] text-[#3f393b] md:text-[18px]">
              {activeAudienceData.points.map((point) => (
                <li key={point} className="flex gap-4">
                  <span className="mt-[11px] h-[7px] w-[7px] flex-none rounded-full bg-[#0e478e]" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 rounded-[24px] bg-[linear-gradient(180deg,#f7fbff_0%,#edf6ff_100%)] px-6 py-6">
              <div className="font-ui text-[16px] font-[800] tracking-[-0.03em] text-[#21191b] md:text-[17px]">
                Top 1% Edge
              </div>
              <p className="mt-4 font-ui text-[17px] leading-[1.55] text-[#2f2a2c] md:text-[18px]">
                {activeAudienceData.edge}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
