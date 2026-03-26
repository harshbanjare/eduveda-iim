"use client";

import Image from "next/image";
import { useState } from "react";
import { modules, toolkit } from "../landing-page-data";

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <circle
        cx="12"
        cy="12"
        r="8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M12 7.8v4.6l3.1 1.6"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function BookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path
        d="M4.5 6.5c0-1.1.9-2 2-2h4.8c1.1 0 2 .9 2 2v11.5H8.1c-1.4 0-2.6.3-3.6.9V6.5Zm15 0c0-1.1-.9-2-2-2h-4.8c-1.1 0-2 .9-2 2v11.5h5.2c1.4 0 2.6.3 3.6.9V6.5Z"
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function MedalIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <circle
        cx="12"
        cy="12.5"
        r="4.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M9.4 3.8h5.2l-1.5 4.1h-2.2L9.4 3.8Zm-.8 12.3v4.1l3.4-1.9 3.4 1.9v-4.1"
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

const courseDetails = [
  {
    label: "Duration",
    value: "6 Months",
    icon: <ClockIcon />,
  },
  {
    label: "Course Mode",
    value: "Online",
    icon: <BookIcon />,
  },
  {
    label: "Certification",
    value: "from IIM Ranchi",
    icon: <MedalIcon />,
  },
];

export function LearningSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="what-you-will-learn" className="bg-white">
      <div className="mx-auto w-full max-w-[1280px] px-4 pb-16 pt-16 md:px-6 md:pb-24 md:pt-24">
        <div className="grid items-start gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14">
          <div className="max-w-[720px]">
            <h2 className="font-ui text-[34px] font-[800] leading-[1.02] tracking-[-0.05em] text-[#21191b] md:text-[48px]">
              What Will You Learn?
            </h2>
            <div className="mt-6 max-w-[700px] space-y-2.5 font-ui text-[16px] leading-[1.65] text-[#4d4749] md:text-[18px]">
              <p>
                Advance your career with a hands-on program that builds
                practical digital marketing skills across SEO, social media,
                email, paid ads, and analytics.
              </p>
              <p>
                Learn how to use Generative AI tools like ChatGPT to create
                content, personalize campaigns, and work more efficiently.
                Apply data-driven strategies to real-world marketing scenarios
                and complete a capstone project that brings together strategy,
                execution, and performance measurement.
              </p>
            </div>
          </div>

          <div className="mx-auto w-full max-w-[540px] lg:justify-self-end">
            <Image
              src="/learning-assets/learning-hero.webp"
              alt="Students learning together"
              width={540}
              height={305}
              className="w-full rounded-[28px] object-cover shadow-[0_18px_40px_rgba(35,26,20,0.08)]"
              priority={false}
            />
          </div>
        </div>

        <div className="mt-12 rounded-[28px] border border-[#edf0f5] bg-white px-6 py-8 shadow-[0_16px_36px_rgba(35,26,20,0.06)] md:mt-14 md:px-10 md:py-10">
          <div className="font-ui text-[18px] font-[700] tracking-[-0.03em] text-[#21191b] md:text-[20px]">
            Toolkit
          </div>
          <div className="mt-7 flex flex-wrap items-center gap-x-8 gap-y-6 md:gap-x-12">
            {toolkit.map((tool) => (
              <div
                key={tool.label}
                className="flex min-h-[60px] items-center justify-center"
              >
                <Image
                  src={tool.src}
                  alt={tool.label}
                  width={tool.width}
                  height={tool.height}
                  className="h-auto w-auto max-h-[52px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 rounded-[34px] bg-[linear-gradient(180deg,#ffffff_0%,#f5fbff_20%,#e8f4ff_62%,#dcefff_100%)] px-4 py-10 md:px-10 md:py-14">
          <div className="font-ui text-[26px] font-[800] tracking-[-0.04em] text-[#21191b] md:text-[30px]">
            Course Details
          </div>

          <div className="mt-8 grid gap-5 md:mt-10 md:grid-cols-3 md:gap-0">
            {courseDetails.map((item, index) => (
              <div
                key={item.label}
                className={`flex items-center gap-4 rounded-[24px] bg-white/72 px-5 py-5 md:rounded-none md:bg-transparent md:px-0 md:py-0 ${
                  index !== 0 ? "md:border-l md:border-[#cad7e6] md:pl-16" : ""
                }`}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0e478e] text-white shadow-[0_12px_24px_rgba(14,71,142,0.18)]">
                  {item.icon}
                </div>
                <div>
                  <div className="font-ui text-[16px] font-[800] tracking-[-0.03em] text-[#21191b] md:text-[18px]">
                    {item.label}
                  </div>
                  <div className="mt-1 font-ui text-[15px] leading-[1.35] text-[#3f3a3b] md:text-[16px]">
                    {item.value}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 space-y-4 md:mt-12">
            {modules.map((module, index) => {
              const isOpen = index === openIndex;

              return (
                <article
                  key={module.title}
                  className="overflow-hidden rounded-[22px] border border-[#d4dde8] bg-white shadow-[0_14px_30px_rgba(31,22,17,0.05)]"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left md:px-7"
                    aria-expanded={isOpen}
                  >
                    <span className="font-ui text-[20px] font-[800] leading-[1.25] tracking-[-0.03em] text-[#21191b]">
                      {module.title}
                    </span>
                    <span
                      className={`flex h-8 w-8 items-center justify-center text-[#21191b] transition-transform ${isOpen ? "rotate-180" : ""}`}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className="h-5 w-5"
                      >
                        <path
                          d="m6 9 6 6 6-6"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                      </svg>
                    </span>
                  </button>

                  {isOpen ? (
                    <div className="border-t border-[#edf0f4] px-6 pb-6 pt-5 md:px-7">
                      <ul className="space-y-3 font-ui text-[15px] leading-[1.55] text-[#494244] md:text-[16px]">
                        {module.points.map((point) => {
                          const [lead, ...rest] = point.split(": ");
                          const body =
                            rest.length > 0 ? rest.join(": ") : undefined;

                          return (
                            <li key={point} className="flex gap-3">
                              <span className="mt-[11px] h-[5px] w-[5px] flex-none rounded-full bg-[#0e478e]" />
                              <span>
                                {body ? (
                                  <>
                                    <strong className="font-[800] text-[#21191b]">
                                      {lead}:
                                    </strong>{" "}
                                    {body}
                                  </>
                                ) : (
                                  point
                                )}
                              </span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  ) : null}
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
