// src/components/Diferenciais.jsx
"use client";
import Image from "next/image";
import { CheckCircle } from "@phosphor-icons/react";

export default function Diferenciais() {
  const items = [
    {
      title: "Experiência real",
      text: "Mais de 20 anos de vivência no meio empresarial e, desde 2017, na atuação clínica dedicada, unindo prática, conhecimento técnico e sensibilidade humana.",
    },
    {
      title: "Confiança e eficácia",
      text: "Utilizo metodologias validadas, adaptadas à sua realidade e necessidades.",
    },
    {
      title: "Sem fronteiras",
      text: "Atendimentos 100% online, para você cuidar da saúde mental de onde estiver.",
    },
    {
      title: "Transformação Real",
      text: "Resultados que combinam bem-estar emocional, produtividade inteligente e significado verdadeiro na vida pessoal e profissional.",
    },
  ];

  return (
    <section className="relative w-full bg-white overflow-hidden">
      {/* Marca d’água atrás */}
      <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
        <Image
          src="/images/logobg.svg" // coloque seu SVG em /public/images
          alt=""
          width={500}
          height={500}
          className="object-contain select-none"
        />
      </div>

      <div className="relative z-10 mx-auto px-6 md:px-10 lg:px-16 xl:px-[240px] py-16 lg:py-20">
        <span className="block text-[16px] tracking-[0.24em] uppercase font-bold text-[#C2A66A]">
          Diferenciais
        </span>

        <h2 className="mt-3 text-[30px] sm:text-[38px] lg:text-[48px] leading-tight font-semibold text-[#3E3E3E]">
          Por que escolher{" "}
          <span
            className="
              bg-gradient-to-r from-[#C2A66A] via-[#D7BF7D] to-[#C2A66A]
              bg-clip-text text-transparent
            "
          >
            meu trabalho
          </span>
          ?
        </h2>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-5">
          {items.map((it, i) => (
            <div
              key={i}
              className="
                rounded-4xl border border-[#E7E7E7] 
                px-5 py-5 sm:py-6
                flex items-center gap-4
              "
            >
              <span
                className="
                  inline-flex items-center justify-center
                  w-14 h-14 rounded-full border
                  border-[#E6D9BD]
                  bg-[#F9F5EA]
                  flex-shrink-0
                "
              >
                <CheckCircle size={28} className="text-[#C2A66A]" />
              </span>

              <div>
                <h3 className="text-[18px] sm:text-[24px] font-semibold text-[#3E3E3E]">
                  {it.title}
                </h3>
                <p className="mt-1 text-[15px] sm:text-[16px] leading-relaxed text-[#686868]">
                  {it.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
