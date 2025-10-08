// src/components/BeneficiosPraticos.jsx
"use client";
import { WhatsappLogo } from "@phosphor-icons/react";
import Link from "next/link";
import Image from "next/image";

export default function BeneficiosPraticosEmpresas() {
  const beneficios = [
    "Profissionais mais conscientes, autônomos e engajados.",
    "Melhor gestão do tempo com foco em resultados.",
    "Comunicação clara e feedbacks estruturados que impulsionam equipes.",
    "Lideranças preparadas para agir com atitude, protagonismo e impacto positivo.",
    "Cultura organizacional fortalecida pela saúde emocional e qualidade de vida.",
  ];

  return (
    <section className="w-full relative overflow-hidden px-6 sm:px-10 lg:px-20 xl:px-[240px]">
      <div className="relative py-20 md:py-24">
        <div className="absolute inset-0 flex justify-center items-center z-0">
          <Image
            src="/images/logobg.svg"
            alt="Marca d'água"
            width={800}
            height={800}
            className=" select-none pointer-events-none object-contain"
          />
        </div>

        <div className="relative z-10 mx-auto">
          <h2 className="text-center text-[28px] sm:text-[32px] font-semibold text-[#3E3E3E] mb-12">
            Benefícios práticos
          </h2>

          <div className="w-full xl:w-[1400px] grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {beneficios.map((texto, i) => (
              <div
                key={i}
                className="border border-[#C2A66A]/20 rounded-xl p-6  backdrop-blur-[1px] flex flex-col justify-start hover:shadow-sm transition-shadow"
              >
                <div className="flex items-center justify-start mb-3">
                  <span className="text-[#C2A66A] text-[40px] font-semibold border border-[#C2A66A]/20 rounded-full w-12 h-12 flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>
                <p className="text-[#404040] text-[28px] ">{texto}</p>
              </div>
            ))}

            {/* bloco final com CTA */}
            <div className="border border-[#C2A66A]/20 rounded-xl p-6 flex flex-col justify-between backdrop-blur-[1px]">
              <p className="text-[#404040] text-[28px] mb-4">
                Quer ampliar o potencial humano da sua empresa?
              </p>
              <Link
                href="https://wa.me/555195587613"
                target="_blank"
                className=" bg-gradient-to-r from-[#C2A66A] to-[#DAB86F] text-white font-medium text-[15px] py-3 px-4 rounded-lg inline-flex items-center justify-center gap-2"
              >
                Solicite uma proposta
                <WhatsappLogo size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
