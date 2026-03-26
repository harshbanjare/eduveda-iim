import { compareRows } from "../landing-page-data";

function ThumbsUpIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path
        d="M10.25 9.25 13 4.75c.34-.58.98-.95 1.65-.95h.1c.69 0 1.25.56 1.25 1.25v3.7h2.1A2.4 2.4 0 0 1 20.47 11l-.8 5.45a2.4 2.4 0 0 1-2.37 2.05H10.5a2.75 2.75 0 0 1-2.75-2.75v-4.12c0-.5.14-.99.4-1.43l2.1-.95Z"
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <path
        d="M4.25 10h2.5v8.5h-2.5A1.25 1.25 0 0 1 3 17.25v-6A1.25 1.25 0 0 1 4.25 10Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function ThumbsDownIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path
        d="M13.75 14.75 11 19.25c-.34.58-.98.95-1.65.95h-.1c-.69 0-1.25-.56-1.25-1.25v-3.7H5.9A2.4 2.4 0 0 1 3.53 13l.8-5.45A2.4 2.4 0 0 1 6.7 5.5h6.8a2.75 2.75 0 0 1 2.75 2.75v4.12c0 .5-.14.99-.4 1.43l-2.1.95Z"
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <path
        d="M19.75 14h-2.5V5.5h2.5A1.25 1.25 0 0 1 21 6.75v6A1.25 1.25 0 0 1 19.75 14Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}

export function CompareSection() {
  return (
    <section
      id="compare-programme"
      className="bg-[linear-gradient(180deg,#dcedff_0%,#e8f4ff_28%,#f6fbff_68%,#ffffff_100%)]"
    >
      <div className="mx-auto w-full max-w-[1320px] px-4 py-16 md:px-6 md:py-24">
        <h2 className="text-center font-ui text-[34px] font-[800] leading-[1.04] tracking-[-0.05em] text-[#21191b] md:text-[48px]">
          How is this course different from others?
        </h2>

        <div className="mx-auto mt-10 overflow-hidden rounded-[32px] border border-[#d9dde4] bg-white p-6 shadow-[0_22px_50px_rgba(20,18,16,0.06)] md:mt-12 md:p-10">
          <div className="hidden md:grid md:grid-cols-[1.1fr_1fr_1fr] md:gap-8">
            <div className="rounded-full bg-[linear-gradient(180deg,#f2f9ff_0%,#ddebff_100%)] px-6 py-3 font-ui text-[18px] font-[800] tracking-[-0.03em] text-[#21191b]">
              Features
            </div>
            <div className="rounded-full bg-[linear-gradient(180deg,#edf7ff_0%,#d5e8ff_100%)] px-6 py-3 text-center font-ui text-[18px] font-[800] tracking-[-0.03em] text-[#0e478e]">
              This Programme
            </div>
            <div className="rounded-full bg-[linear-gradient(180deg,#edf7ff_0%,#d5e8ff_100%)] px-6 py-3 text-center font-ui text-[18px] font-[800] tracking-[-0.03em] text-[#21191b]">
              Other programmes
            </div>
          </div>

          <div className="mt-8 space-y-0">
            {compareRows.map((row, index) => (
              <div
                key={row.title}
                className={`grid gap-6 py-7 md:grid-cols-[1.1fr_1fr_1fr] md:gap-8 ${
                  index !== compareRows.length - 1 ? "border-b border-[#dfe5ee]" : ""
                }`}
              >
                <div>
                  <div className="md:hidden rounded-full bg-[linear-gradient(180deg,#f2f9ff_0%,#ddebff_100%)] px-5 py-2 font-ui text-[15px] font-[800] text-[#21191b]">
                    Feature
                  </div>
                  <h3 className="mt-4 font-ui text-[20px] font-[800] leading-[1.25] tracking-[-0.03em] text-[#21191b] md:mt-0 md:text-[22px]">
                    {row.title}
                  </h3>
                </div>

                <div className="flex gap-4">
                  <div className="mt-1 flex h-9 w-9 flex-none items-center justify-center rounded-full bg-[#e7f6ef] text-[#0e478e]">
                    <ThumbsUpIcon />
                  </div>
                  <p className="font-ui text-[16px] leading-[1.55] text-[#454042] md:text-[17px]">
                    {row.thisProgramme}
                  </p>
                </div>

                <div className="flex gap-4">
                  <div className="mt-1 flex h-9 w-9 flex-none items-center justify-center rounded-full bg-[#fff1f1] text-[#ff4b55]">
                    <ThumbsDownIcon />
                  </div>
                  <p className="font-ui text-[16px] leading-[1.55] text-[#575153] md:text-[17px]">
                    {row.others}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
