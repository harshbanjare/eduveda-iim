import Image from "next/image";

export function PageHeader() {
  return (
    <header className="border-b border-[#ebe4dc] bg-[#fffdfa]">
      <div className="mx-auto flex w-full max-w-[1240px] items-center px-4 py-4 md:px-6">
        <a href="#hero-section" className="inline-flex items-center">
          <Image
            src="/eduveda-logo.png"
            alt="Eduveda"
            width={180}
            height={48}
            priority
            className="h-auto w-[140px] md:w-[180px]"
          />
        </a>
      </div>
    </header>
  );
}
