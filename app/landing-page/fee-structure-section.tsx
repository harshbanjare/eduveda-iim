const plans = [
  {
    title: "Self Paced",
    price: "Rs 9,999",
    duration: "3 months",
  },
  {
    title: "Mentor Led",
    price: "Rs 24,999",
    duration: "6 months",
  },
] as const;

const comparisonRows = [
  {
    label: "Duration",
    selfPaced: "3 months",
    mentorLed: "6 months",
  },
  {
    label: "Training",
    selfPaced: "Recorded lectures",
    mentorLed: "Live lectures in cohort format",
  },
  {
    label: "Doubt Sessions",
    selfPaced: "Not included",
    mentorLed: "Live doubt clearing sessions",
  },
  {
    label: "Certifications",
    selfPaced: "AWS Certification",
    mentorLed: "AWS Certificate + IIM Lucknow Certificate",
  },
  {
    label: "Level",
    selfPaced: "Basic to intermediate",
    mentorLed: "Basic to advanced",
  },
  {
    label: "Projects",
    selfPaced: "2 projects: 1 major, 1 minor",
    mentorLed: "3 projects: 2 major, 1 minor",
  },
  {
    label: "AI Tools Access",
    selfPaced: "Not included",
    mentorLed: "Free tools access",
  },
  {
    label: "Placement Assistance",
    selfPaced: "Not included",
    mentorLed: "Placement assistance, study material, and mock test series",
  },
  {
    label: "Mentorship",
    selfPaced: "Not included",
    mentorLed: "One-to-one mentorship with IIM faculty",
  },
  {
    label: "Bonus",
    selfPaced: "Not included",
    mentorLed: "1-hour meeting with company founder and director",
  },
] as const;

export function FeeStructureSection() {
  return (
    <section id="fee-structure" className="bg-white">
      <div className="mx-auto w-full max-w-[1280px] px-4 py-16 md:px-6 md:py-24">
        <h2 className="text-center font-ui text-[34px] font-[800] leading-[1.04] tracking-[-0.05em] text-[#21191b] md:text-[48px]">
          Fee Structure
        </h2>

        <div className="mx-auto mt-10 rounded-[36px] border border-[#d9dde4] bg-[linear-gradient(180deg,#ffffff_0%,#f7fbff_28%,#edf5ff_100%)] p-5 shadow-[0_22px_50px_rgba(20,18,16,0.06)] md:mt-12 md:p-10">
          <div className="grid gap-6 md:grid-cols-2">
            {plans.map((plan, index) => (
              <article
                key={plan.title}
                className={`rounded-[30px] border p-6 shadow-[0_16px_36px_rgba(20,18,16,0.04)] md:p-8 ${
                  index === 1
                    ? "border-[#bcd2ef] bg-[linear-gradient(180deg,#f7fbff_0%,#e9f3ff_100%)]"
                    : "border-[#dde3ea] bg-white"
                }`}
              >
                <div className="font-ui text-[15px] font-[700] uppercase tracking-[0.12em] text-[#0e478e]">
                  Plan {index + 1}
                </div>
                <div className="mt-3 font-ui text-[30px] font-[800] leading-[1.02] tracking-[-0.05em] text-[#21191b] md:text-[36px]">
                  {plan.title}
                </div>
                <div className="mt-5 font-ui text-[38px] font-[800] leading-none tracking-[-0.05em] text-[#0e478e] md:text-[46px]">
                  {plan.price}
                </div>
                <div className="mt-5 inline-flex rounded-full bg-[#eef5ff] px-4 py-2 font-ui text-[14px] font-[700] text-[#244a7d]">
                  Duration: {plan.duration}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 overflow-hidden rounded-[30px] border border-[#dbe3ec] bg-white shadow-[0_16px_36px_rgba(20,18,16,0.04)]">
            <div className="hidden grid-cols-[0.9fr_1fr_1fr] bg-[#f7fbff] md:grid">
              <div className="border-r border-[#dbe3ec] px-6 py-5 font-ui text-[16px] font-[800] text-[#21191b]">
                Modules
              </div>
              <div className="border-r border-[#dbe3ec] px-6 py-5 font-ui text-[16px] font-[800] text-[#21191b]">
                Self Paced
              </div>
              <div className="px-6 py-5 font-ui text-[16px] font-[800] text-[#21191b]">
                Mentor Led
              </div>
            </div>

            <div className="md:hidden">
              {comparisonRows.map((row, index) => (
                <article
                  key={row.label}
                  className={`${index !== 0 ? "border-t border-[#e4e9f0]" : ""} px-5 py-5`}
                >
                  <div className="font-ui text-[17px] font-[800] tracking-[-0.03em] text-[#21191b]">
                    {row.label}
                  </div>
                  <div className="mt-4 rounded-[18px] bg-[#f7fbff] px-4 py-4">
                    <div className="font-ui text-[13px] font-[800] uppercase tracking-[0.08em] text-[#0e478e]">
                      Self Paced
                    </div>
                    <div className="mt-2 font-ui text-[15px] leading-[1.55] text-[#4a4547]">
                      {row.selfPaced}
                    </div>
                  </div>
                  <div className="mt-3 rounded-[18px] bg-[#edf5ff] px-4 py-4">
                    <div className="font-ui text-[13px] font-[800] uppercase tracking-[0.08em] text-[#0e478e]">
                      Mentor Led
                    </div>
                    <div className="mt-2 font-ui text-[15px] leading-[1.55] text-[#4a4547]">
                      {row.mentorLed}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="hidden md:block">
              {comparisonRows.map((row, index) => (
                <div
                  key={row.label}
                  className={`grid grid-cols-[0.9fr_1fr_1fr] ${
                    index !== 0 ? "border-t border-[#e4e9f0]" : ""
                  }`}
                >
                  <div className="border-r border-[#e4e9f0] px-6 py-6 font-ui text-[17px] font-[800] tracking-[-0.03em] text-[#21191b]">
                    {row.label}
                  </div>
                  <div className="border-r border-[#e4e9f0] px-6 py-6 font-ui text-[15px] leading-[1.6] text-[#4a4547]">
                    {row.selfPaced}
                  </div>
                  <div className="px-6 py-6 font-ui text-[15px] leading-[1.6] text-[#4a4547]">
                    {row.mentorLed}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
