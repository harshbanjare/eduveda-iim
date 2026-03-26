import Image from "next/image";
import { marketMetrics } from "../landing-page-data";

export function AboutProgrammeSection() {
  return (
    <section
      id="about-programme"
      className="bg-[linear-gradient(180deg,#ffffff_0%,#f6fbff_16%,#e8f4ff_72%,#dcedff_100%)]"
    >
      <div className="mx-auto w-full max-w-[1320px] px-4 py-16 md:px-6 md:py-24">
        <div className="grid gap-8 lg:grid-cols-[0.98fr_1.02fr]">
          <div className="relative min-h-[360px] overflow-hidden rounded-[34px] shadow-[0_24px_56px_rgba(20,18,16,0.08)] md:min-h-[540px]">
            <Image
              src="/future-assets/future-digital-marketing.webp"
              alt="Future of digital marketing with applied AI"
              fill
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,17,40,0.04)_0%,rgba(7,17,40,0.16)_42%,rgba(12,18,39,0.88)_100%)]" />
            <div className="absolute inset-x-8 bottom-8">
              <h2 className="max-w-[13ch] font-ui text-[34px] font-[800] leading-[1.02] tracking-[-0.05em] text-white md:text-[54px]">
                The Future Of Digital Marketing with Applied AI is Here
              </h2>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-rows-[auto_1fr]">
            {marketMetrics.map((item) => (
              <article
                key={item.value}
                className="rounded-[28px] border border-[#d9dde4] bg-white p-8 shadow-[0_18px_42px_rgba(20,18,16,0.06)]"
              >
                <div className="font-ui text-[36px] font-[800] leading-[0.98] tracking-[-0.05em] text-[#0e478e] md:text-[60px]">
                  {item.value}
                  <br />
                  <span className="text-[#0e478e]">Billion</span>
                </div>
                <p className="mt-6 font-ui text-[17px] leading-[1.55] text-[#4a4547] md:text-[18px]">
                  {item.description}
                </p>
                <div className="mt-8 font-ui text-[15px] font-[600] italic text-[#5f585b]">
                  {item.source}
                </div>
              </article>
            ))}

            <blockquote className="rounded-[30px] border border-[#d9dde4] bg-white p-8 shadow-[0_18px_42px_rgba(20,18,16,0.06)] md:col-span-2">
              <div className="font-ui text-[88px] leading-none text-[#d7dbe2]">
                “
              </div>
              <p className="-mt-3 max-w-[28ch] font-ui text-[28px] italic leading-[1.42] tracking-[-0.03em] text-[#425169] md:text-[40px]">
                Digital marketing plus AI fluency will define the future of business growth.
              </p>
              <footer className="mt-8 flex items-center gap-3">
                <Image
                  src="/future-assets/quote-avatar.png"
                  alt="Industry expert avatar"
                  width={46}
                  height={46}
                  className="h-[46px] w-[46px] rounded-full border-2 border-[#0e478e] bg-white object-cover"
                />
                <div className="font-ui text-[16px] leading-[1.4] text-[#4d4b57] md:text-[17px]">
                  <span className="font-[800] text-[#23314d]">Industry Expert</span>, Growth &amp; Digital Marketing
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
