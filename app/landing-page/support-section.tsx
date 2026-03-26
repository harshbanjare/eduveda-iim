import Image from "next/image";
import { supportItems } from "../landing-page-data";

export function SupportSection() {
  return (
    <section id="how-eduveda-helps" className="bg-white">
      <div className="mx-auto w-full max-w-[1320px] px-4 py-16 md:px-6 md:py-24">
        <div className="overflow-hidden rounded-[40px] bg-[linear-gradient(180deg,#f7fbff_0%,#eef6ff_42%,#e4f0ff_100%)] px-6 py-6 shadow-[0_24px_56px_rgba(20,18,16,0.06)] md:px-10 md:py-10">
          <div className="grid items-start gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
            <div className="relative overflow-hidden rounded-[34px] bg-[linear-gradient(180deg,#0e478e_0%,#1557aa_100%)] p-8 shadow-[0_24px_46px_rgba(14,71,142,0.2)] md:min-h-[520px]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.12),transparent_36%)]" />

              <div className="relative flex h-full min-h-[320px] flex-col items-center justify-center rounded-[28px] border border-white/18 bg-white/8 px-6 py-10 backdrop-blur-[2px]">
                <div className="rounded-[28px] bg-white px-8 py-7 shadow-[0_16px_40px_rgba(0,0,0,0.12)]">
                  <Image
                    src="/eduveda-logo.png"
                    alt="Eduveda logo"
                    width={300}
                    height={92}
                    className="h-auto w-[220px] object-contain md:w-[280px]"
                  />
                </div>
                <p className="mt-8 max-w-[18ch] text-center font-ui text-[24px] font-[700] leading-[1.25] tracking-[-0.04em] text-white md:text-[30px]">
                  Eduveda will help you learn with structure and execute with
                  confidence.
                </p>
              </div>
            </div>

            <div className="py-2">
              <h2 className="font-ui text-[24px] font-[800] leading-[1.02] tracking-[-0.05em] text-[#21191b] md:text-[32px]">
                How will Eduveda Help you?
              </h2>

              <div className="mt-10 space-y-10 md:mt-12 md:space-y-12">
                {supportItems.map((item, index) => (
                  <article
                    key={item.title}
                    className="grid gap-4 md:grid-cols-[80px_1fr] md:gap-6"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-[16px] font-[800] text-[#0e478e] shadow-[0_12px_24px_rgba(14,71,142,0.12)] md:h-18 md:w-18 md:text-[20px]">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-ui text-[16px] font-[800] leading-[1.16] tracking-[-0.04em] text-[#21191b] md:text-[20px]">
                        {item.title}
                      </h3>
                      <p className="mt-4 font-ui text-[14px] leading-[1.55] text-[#3f3a3c] md:text-[16px]">
                        {item.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
