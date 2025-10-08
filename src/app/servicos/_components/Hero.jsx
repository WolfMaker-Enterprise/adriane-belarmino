import Image from "next/image";
import React from "react";

export default function Hero({ src, eyebrow, title }) {
  return (
    <div
      className="
          relative mx-auto w-full
          aspect-[1920/675]
          md:h-[450px] lg:h-[560px] xl:h-[675px] xl:aspect-auto
          overflow-hidden
        "
    >
      {/* Imagem ancorada à direita */}
      <Image
        src={src}
        alt={title}
        priority
        fill
        sizes="100vw"
        className="
            object-contain object-right
          "
      />

      {/* Gradiente aplicado sobre a imagem */}
      <div
        className="
            absolute inset-0 pointer-events-none
          "
        style={{
          background:
            "linear-gradient(91deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.86) 41%, rgba(255,255,255,0.08) 82%)",
        }}
      />

      {/* Conteúdo à esquerda */}
      <div className="relative z-10 h-full flex items-center">
        <div className="px-6 sm:px-10 lg:px-16 xl:px-[280px]">
          <span className="block text-[16px] tracking-[0.24em] uppercase font-semibold text-[#CEAF6D]">
            {eyebrow}
          </span>
          <h1 className="mt-2 text-[28px] sm:text-[32px] lg:text-[50px] xl:text-[56px] font-semibold text-[#404040]">
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
}
