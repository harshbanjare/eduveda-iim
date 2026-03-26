const whyChooseDisplayItems = [
  {
    title: "Prestigious Certification",
    description:
      "Earn a completion certificate that signals structured learning, guided practice, and credible programme participation.",
  },
  {
    title: "Future-Proof Career Gateway",
    description:
      "Build digital marketing skills that align with modern growth, performance, analytics, and AI-assisted workflows.",
  },
  {
    title: "Practical, Data-Driven Marketing",
    description:
      "Learn to think through campaigns using measurement, experimentation, reporting, and ROI-focused decision making.",
  },
  {
    title: "Immersion Experience",
    description:
      "Get a cohort-led learning journey with hands-on tasks, discussion, and project-style practice throughout the bootcamp.",
  },
  {
    title: "Industry-Relevant Tools",
    description:
      "Work with a modern toolkit that reflects how teams operate across ads, analytics, content, and automation.",
  },
  {
    title: "Placement Opportunities",
    description:
      "Receive a learning experience positioned around portfolio readiness, role confidence, and job-oriented outcomes.",
  },
];

export function WhyChooseSection() {
  return (
    <section
      id="why-choose-this-course"
      className="bg-[linear-gradient(180deg,#ffffff_0%,#f7fbff_22%,#ecf4ff_68%,#dce9fb_100%)]"
    >
      <div className="mx-auto w-full max-w-[1280px] px-4 pb-16 pt-28 sm:pt-32 md:px-6 md:pb-24 md:pt-30">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div className="mx-auto flex w-full max-w-[410px] justify-center lg:justify-start">
            <div className="w-full max-w-[410px] rounded-[14px] border border-[#c9d6e8] bg-white p-4 shadow-[0_16px_36px_rgba(35,26,20,0.08)]">
              <div className="relative overflow-hidden rounded-[10px] border border-[#d7e1ef] bg-[linear-gradient(180deg,#f8fbff_0%,#edf5ff_100%)]">
                <div className="aspect-[1.48] w-full">
                  <div className="absolute inset-x-0 top-0 h-12 bg-[linear-gradient(90deg,#0e478e_0%,#6ea9ff_100%)] opacity-12" />
                  <div className="absolute inset-5 rounded-[10px] border border-dashed border-[#9bb8dd] bg-white/72" />
                  <div className="absolute inset-x-9 top-9 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0e478e] text-[10px] font-[800] leading-none text-white">
                      EDU
                    </div>
                    <div className="h-2 w-28 rounded-full bg-[#d2def0]" />
                  </div>
                  <div className="absolute inset-x-12 top-24 space-y-4 text-center">
                    <div className="mx-auto h-4 w-40 rounded-full bg-[#0e478e]/18" />
                    <div className="mx-auto h-3 w-56 rounded-full bg-[#d5deea]" />
                    <div className="mx-auto h-3 w-48 rounded-full bg-[#dfe7f2]" />
                    <div className="mx-auto h-3 w-44 rounded-full bg-[#dfe7f2]" />
                  </div>
                  <div className="absolute inset-x-9 bottom-7 grid grid-cols-4 gap-3">
                    <div className="h-7 rounded-md bg-[#dbe6f4]" />
                    <div className="h-7 rounded-md bg-[#dbe6f4]" />
                    <div className="h-7 rounded-md bg-[#dbe6f4]" />
                    <div className="h-7 rounded-md bg-[#dbe6f4]" />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="rounded-full border border-[#cbd8ea] bg-white/88 px-4 py-2 font-ui text-[12px] font-[700] uppercase tracking-[0.18em] text-[#4b6d9b] shadow-[0_10px_24px_rgba(14,71,142,0.08)]">
                      Placeholder Image
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex max-w-[560px] flex-col justify-center self-center">
            <h2 className="font-ui text-[34px] font-[800] leading-[1.02] tracking-[-0.05em] text-[#21191b] md:text-[42px]">
              Why Choose This Course?
            </h2>
            <p className="mt-5 font-ui text-[24px] font-[700] leading-[1.35] tracking-[-0.04em] text-[#0e478e] md:text-[30px]">
              Learn with IIM&apos;s Strategic Depth, Lead with Global Impact.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {whyChooseDisplayItems.map((item) => (
            <article
              key={item.title}
              className="rounded-[24px] border border-[#d3d8df] bg-white px-5 py-5 shadow-[0_14px_34px_rgba(25,23,20,0.05)] md:px-6 md:py-6"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0e478e] text-[16px] font-[900] text-white">
                  ✓
                </div>
                <h3 className="font-ui text-[16px] font-[700] tracking-[-0.03em] text-[#2b2628] md:text-[18px]">
                  {item.title}
                </h3>
              </div>
              <p className="mt-10 font-ui text-[15px] leading-[1.7] text-[#4f494b] md:text-[16px]">
                {item.description}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-10 text-center font-ui text-[16px] font-[700] italic tracking-[-0.03em] text-[#4b596f]">
          Certificate eligibility: minimum 70% overall attendance and qualifying
          evaluation performance.
        </p>
      </div>
    </section>
  );
}
