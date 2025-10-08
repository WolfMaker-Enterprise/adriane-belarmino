// src/components/ServicosHome.jsx
"use client";
import Image from "next/image";
import Link from "next/link";

function ServiceCard({ href = "#", title, img }) {
  return (
    <Link href={href} className="flex-1">
      <div className="relative w-full aspect-[314/481]">
        <Image
          src={img}
          alt={title}
          fill
          sizes="(max-width:1024px) 50vw, 420px"
          className="object-cover rounded-2xl"
          priority
        />
      </div>
      <div className="px-4 py-3 flex justify-center items-center">
        <p className="text-[16px] sm:text-[17px] font-medium text-[#2F2F2F] text-center">
          {title}
        </p>
      </div>
    </Link>
  );
}

export default function ServicosHome() {
  return (
    <section className="w-full ">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16 xl:px-24 py-14 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] items-center">
          <div>
            <span className="block text-[16px] tracking-[0.24em] uppercase font-semibold text-[#CEAF6D]">
              Serviços
            </span>
            <h2 className="mt-2 text-[28px] sm:text-[36px] lg:text-[48px] font-semibold text-[#404040]">
              Conheça os serviços
            </h2>
          </div>

          <div className="flex gap-5 lg:gap-8 ">
            <ServiceCard
              href="/psicoterapia-individual"
              title="Psicoterapia Individual"
              img="/images/adriane7.png"
            />
            <ServiceCard
              href="/psicologia-organizacional"
              title="Psicologia Organizacional"
              img="/images/adriane8.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
