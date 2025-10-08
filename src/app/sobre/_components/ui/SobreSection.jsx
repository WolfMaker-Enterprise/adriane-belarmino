import Image from "next/image";
import React from "react";

export default function SobreSection() {
  return (
    <section className="w-full ">
      <div className="mx-auto px-6 md:px-30 py-14 md:py-20">
        <div className="w-full h-auto lg:w-[1440px] lg:h-[616px] grid items-center gap-10 lg:gap-16 lg:grid-cols-2">
          <div className="relative w-full aspect-[4/3] md:aspect-[5/4]">
            <Image
              src="/images/sobre/about.svg"
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
              O trabalho faz parte da nossa vida, mas não precisa nos engolir
            </h2>
            <p className="mt-4 text-[16px] sm:text-[20px] leading-7 text-[#7A7A7A] max-w-[58ch]">
              Burnout, estresse e ansiedade se tornaram tão comuns que parece
              “normal” viver cansado, no piloto automático, sem energia para
              aproveitar a vida de verdade.
            </p>
            <p className="mt-4 text-[16px] sm:text-[20px] leading-7 text-[#7A7A7A] max-w-[58ch]">
              <p className="font-bold text-black">
                Mas não precisa ser assim. Existe um outro caminho:
              </p>
              mudar a forma como você se relaciona com o trabalho — começando
              por dentro. Ao reconhecer seus limites, resgatar seus valores e
              organizar a rotina de forma mais humana, você descobre que é
              possível trabalhar sem se perder de si mesmo.
            </p>
            <p className="mt-4 text-[16px] sm:text-[20px] leading-7 text-[#7A7A7A] max-w-[58ch]">
              Foi com esse propósito que nasceu o
              <p className="font-bold text-black">
                De Bem Com o Trabalho: ajudar pessoas a reencontrarem leveza,
                saúde e sentido em sua vida profissional e pessoal.
              </p>
              Aqui, o objetivo não é “aguentar mais”, mas aprender a viver e
              trabalhar de um jeito mais saudável, presente e verdadeiro.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
