import Image from "next/image";
import { instituteHighlights } from "../landing-page-data";

export function AboutInstituteSection() {
  return (
    <section id="about-institute" className="bg-white">
      <div className="mx-auto w-full max-w-[1320px] px-4 py-16 md:px-6 md:py-24">
        <div className="relative">
          <div className="relative min-h-[300px] overflow-hidden rounded-[34px] md:min-h-[420px]">
            <Image
              src="/institute-assets/about-iim-lucknow-campus.jpg"
              alt="About IIM Lucknow campus"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div className="relative mx-auto -mt-10 max-w-[1160px] rounded-[34px] border border-[#d9dde4] bg-white px-6 py-6 shadow-[0_24px_56px_rgba(20,18,16,0.08)] md:-mt-14 md:px-12 md:py-8">
            <h2 className="text-center font-ui text-[28px] font-[800] leading-[1.04] tracking-[-0.05em] text-[#21191b] md:text-[42px]">
              About IIM Lucknow
            </h2>

            <p className="mx-auto mt-5 max-w-[65ch] text-center font-ui text-[15px] leading-[1.6] text-[#3f3a3c] md:text-[16px]">
              The Indian Institute of Management Lucknow is a nationally recognised
              management school known for rigorous academics, applied research,
              leadership development, and strong industry engagement. Its learning
              ecosystem emphasizes multidisciplinary thinking, innovation, and
              entrepreneurial capability for future-ready business leadership.
            </p>

            <div className="mt-8 grid gap-4 md:mt-10 md:grid-cols-2 md:gap-5">
              {instituteHighlights.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[24px] bg-[linear-gradient(180deg,#f7fbff_0%,#eef6ff_100%)] px-6 py-6 text-center"
                >
                  <h3 className="font-ui text-[18px] font-[800] leading-[1.3] tracking-[-0.03em] text-[#21191b] md:text-[20px]">
                    {item.title}
                  </h3>
                  <p className="mx-auto mt-4 max-w-[30ch] font-ui text-[14px] leading-[1.5] text-[#454042] md:text-[15px]">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
