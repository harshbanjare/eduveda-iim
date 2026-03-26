import Image from "next/image";

const partners = [
  {
    src: "/nbfc-partners/anz.png",
    alt: "ANZ company logo",
    width: 92,
    height: 52,
  },
  {
    src: "/nbfc-partners/varthana.png",
    alt: "Varthana company logo",
    width: 124,
    height: 46,
  },
  {
    src: "/nbfc-partners/gyandhan.png",
    alt: "GyanDhan company logo",
    width: 92,
    height: 52,
  },
  {
    src: "/nbfc-partners/credit-fair.png",
    alt: "Credit Fair company logo",
    width: 128,
    height: 44,
  },
  {
    src: "/nbfc-partners/propelld.png",
    alt: "Propelld company logo",
    width: 164,
    height: 44,
  },
  {
    src: "/nbfc-partners/bajaj-finserv.png",
    alt: "Bajaj Finserv company logo",
    width: 164,
    height: 54,
  },
  {
    src: "/nbfc-partners/northern-arc.png",
    alt: "Northern Arc company logo",
    width: 112,
    height: 56,
  },
];

const marqueePartners = [...partners, ...partners];

export function NbfcPartnersSection() {
  return (
    <section className="bg-white pb-16 pt-4 md:pb-24 md:pt-6">
      <div className="mx-auto w-full max-w-[1440px] overflow-hidden">
        <h2 className="text-center font-ui text-[34px] font-[800] leading-[1.04] tracking-[-0.05em] text-[#21191b] md:text-[48px]">
          Our NBFC Partners
        </h2>

        <div className="relative mt-10 overflow-hidden md:mt-12">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-[linear-gradient(90deg,#ffffff_0%,rgba(255,255,255,0)_100%)] md:w-36" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-[linear-gradient(270deg,#ffffff_0%,rgba(255,255,255,0)_100%)] md:w-36" />

          <div className="partner-marquee-track flex w-max items-center gap-14 md:gap-20">
            {marqueePartners.map((partner, index) => (
              <div
                key={`${partner.src}-${index}`}
                className="flex min-h-[74px] min-w-[110px] items-center justify-center"
              >
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  width={partner.width}
                  height={partner.height}
                  className="h-auto w-auto max-h-[56px] object-contain opacity-95"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
