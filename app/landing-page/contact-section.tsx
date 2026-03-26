import { SectionHeader } from "./shared";

export function ContactSection() {
  return (
    <section
      id="contact-us"
      className="border-t border-[#efe5dd] bg-[#fff8f2]"
    >
      <div className="mx-auto w-full max-w-[1240px] px-4 py-16 md:px-6 md:py-24">
        <SectionHeader title="Contact us" align="center" />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <article className="rounded-[28px] border border-[#eadfd6] bg-white p-7 text-center shadow-[0_18px_36px_rgba(20,18,14,0.05)]">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0e478e] text-[22px] text-white">
              W
            </div>
            <h3 className="mt-5 text-[24px] font-[700] text-[#21191b]">
              WhatsApp us
            </h3>
            <p className="mt-3 text-[16px] leading-7 text-[#5f5658]">
              For programme queries, connect on WhatsApp at{" "}
              <a
                href="https://api.whatsapp.com/send?phone=918792974750"
                target="_blank"
                rel="noreferrer"
                className="font-[700] text-[#0e478e] underline"
              >
                +91 87929 74750
              </a>
              .
            </p>
          </article>
          <article className="rounded-[28px] border border-[#eadfd6] bg-white p-7 text-center shadow-[0_18px_36px_rgba(20,18,14,0.05)]">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0e478e] text-[22px] text-white">
              @
            </div>
            <h3 className="mt-5 text-[24px] font-[700] text-[#21191b]">
              Email us
            </h3>
            <p className="mt-3 text-[16px] leading-7 text-[#5f5658]">
              Reach the admissions team at{" "}
              <a
                href="mailto:admissions@eduveda.example"
                className="font-[700] text-[#0e478e] underline"
              >
                admissions@eduveda.example
              </a>
              .
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
