import Hero from "@/app/servicos/_components/Hero";
import React from "react";

export default function HeroOrg() {
  return (
    <section className="w-full">
      <Hero
        src="/images/servicos/thumbservicos.png"
        eyebrow={"Adriane belarmino"}
        title={"Psicologia Organizacional"}
      />
    </section>
  );
}
