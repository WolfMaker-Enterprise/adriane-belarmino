import Image from "next/image";
import React from "react";

export default function AdrianeConheca() {
  return (
    <section className="w-full mt-10">
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
              Psicóloga com foco em saúde emocional no trabalho. Minha atuação é
              guiada por acolhimento, ética e transformação, com o propósito de
              ajudar quem se sente exausto ou sobrecarregado a reencontrar
              energia, liberdade e autenticidade.{" "}
              <strong className="font-bold text-[#3E3E3E]">
                Porque estar de bem com o trabalho é, no fundo, estar de bem
                consigo mesmo e com a vida.
              </strong>
            </p>

            <p className="mt-4 text-[20px] leading-7 text-[#7A7A7A]">
              Minha trajetória não começou leve: vivi ambientes tóxicos, assédio
              moral e sobrecarga que adoeceram meu corpo e minha mente. Essa
              experiência me fez questionar escolhas e valores — até que
              encontrei na Psicologia uma forma de ressignificar minha história
              e transformá-la em propósito. Em 2017, assumi de vez minha
              <strong className="font-bold text-[#3E3E3E]">
                {" "}
                missão de ajudar pessoas a se reconectarem com sua essência, seu
                trabalho e com a vida.
              </strong>
            </p>

            <p className="mt-4 text-[20px] leading-7 text-[#7A7A7A]">
              Além da psicologia, sou mãe, esposa, mãepet, apaixonada por
              natureza, viagens, filmes e por cozinhar. Curiosa, competitiva e
              determinada,
              <strong className="font-bold text-[#3E3E3E]">
                {" "}
                acredito que a vida merece ser vivida com intensidade, mas
                também com simplicidade, conforto e presença.
              </strong>
            </p>
          </div>

          <div className="relative aspect-[591/643]">
            <Image
              src="/images/sobre/adriane4.svg"
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
