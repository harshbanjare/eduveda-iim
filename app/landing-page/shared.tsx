type PlaceholderVisualProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  className?: string;
};

type SectionHeaderProps = {
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function PlaceholderVisual({
  eyebrow,
  title,
  subtitle,
  className = "",
}: PlaceholderVisualProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-[28px] border border-white/60 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.82),_rgba(237,244,255,0.92)_38%,_rgba(185,211,247,0.9)_100%)] p-6 shadow-[0_24px_60px_rgba(14,71,142,0.14)] ${className}`}
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.55),transparent_40%,rgba(14,71,142,0.14)_100%)]" />
      <div className="relative flex h-full min-h-[220px] flex-col justify-between rounded-[22px] border border-[#ffffffaa] bg-white/50 p-5 backdrop-blur-[2px]">
        <div className="text-[11px] font-[700] uppercase tracking-[0.24em] text-[#0e478e]">
          {eyebrow}
        </div>
        <div className="space-y-2">
          <div className="text-2xl font-[700] leading-tight text-[#1f1b1c]">
            {title}
          </div>
          <p className="max-w-[32ch] text-sm leading-6 text-[#5d5658]">
            {subtitle}
          </p>
        </div>
        <div className="flex items-end gap-3">
          <div className="h-18 w-18 rounded-[22px] bg-[#0e478e]" />
          <div className="grid flex-1 grid-cols-3 gap-2">
            <div className="h-9 rounded-full bg-[#d9e8ff]" />
            <div className="h-9 rounded-full bg-[#edf4ff]" />
            <div className="h-9 rounded-full bg-[#b9d3f7]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function SectionHeader({
  title,
  description,
  align = "left",
}: SectionHeaderProps) {
  return (
    <div
      className={
        align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"
      }
    >
      <h2 className="font-heading text-[30px] leading-[1.12] text-[#21191b] md:text-[46px]">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-[16px] leading-7 text-[#5d5658] md:text-[18px]">
          {description}
        </p>
      ) : null}
    </div>
  );
}
