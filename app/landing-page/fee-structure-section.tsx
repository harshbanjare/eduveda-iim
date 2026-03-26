import { feeOptions } from "../landing-page-data";

const feeRows = [
  {
    label: "Registration Fee",
    note: "(non-refundable)",
    getValue: (index: number) => feeOptions[index].registrationFee,
  },
  {
    label: "Program Fee",
    note: "(non-refundable)",
    getValue: (index: number) => feeOptions[index].programFee,
  },
  {
    label: "Total Fees",
    note: "",
    getValue: (index: number) => feeOptions[index].totalFee,
  },
];

export function FeeStructureSection() {
  return (
    <section id="fee-structure" className="bg-white">
      <div className="mx-auto w-full max-w-[1280px] px-4 py-16 md:px-6 md:py-24">
        <h2 className="text-center font-ui text-[34px] font-[800] leading-[1.04] tracking-[-0.05em] text-[#21191b] md:text-[48px]">
          Fee Structure
        </h2>

        <div className="mx-auto mt-10 rounded-[36px] border border-[#d9dde4] bg-white p-5 shadow-[0_22px_50px_rgba(20,18,16,0.06)] md:mt-12 md:p-10">
          <div className="rounded-[24px] border border-[#dfe4eb] bg-white shadow-[0_14px_32px_rgba(20,18,16,0.04)]">
            <div className="grid items-center md:grid-cols-[1fr_0.55fr]">
              <div className="px-6 py-5 md:px-8">
                <div className="font-ui text-[24px] font-[800] leading-none tracking-[-0.04em] text-[#21191b] md:text-[28px]">
                  Application Fee
                </div>
                <div className="mt-2 font-ui text-[15px] font-[600] text-[#0e478e] md:text-[16px]">
                  (Non Refundable)
                </div>
              </div>
              <div className="border-t border-[#e3e7ee] px-6 py-5 text-center md:border-l md:border-t-0 md:px-8">
                <div className="font-ui text-[24px] font-[800] tracking-[-0.04em] text-[#21191b] md:text-[28px]">
                  <span className="mr-3 text-[#4b5667] line-through decoration-[3px] decoration-[#e53935]">
                    ₹500
                  </span>
                  <span>₹100</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1.45fr] lg:gap-10">
            <div className="hidden lg:block">
              <div className="pt-[150px]">
                {feeRows.map((row, index) => (
                  <div
                    key={row.label}
                    className={`${index !== 0 ? "border-t border-[#dfe4eb]" : ""} py-12`}
                  >
                    <div className="font-ui text-[22px] font-[800] tracking-[-0.04em] text-[#21191b]">
                      {row.label}
                    </div>
                    {row.note ? (
                      <div className="mt-2 font-ui text-[15px] font-[600] text-[#0e478e]">
                        {row.note}
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {feeOptions.map((option, optionIndex) => (
                <article
                  key={option.title}
                  className="overflow-hidden rounded-[30px] bg-[linear-gradient(180deg,#f7fbff_0%,#eff7ff_36%,#e4f0ff_100%)] p-5 shadow-[0_16px_36px_rgba(20,18,16,0.04)]"
                >
                  <div className="rounded-[24px] bg-white/85 px-6 py-6 shadow-[inset_0_0_0_1px_rgba(223,228,235,0.9)]">
                    <div className="font-ui text-[16px] font-[700] text-[#0e478e]">
                      Option {optionIndex + 1}
                    </div>
                    <div className="mt-1 font-ui text-[26px] font-[800] leading-[1.08] tracking-[-0.04em] text-[#21191b]">
                      {option.title}
                      {option.title === "EMI" ? (
                        <span className="ml-2 text-[15px] font-[700] tracking-normal text-[#332d2f] md:text-[16px]">
                          (Through Our NBFC Partners)
                        </span>
                      ) : null}
                    </div>
                  </div>

                  <div className="lg:hidden">
                    {feeRows.map((row, index) => (
                      <div
                        key={row.label}
                        className={`${index !== 0 ? "border-t border-[#d3ddea]" : ""} px-2 py-6`}
                      >
                        <div className="font-ui text-[16px] font-[800] tracking-[-0.03em] text-[#21191b]">
                          {row.label}
                        </div>
                        {row.note ? (
                          <div className="mt-1 font-ui text-[14px] font-[600] text-[#0e478e]">
                            {row.note}
                          </div>
                        ) : null}
                        <div
                          className={`mt-4 font-ui text-[24px] font-[800] tracking-[-0.04em] ${
                            row.label === "Total Fees"
                              ? "text-[#0e478e]"
                              : "text-[#21191b]"
                          }`}
                        >
                          {row.getValue(optionIndex)}
                        </div>
                        {row.label === "Total Fees" ? (
                          <div className="mt-1 font-ui text-[14px] font-[700] text-[#6b6567]">
                            {option.note}
                          </div>
                        ) : null}
                      </div>
                    ))}
                  </div>

                  <div className="hidden lg:block">
                    {feeRows.map((row, index) => (
                      <div
                        key={row.label}
                        className={`${index !== 0 ? "border-t border-[#d3ddea]" : ""} px-2 py-12`}
                      >
                        <div
                          className={`font-ui text-[24px] font-[800] tracking-[-0.04em] ${
                            row.label === "Total Fees"
                              ? "text-[#0e478e]"
                              : "text-[#21191b]"
                          }`}
                        >
                          {row.getValue(optionIndex)}
                        </div>
                        {row.label === "Total Fees" ? (
                          <div className="mt-2 font-ui text-[14px] font-[700] text-[#6b6567]">
                            {option.note}
                          </div>
                        ) : null}
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-6 text-center font-ui text-[15px] font-[700] italic tracking-[-0.03em] text-[#4c4950] md:text-[16px]">
          *18% GST extra, as applicable
        </p>
      </div>
    </section>
  );
}
