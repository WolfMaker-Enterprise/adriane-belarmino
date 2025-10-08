// src/components/HeroHome.jsx
"use client";
import Image from "next/image";
import Link from "next/link";
import { WhatsappLogo } from "@phosphor-icons/react";

export default function HeroHome({}) {
  return (
    <section className="relative w-full h-[900px] overflow-hidden">
      {/* BG: imagem em toda a seção */}
      <div className="absolute inset-0 -z-10 w-full h-[900px]">
        <Image
          src="/images/bghome.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Conteúdo */}
      <div className="mx-auto  max-w-[1500px] px-6 md:px-10 lg:px-16 xl:px-24 py-16 md:py-20 lg:py-50">
        <div className=" ml-auto max-w-3xl">
          <span className="block text-[16px] tracking-[0.24em] uppercase font-semibold text-[#C2A66A]">
            ADRIANE BELARMINO
          </span>

          <h1 className="mt-3 text-[34px] sm:text-[44px] lg:text-[56px] leading-[1.1] font-semibold text-[#2E2E2E]">
            De Bem Com o Trabalho, para estar de Bem Com a Vida!
          </h1>

          <p className="mt-4 text-[20px] leading-7 text-[#7A7A7A]">
            Transforme sua rotina e descubra como viver com mais leveza,
            propósito e bem-estar. Burnout, Estresse, Ansiedade e Sobrecarga não
            precisam ser parte do seu dia a dia!
          </p>

          <div className="mt-6">
            <Link
              href="https://wa.me/555195587613"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#C2A66A] to-[#DAB86F] text-white px-5 py-3 text-[15px] font-medium transition-colors shadow-sm"
            >
              Quero dar meu primeiro passo!
              <WhatsappLogo size={18} weight="fill" />
            </Link>
          </div>

          <p className="mt-6 text-[20px] leading-7 text-[#7A7A7A]">
            Você não precisa se esgotar para ser reconhecido. Nem viver apenas
            para trabalhar. Existe um novo caminho, um modo mais leve de se
            relacionar com o trabalho — e eu posso te ajudar a encontrá-lo.
          </p>
        </div>
      </div>
    </section>
  );
}
