import Image from "next/image";
import { admissionSteps } from "../landing-page-data";

function DocumentIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path
        d="M7 3.75h7l3.25 3.25V18A2.25 2.25 0 0 1 15 20.25H7A2.25 2.25 0 0 1 4.75 18V6A2.25 2.25 0 0 1 7 3.75Z"
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <path
        d="M14 3.75V7h3.25M8.5 12.25h4.75M8.5 15.5h3.25"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path
        d="M7 5.75h10A2.25 2.25 0 0 1 19.25 8v6A2.25 2.25 0 0 1 17 16.25H11.5l-3.75 3v-3H7A2.25 2.25 0 0 1 4.75 14V8A2.25 2.25 0 0 1 7 5.75Z"
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <path
        d="M8.75 10.5h6.5M8.75 13h4.5"
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

const stepIcons = [<DocumentIcon key="doc" />, <ChatIcon key="chat" />, <BookIcon key="book" />];
const stepImages = [
  "/admission-assets/submit-application.webp",
  "/admission-assets/complete-counselling.webp",
  "/admission-assets/join-cohort.webp",
];

export function AdmissionProcessSection() {
  return (
    <section
      id="admission-process"
      className="bg-white"
    >
      <div className="mx-auto w-full max-w-[1240px] px-4 py-16 md:px-6 md:py-24">
        <h2 className="text-center font-ui text-[34px] font-[800] leading-[1.04] tracking-[-0.05em] text-[#21191b] md:text-[48px]">
          Admission Process
        </h2>

        <div className="relative mx-auto mt-10 hidden max-w-[1240px] lg:block">
          <div className="absolute left-[16.666%] right-[16.666%] top-[33px] border-t border-dashed border-[#bfc7d0]" />
          <div className="grid grid-cols-3 gap-6">
            {admissionSteps.map((item, index) => (
              <div key={item.step} className="flex justify-center">
                <div className="relative z-10 flex h-[66px] w-[66px] items-center justify-center rounded-full border-[6px] border-[#d3e1a1] bg-white text-[#0e478e] shadow-[0_12px_24px_rgba(130,148,22,0.12)]">
                  {stepIcons[index]}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {admissionSteps.map((item, index) => (
            <article
              key={item.step}
              className="rounded-[30px] border border-[#d9dde4] bg-white p-6 shadow-[0_18px_40px_rgba(19,15,12,0.05)]"
            >
              <div className="flex items-center gap-3 md:hidden">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#edf4ff] text-[#0e478e]">
                  {stepIcons[index]}
                </div>
                <div className="font-ui text-[13px] font-[800] uppercase tracking-[0.12em] text-[#0e478e]">
                  Step {item.step}
                </div>
              </div>

              <h3 className="mt-5 font-ui text-[24px] font-[800] leading-[1.16] tracking-[-0.04em] text-[#21191b]">
                {item.title}
              </h3>
              <p className="mt-3 font-ui text-[15px] leading-[1.55] text-[#4f4749] md:text-[16px]">
                {item.description}
              </p>

              <div className="mt-7 overflow-hidden rounded-[22px] border border-[#dce4ef] bg-[linear-gradient(180deg,#f7fbff_0%,#e6f1ff_100%)] p-4">
                <div className="relative min-h-[190px] overflow-hidden rounded-[18px] bg-[radial-gradient(circle_at_top_left,_#ffffff_0%,_#eef5ff_48%,_#dbe9ff_100%)]">
                  <Image
                    src={stepImages[index]}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 30vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
