import Image from "next/image";
import { instructors } from "../landing-page-data";

function getDicebearUrl(seed: string) {
  return `https://api.dicebear.com/9.x/personas/svg?seed=${encodeURIComponent(seed)}&backgroundColor=d1d4f9,b6e3f4,c0aede&eyes=variant01,variant02,variant03&mouth=variant01,variant12`;
}

export function InstructorsSection() {
  return (
    <section
      id="instructors"
      className="mx-auto w-full max-w-[1240px] px-4 py-16 md:px-6 md:py-24"
    >
      <h2 className="text-center font-ui text-[34px] font-[800] leading-[1.04] tracking-[-0.05em] text-[#21191b] md:text-[48px]">
        Instructors &amp; Industry Experts
      </h2>

      <div className="mx-auto mt-12 grid max-w-[790px] gap-6 lg:grid-cols-2">
        {instructors.map((person, index) => (
          <article
            key={person.name}
            className="rounded-[30px] border border-[#d9dde4] bg-white p-6 shadow-[0_14px_34px_rgba(20,18,16,0.06)]"
          >
            <div className="flex items-start gap-5">
              <div className="h-[118px] w-[118px] overflow-hidden rounded-[22px] border border-[#d9dde4] bg-[linear-gradient(180deg,#eff6ff_0%,#dcecff_100%)]">
                <Image
                  src={getDicebearUrl(`${person.name}-${index + 1}`)}
                  alt={person.name}
                  width={118}
                  height={118}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="min-w-0 flex-1 pt-1">
                <h3 className="font-ui text-[24px] font-[800] leading-[1.1] tracking-[-0.04em] text-[#0e478e]">
                  {person.name}
                </h3>
                <p className="mt-2 font-ui text-[15px] font-[600] leading-[1.45] text-[#40393b]">
                  {person.role}
                </p>
                <a
                  href={person.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center gap-1 font-ui text-[15px] font-[700] text-[#0e478e]"
                >
                  Profile
                  <span aria-hidden="true">›</span>
                </a>
              </div>
            </div>

            <p className="mt-6 line-clamp-4 font-ui text-[15px] leading-[1.55] text-[#4d4648]">
              {person.summary}
            </p>

            <a
              href={person.link}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 font-ui text-[15px] font-[800] text-[#0e478e]"
            >
              Read More
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
