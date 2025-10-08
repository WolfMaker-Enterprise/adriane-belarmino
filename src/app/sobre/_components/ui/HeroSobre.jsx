import Hero from "@/app/servicos/_components/Hero";
import React from "react";

export default function HeroSobre() {
  return (
    <section className="w-full ">
      <Hero
        eyebrow={"adriane belarmino"}
        src={"/images/sobre/herosobre.png"}
        title={"De bem com o trabalho"}
      />
    </section>
  );
}
