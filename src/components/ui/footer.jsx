// src/components/Footer.jsx
"use client";
import Image from "next/image";
import Link from "next/link";
import { InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";

export default function Footer({
  logoSrc = "/images/logo.svg",
  instagram = "https://instagram.com/",
  linkedin = "https://linkedin.com/",
  menu = [
    { label: "Início", href: "/" },
    { label: "Sobre", href: "/sobre" },
    { label: "Serviços", href: "/servicos" },
    { label: "Contato", href: "/contato" },
  ],
}) {
  return (
    <footer className="w-full h-auto">
      <div className="mx-auto px-6 md:px-10 lg:px-16 xl:px-[240px] py-8 md:py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8 md:gap-6">
          <div className="flex justify-center md:justify-start">
            <Link href="/" className="shrink-0 flex items-center gap-3">
              <Image
                src={logoSrc}
                alt="Adriane Belarmino - Psicóloga"
                width={279}
                height={89.83}
                className="w-[200px] md:w-[279px] h-auto"
                priority
              />
            </Link>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
            {menu.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[16px] md:text-[20px] text-[#585858] "
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center justify-center md:justify-end gap-3">
            <Link
              href={instagram}
              target="_blank"
              aria-label="Instagram"
              className="
                inline-flex h-10 w-10 items-center justify-center
                rounded-full border border-[#DCC58D]/60
                text-[#C2A66A] hover:bg-[#F9F5EA]
                transition-colors
              "
            >
              <InstagramLogo size={24} />
            </Link>
            <Link
              href={linkedin}
              target="_blank"
              aria-label="LinkedIn"
              className="
                inline-flex h-10 w-10 items-center justify-center
                rounded-full border border-[#DCC58D]/60
                text-[#C2A66A] hover:bg-[#F9F5EA]
                transition-colors
              "
            >
              <LinkedinLogo size={24} />
            </Link>
          </div>
        </div>

        <div className="mt-6 md:mt-4 h-px w-full bg-[#EAEAEA]" />

        <div className="py-4 md:py-3 text-center">
          <p className="text-[14px] md:text-[16px] text-[#4D4536]">
            © 2025 Adriane Belarmino.
          </p>
        </div>
      </div>
    </footer>
  );
}
