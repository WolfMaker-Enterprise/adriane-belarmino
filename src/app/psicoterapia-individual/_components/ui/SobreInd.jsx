// src/components/SobreInd.jsx
"use client";
import Image from "next/image";

export default function SobreInd() {
  return (
    <section className="w-full">
      <div className="mx-auto px-6 md:px-30 py-14 md:py-20">
        <div className="w-full h-auto lg:w-[1440px] lg:h-[616px] grid items-center gap-10 lg:gap-16 lg:grid-cols-2">
          <div className="relative w-full aspect-[4/3] md:aspect-[5/4]">
            <Image
              src="/images/adriane1.svg"
              fill
              sizes="(max-width: 1024px) 90vw, 520px"
              className="object-contain"
              priority
            />
          </div>

          <div>
            <span className="block text-[16px] tracking-[0.24em] font-bold text-[#CEAF6D]">
              SOBRE O SERVIÇO
            </span>
            <h2 className="mt-3 text-[28px] md:text-[48px] font-medium text-[#404040]">
              Um espaço para reencontrar sua energia e viver com mais
              autenticidade
            </h2>
            <p className="mt-4 text-[16px] sm:text-[20px] leading-7 text-[#7A7A7A] max-w-[58ch]">
              A psicoterapia é um processo de acolhimento e reconexão consigo
              mesmo. No meu trabalho, utilizo a Psicoterapia Breve
              Psicodinâmica, uma abordagem estruturada e com metas claras desde
              o início. As sessões são online, semanais e costumam trazer
              resultados significativos em 16 a 20 encontros.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
