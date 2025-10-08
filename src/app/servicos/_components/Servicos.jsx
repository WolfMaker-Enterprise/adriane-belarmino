import Image from "next/image";
import React from "react";

export default function Servicos({ src, text, href }) {
  return (
    <div className="text-start">
      {/* Wrapper com proporção 416x485 */}
      <div className="relative w-full aspect-[416/485]">
        <Image src={src} alt={text} fill className="object-contain" />
      </div>
      <div className="h-4 md:h-6" />
      <h2 className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[28px] font-semibold mt-2 md:mt-3">
        {text}
      </h2>
      <div className="h-4 md:h-6" />
      <div className="flex justify-start">
        <button className="w-full sm:w-auto md:w-[166px] md:h-[65px] px-4 sm:px-6 py-2 sm:py-3 text-white bg-gradient-to-r from-[#C2A66A] to-[#DAB86F] rounded-xl">
          <a
            href={href}
            className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold"
          >
            Confira
          </a>
        </button>
      </div>
    </div>
  );
}
