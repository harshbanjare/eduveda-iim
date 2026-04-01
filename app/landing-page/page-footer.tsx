import { footerLinks } from "../landing-page-data";

type MobileStickyCtaProps = {
  hidden: boolean;
  href: string;
};

export function PageFooter() {
  return (
    <footer className="bg-[#efefef]">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col gap-4 px-4 py-8 text-[13px] font-[600] text-[#777173] md:flex-row md:items-center md:justify-between md:px-6">
        <p>Copyright © Eduveda. All rights reserved.</p>
        <div className="flex flex-wrap items-center gap-3">
          {footerLinks.map((item, index) => (
            <span key={item.label} className="inline-flex items-center gap-3">
              <a href={item.href} className="underline">
                {item.label}
              </a>
              {index !== footerLinks.length - 1 ? <span>&amp;</span> : null}
            </span>
          ))}
        </div>
      </div>
      <div className="mx-auto w-full max-w-[1240px] px-4 pb-10 text-[13px] font-[600] leading-6 text-[#777173] md:px-6">
        CWS Office, 3rd Floor, Control Works Space, 146-C, Hastsal, Uttam
        Nagar, New Delhi, 110059
      </div>
    </footer>
  );
}

export function MobileStickyCta({ hidden, href }: MobileStickyCtaProps) {
  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-[#e8ddd5] bg-white/95 px-4 py-3 shadow-[0_-8px_20px_rgba(25,20,14,0.08)] backdrop-blur md:hidden ${
        hidden ? "hidden" : "block"
      }`}
    >
      <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-4">
        <div>
          <div className="text-[13px] font-[700] uppercase tracking-[0.14em] text-[#8b7f75]">
            Get started
          </div>
          <div className="text-[14px] font-[700] text-[#21191b]">
            Join the programme
          </div>
        </div>
        <a
          href={href}
          className="inline-flex rounded-full bg-[#0e478e] px-5 py-3 text-[14px] font-[800] uppercase tracking-[0.1em] text-white"
        >
          Register now
        </a>
      </div>
    </div>
  );
}
