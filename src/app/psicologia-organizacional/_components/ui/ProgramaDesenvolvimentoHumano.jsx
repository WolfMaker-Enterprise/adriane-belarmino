// src/components/ProgramaDesenvolvimentoHumano.jsx
"use client";
import Image from "next/image";

export default function ProgramaDesenvolvimentoHumano({}) {
  return (
    <section className="w-full ">
      <div className="mx-auto px-6 md:px-10 lg:px-16 xl:px-[240px] py-14 lg:py-20">
        <div className="grid items-center gap-10 lg:gap-16 lg:grid-cols-2">
          <div>
            <span className="block text-[16px] tracking-[0.24em] uppercase font-bold text-[#CBA75C]">
              PROGRAMA DE DESENVOLVIMENTO HUMANO
            </span>

            <h2 className="mt-3 text-[30px] sm:text-[36px] lg:text-[44px] xl:text-[48px] leading-tight font-medium text-[#404040]">
              Pessoas mais conscientes, produtivas e saudáveis geram resultados
              mais sustentáveis
            </h2>

            <p className="mt-5 text-[20px] leading-7 text-[#7A7A7A]">
              O Programa de Desenvolvimento Humano foi criado para transformar
              profissionais em protagonistas de sua trajetória. Mais do que
              capacitação, é um processo de fortalecimento das competências que
              impactam diretamente o desempenho individual e coletivo.
            </p>

            <p className="mt-4 text-[20px] leading-7 text-[#7A7A7A]">
              <strong className="font-bold text-[#3E3E3E]">
                O foco está em desenvolver inteligência emocional, gestão de
                tempo, comunicação assertiva e liderança saudável{" "}
              </strong>
              — pilares essenciais para ambientes de trabalho mais estratégicos,
              produtivos e humanos.
            </p>
          </div>

          <div className="relative aspect-[706/477]">
            <Image
              src="/images/imagem.png"
              fill
              sizes="(max-width:1024px) 90vw, 706px"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
