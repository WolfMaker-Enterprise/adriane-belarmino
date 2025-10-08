// src/components/Contato.jsx
"use client";
import Image from "next/image";
import Link from "next/link";
import {
  WhatsappLogo,
  EnvelopeSimple,
  InstagramLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";

export default function Contato() {
  return (
    <section className="w-full h-auto lg:h-[900px] overflow-hidden">
      <div className="mx-auto px-6 md:px-10 lg:px-16 xl:px-[230px] py-16 lg:py-10">
        <div className="grid items-start lg:items-center gap-10 lg:gap-16 lg:grid-cols-2">
          {/* Coluna esquerda */}
          <div className="w-full max-w-[650px]">
            <span className="block text-[14px] md:text-[16px] tracking-[0.24em] uppercase font-bold text-[#CEAF6D]">
              contato
            </span>

            <p className="mt-3 text-[18px] sm:text-[20px] md:text-[24px] leading-6 md:leading-7 text-[#7A7A7A]">
              Se você sente que chegou o momento de buscar mais leveza no
              trabalho e na vida, este é o primeiro passo. Não precisa ter todas
              as respostas agora —{" "}
              <strong className="font-semibold text-black">
                basta dar o primeiro passo e a gente caminha junto.
              </strong>
            </p>

            <h3 className="mt-6 md:mt-8 text-[24px] sm:text-[28px] md:text-[40px] font-semibold text-[#2E2E2E]">
              Canais de contato
            </h3>

            <div className="mt-4 flex flex-col sm:flex-row rounded-xl border border-[#E8E2D2] items-stretch sm:items-center gap-3">
              <div className="flex-1 bg-white px-4 py-3 flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-12 sm:w-14 h-12 sm:h-14 rounded-full border border-[#E8E2D2]">
                  <WhatsappLogo size={28} className="text-[#DAB86F]" />
                </span>
                <span className="text-[20px] sm:text-[24px] text-[#515151]">
                  WhatsApp
                </span>
              </div>

              <Link
                href="https://wa.me/555195587613"
                target="_blank"
                className="shrink-0 rounded-lg bg-gradient-to-r from-[#C2A66A] to-[#DAB86F] text-white text-[14px] sm:text-[16px] font-semibold px-4 py-3 inline-flex items-center justify-center gap-2 transition-colors"
              >
                Falar comigo agora
                <WhatsappLogo size={16} />
              </Link>
            </div>

            <div className="mt-3 rounded-xl border border-[#EEEEEE] bg-white px-4 py-3 flex items-center gap-3">
              <span className="inline-flex items-center justify-center w-12 sm:w-14 h-12 sm:h-14 rounded-full border border-[#EEEEEE]">
                <EnvelopeSimple size={28} className="text-[#DAB86F]" />
              </span>
              <a
                href={`mailto:psicologa@adrianebelarmino.com`}
                className="text-[18px] sm:text-[20px] md:text-[24px] text-[#515151] break-all"
              >
                psicologa@adrianebelarmino.com
              </a>
            </div>

            {/* Redes sociais */}
            <div className="mt-6">
              <p className="text-[18px] sm:text-[20px] font-medium text-[#515151] mb-2">
                Redes sociais
              </p>
              <div className="flex items-center gap-3">
                <Link
                  href="https://instagram.com/"
                  target="_blank"
                  aria-label="Instagram"
                  className="
                inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center
                rounded-full border border-[#DCC58D]/60
                text-[#C2A66A] 
              "
                >
                  <InstagramLogo size={28} />
                </Link>
                <Link
                  href="https://linkedin.com/"
                  target="_blank"
                  aria-label="LinkedIn"
                  className="
                inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center
                rounded-full border border-[#DCC58D]/60
                text-[#C2A66A] 
              "
                >
                  <LinkedinLogo size={28} weight="fill" />
                </Link>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden">
            <div className="relative w-full">
              <div className="relative w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[880px] mx-auto lg:ml-auto aspect-[880/877]">
                <Image
                  src="/images/adriane5.png"
                  fill
                  className="object-contain select-none"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
