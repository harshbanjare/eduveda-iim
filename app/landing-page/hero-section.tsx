import { heroStats } from "../landing-page-data";

function VideoIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-7 w-7 fill-current"
    >
      <path d="M3.5 6.75A2.25 2.25 0 0 1 5.75 4.5h8.5a2.25 2.25 0 0 1 2.25 2.25v1.57l3.47-2.15A1.25 1.25 0 0 1 22 7.23v9.54a1.25 1.25 0 0 1-2.03 1.06l-3.47-2.15v1.57a2.25 2.25 0 0 1-2.25 2.25h-8.5A2.25 2.25 0 0 1 3.5 17.25v-10.5Z" />
    </svg>
  );
}

function SparkIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-7 w-7 fill-current"
    >
      <path d="m12 2.5 1.74 5.26L19 9.5l-5.26 1.74L12 16.5l-1.74-5.26L5 9.5l5.26-1.74L12 2.5Zm7.5 11 1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3Zm-15 0 1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3Z" />
    </svg>
  );
}

function BadgeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-7 w-7 fill-current"
    >
      <path d="M12 2.5a5 5 0 0 1 4.66 3.18 4.5 4.5 0 0 1 2.83 6.1 4.5 4.5 0 0 1-1.2 5.55l.93 3.68a.9.9 0 0 1-1.33.98L12 18.66l-5.9 3.33a.9.9 0 0 1-1.32-.98l.92-3.68a4.5 4.5 0 0 1-1.19-5.55 4.5 4.5 0 0 1 2.83-6.1A5 5 0 0 1 12 2.5Zm2.67 7.34L10.9 13.6l-1.57-1.58a.9.9 0 1 0-1.27 1.28l2.2 2.19a.9.9 0 0 0 1.27 0l4.42-4.39a.9.9 0 0 0-1.28-1.27Z" />
    </svg>
  );
}

export function HeroSection() {
  return (
    <section
      id="hero-section"
      className="relative bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_34%,#edf4ff_68%,#d8e6fb_100%)]"
    >
      <div className="mx-auto w-full max-w-[1360px] px-4 pb-0 pt-5 md:px-6 md:pt-6">
        <div className="grid gap-6 xl:grid-cols-[1.02fr_0.98fr] xl:items-start">
          <div className="flex flex-col justify-center pt-2 md:pt-4 xl:pl-2">
            <h1 className="font-ui text-[28px] font-[800] leading-[0.97] tracking-[-0.048em] text-[#22191d] sm:text-[36px] md:text-[42px] xl:text-[50px]">
              Certification Program in Digital Marketing with Applied AI
            </h1>

            <div className="mt-5 space-y-2.5 md:mt-6">
              {[
                {
                  icon: <VideoIcon />,
                  text: "Learn from IIM Ranchi's expert faculty",
                },
                {
                  icon: <SparkIcon />,
                  text: "Gain hands-on, real-world experience",
                },
                {
                  icon: <BadgeIcon />,
                  text: "Get career-ready with guided mentorship",
                },
              ].map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-3 text-[#3f3a3b]"
                >
                  <div className="scale-[0.82] text-[#0e478e] md:scale-[0.88]">
                    {item.icon}
                  </div>
                  <p className="font-ui text-[15px] font-[600] leading-[1.3] tracking-[-0.03em] md:text-[17px]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-4 md:mt-8">
              <div className="flex -space-x-3">
                {[
                  "from-[#375f98] to-[#8ab2e8]",
                  "from-[#6c4a3f] to-[#e1b6a2]",
                  "from-[#283457] to-[#9eaee0]",
                  "from-[#653d44] to-[#f0a4ba]",
                ].map((gradient, index) => (
                  <div
                    key={gradient}
                    className={`h-[42px] w-[42px] rounded-full border-[3px] border-white bg-gradient-to-br ${gradient} shadow-[0_8px_20px_rgba(0,0,0,0.14)] md:h-[48px] md:w-[48px] ${index === 0 ? "" : ""}`}
                  />
                ))}
              </div>
              <p className="font-ui text-[16px] font-[700] leading-none tracking-[-0.03em] text-[#131012] md:text-[17px]">
                1.2K+ students have already registered
              </p>
            </div>
          </div>

          <div
            id="hero-form-anchor"
            className="rounded-[34px] border border-[#d4d0d2] bg-white/92 p-5 shadow-[0_20px_48px_rgba(37,42,62,0.08)] backdrop-blur-[2px] md:p-5 xl:mr-4 xl:mt-0 xl:max-w-[630px] xl:justify-self-end xl:p-6"
          >
            <h2 className="font-ui text-[21px] font-[800] leading-[1.12] tracking-[-0.03em] text-[#161114] md:text-[24px]">
              Enter the following details to continue
            </h2>

            <form className="mt-5 space-y-4 md:mt-6">
              <label className="block">
                <span className="font-ui text-[14px] font-[700] leading-none text-[#231d20] md:text-[15px]">
                  Full Name <span className="text-[#ff4b55]">*</span>
                </span>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="mt-2.5 h-[54px] w-full rounded-[14px] border border-[#cdced2] bg-white px-4.5 font-ui text-[16px] font-[500] text-[#21191b] outline-none placeholder:text-[#b6b8bd] focus:border-[#0e478e] md:h-[54px] md:text-[16px]"
                />
              </label>
              <label className="block">
                <span className="font-ui text-[14px] font-[700] leading-none text-[#231d20] md:text-[15px]">
                  Email address <span className="text-[#ff4b55]">*</span>
                </span>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="mt-2.5 h-[54px] w-full rounded-[14px] border border-[#cdced2] bg-white px-4.5 font-ui text-[16px] font-[500] text-[#21191b] outline-none placeholder:text-[#b6b8bd] focus:border-[#0e478e] md:h-[54px] md:text-[16px]"
                />
              </label>
              <label className="block">
                <span className="font-ui text-[14px] font-[700] leading-none text-[#231d20] md:text-[15px]">
                  Phone Number <span className="text-[#ff4b55]">*</span>
                </span>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="mt-2.5 h-[54px] w-full rounded-[14px] border border-[#cdced2] bg-white px-4.5 font-ui text-[16px] font-[500] text-[#21191b] outline-none placeholder:text-[#b6b8bd] focus:border-[#0e478e] md:h-[54px] md:text-[16px]"
                />
              </label>
              <fieldset>
                <legend className="font-ui text-[14px] font-[700] leading-none text-[#231d20] md:text-[15px]">
                  What describes you best{" "}
                  <span className="text-[#ff4b55]">*</span>
                </legend>
                <div className="mt-3.5 space-y-3">
                  {["Student", "Working Professional"].map((label) => (
                    <label
                      key={label}
                      className="flex items-center gap-3 font-ui text-[16px] font-[500] tracking-[-0.03em] text-[#231d20] md:text-[16px]"
                    >
                      <span className="h-6 w-6 rounded-full border-[1.5px] border-[#8c8d92]" />
                      <span>{label}</span>
                    </label>
                  ))}
                </div>
              </fieldset>
              <button
                type="button"
                className="mt-2 h-[54px] w-full rounded-[14px] bg-[#0e478e] font-ui text-[16px] font-[800] uppercase tracking-[0.02em] text-white shadow-[0_14px_28px_rgba(14,71,142,0.22)] md:h-[56px] md:text-[17px]"
              >
                Sign up
              </button>
            </form>
          </div>
        </div>

        <div className="relative z-10 mt-6 translate-y-[16%] sm:translate-y-[22%] md:mt-7 md:translate-y-[28%] xl:translate-y-[38%] xl:px-6">
          <div className="rounded-[22px] border border-[#efebea] bg-white px-4 py-4 shadow-[0_18px_42px_rgba(35,26,20,0.08)] md:rounded-[24px] md:px-6 md:py-6">
            <div className="grid grid-cols-2 gap-y-4 md:grid-cols-4 md:gap-0">
              {heroStats.map((item, index) => (
                <div
                  key={item.label}
                  className={`text-center px-3 md:px-6 ${
                    index % 2 === 1 ? "border-l border-[#d8d8d8] md:border-l-0" : ""
                  } ${index > 1 ? "border-t border-[#d8d8d8] pt-4 md:border-t-0 md:pt-0" : ""} ${
                    index !== 0 ? "md:border-l md:border-[#d8d8d8]" : ""
                  }`}
                >
                  <div className="font-ui text-[13px] font-[700] tracking-[-0.03em] text-[#252124] md:text-[15px]">
                    {item.label === "Programme directors"
                      ? "Programme Directors"
                      : item.label === "Course duration"
                        ? "Course Duration"
                        : item.label === "Time commitment"
                          ? "Time Commitment"
                          : "Eligibility"}
                  </div>
                  <div className="mt-2 font-ui text-[15px] font-[800] tracking-[-0.04em] text-[#0e478e] md:text-[17px]">
                    {item.label === "Time commitment"
                      ? "8-10 Hours/week"
                      : item.label === "Eligibility"
                        ? "12th Pass and Above"
                        : item.label === "Programme directors"
                          ? "Prof. Shweta Jha, Prof. Satyam"
                          : "6 months"}
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
