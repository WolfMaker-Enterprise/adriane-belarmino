// src/components/Navbar.jsx
"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV = [
  { label: "Início", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "Serviços", href: "/servicos" },
  { label: "Contato", href: "/contato" },
];

export default function Navbar({
  logoSrc = "/images/logo.svg",
  ctaLabel = "Entre em contato",
  ctaHref = "https://wa.me/555195587613",
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 w-full h-[100px] bg-blur/80 backdrop-blur-sm border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* linha */}
        <div className="h-25 flex items-center justify-between">
          {/* logo */}
          <Link href="/" className="shrink-0 flex items-center gap-3">
            <Image
              src={logoSrc}
              alt="Adriane Belarmino - Psicóloga"
              width={190}
              height={40}
              className="h-20 w-auto"
              priority
            />
          </Link>

          {/* links desktop */}
          <nav className="hidden md:flex items-center gap-7">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[20px] transition-colors ${
                  isActive(item.href)
                    ? "text-[#2E2E2E]"
                    : "text-[#6A6A6A] hover:text-[#2E2E2E]"
                }`}
              >
                {item.label}
              </Link>
            ))}

            <Link
              href={ctaHref}
              className="
                rounded-lg px-4 py-2 text-[13px] font-medium text-white
                bg-gradient-to-r from-[#C2A66A] via-[#D7BF7D] to-[#C2A66A]
                hover:brightness-105 transition-[filter]
                shadow-sm
              "
            >
              {ctaLabel}
            </Link>
          </nav>

          {/* botão mobile */}
          <button
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-[#2E2E2E]"
            onClick={() => setOpen((s) => !s)}
            aria-label="Abrir menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* menu mobile */}
      {open && (
        <div className="md:hidden border-t border-black/5 bg-[#E6E6E6]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
            <nav className="flex flex-col gap-2">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-md px-2 py-2 text-[15px] ${
                    isActive(item.href)
                      ? "text-[#2E2E2E] bg-white/40"
                      : "text-[#5F5F5F] hover:bg-white/40 hover:text-[#2E2E2E]"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href={ctaHref}
                onClick={() => setOpen(false)}
                className="
                  mt-2 inline-flex items-center justify-center rounded-lg px-4 py-2 text-[14px] font-medium text-white
                  bg-gradient-to-r from-[#C2A66A] via-[#D7BF7D] to-[#C2A66A]
                  hover:brightness-105 transition-[filter]
                  shadow-sm
                "
              >
                {ctaLabel}
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
