import Sessao from "@/app/servicos/_components/Sessao";
import Image from "next/image";
import React from "react";

export default function AboutServiceOrg() {
  return (
    <section className="w-full px-[100px]">
      <div className="mx-auto px-6 md:px-30 py-14 md:py-20">
        <div className="w-full h-auto lg:w-[1440px] lg:h-[616px] grid items-center gap-10 lg:gap-16 lg:grid-cols-2">
          <div className="relative w-full aspect-[4/3] md:aspect-[5/4]">
            <Image
              src="/images/adriane3.svg"
              fill
              sizes="(max-width: 1024px) 90vw, 520px"
              className="object-contain"
              priority
            />
          </div>

          <div>
            <span className="block text-[16px] uppercase tracking-[0.24em] font-bold text-[#CEAF6D]">
              SOBRE O SERVIÇO
            </span>
            <h2 className="mt-3 text-[28px] md:text-[48px] font-medium text-[#404040]">
              Palestras
            </h2>
            <p className="mt-4 text-[16px] sm:text-[20px] leading-7 text-[#7A7A7A] max-w-[58ch]">
              Levar saúde emocional para dentro das empresas é uma das minhas
              missões. Minhas palestras unem teoria e prática com leveza e
              impacto, abordando temas como estresse, esgotamento, produtividade
              saudável, relações no trabalho e prevenção do adoecimento
              emocional.
            </p>
            <p className="mt-4 text-[16px] sm:text-[20px] leading-7 text-[#7A7A7A] max-w-[58ch]">
              Mais do que informar, meu objetivo é provocar reflexão, abrir
              espaço para o diálogo e inspirar mudanças que tornam os ambientes
              mais humanos e sustentáveis.
            </p>
            <button>
              <a
                href="https://wa.me/555195587613"
                target="_blank"
                className=" mt-6 bg-gradient-to-r from-[#C2A66A] to-[#DAB86F] text-white font-medium text-[16px] py-3 px-4 rounded-lg inline-flex items-center justify-center gap-2"
              >
                Solicite uma proposta
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
