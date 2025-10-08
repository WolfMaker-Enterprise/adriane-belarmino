import React from "react";
import HeroOrg from "./_components/ui/HeroOrg";
import AboutOrg from "./_components/ui/AboutOrg";
import ProgramaDesenvolvimentoHumano from "./_components/ui/ProgramaDesenvolvimentoHumano";
import BeneficiosPraticosEmpresas from "./_components/ui/BeneficiosPratiscosEmpresas";
import AboutServiceOrg from "./_components/ui/AboutServiceOrg";

export default function page() {
  return (
    <div>
      <HeroOrg />
      <AboutOrg />
      <ProgramaDesenvolvimentoHumano />
      <BeneficiosPraticosEmpresas />
      <AboutServiceOrg />
    </div>
  );
}
