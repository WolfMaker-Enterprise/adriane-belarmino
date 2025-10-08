// src/components/CTASection.jsx
"use client";
import Image from "next/image";
import Link from "next/link";
import { WhatsappLogo } from "@phosphor-icons/react";

export default function CTASection({
  eyebrow = "CONTATO",
  title = (
    <>
      Não adie o cuidado <br />
      com sua <span className="font-semibold text-[#C2A66A]">saúde mental</span>
    </>
  ),
  desc = "Seja no cuidado individual ou no desenvolvimento da sua empresa, estou pronta para ajudar você a alcançar mais clareza, bem-estar e confiança.",
  ctaLabel = "Quero dar meu primeiro passo!",
  ctaHref = "https://wa.me/555195587613",
  imageSrc = "/images/adriane9.png", // coloque aqui sua imagem (ex: a que está no design)
}) {
  return (
    <section className="relative w-full">
      <div className="mx-auto  px-6 md:px-10 lg:px-16 xl:px-[240px] py-16 md:py-24 flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Imagem à esquerda */}
        <div className="relative w-full max-w-[480px] lg:max-w-[620px]">
          <Image
            src={imageSrc}
            alt="Profissional de psicologia"
            width={520}
            height={800}
            priority
            className="object-contain w-full h-auto relative"
          />
        </div>

        {/* Texto à direita */}
        <div className="flex-1 text-left max-w-3xl">
          <span className="block text-[16px] tracking-[0.24em] uppercase font-bold text-[#CEAF6D] mb-2">
            {eyebrow}
          </span>

          <h2 className="text-[30px] sm:text-[36px] lg:text-[56px] leading-tight font-medium text-[#2E2E2E] mb-5">
            {title}
          </h2>

          <p className="text-[20px] leading-relaxed text-[#7A7A7A] mb-6">
            {desc}
          </p>

          <Link
            href={ctaHref}
            target="_blank"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#C2A66A] to-[#DAB86F] text-white px-6 py-3 text-[15px] font-medium transition-colors shadow-sm"
          >
            {ctaLabel}
            <WhatsappLogo size={18} weight="fill" />
          </Link>
        </div>
      </div>
    </section>
  );
}
