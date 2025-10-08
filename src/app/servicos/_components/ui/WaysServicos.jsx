import React from "react";
import Servicos from "../Servicos";

export default function WaysServicos() {
  return (
    <section className="w-full">
      <div className=" h-[900px] md:[900px] px-6 sm:px-10 lg:px-16 xl:px-24 py-20">
        <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 2 gap-4 max-w-[780px]">
          <div>
            <Servicos
              src="/images/servicos/psiorga.png"
              text="Psicologia Organizacional"
              href={"/psicologia-organizacional"}
            />
          </div>

          <div>
            <Servicos
              src="/images/servicos/psiindiv.png"
              text="Psicologia Individual"
              href={"/psicoterapia-individual"}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
