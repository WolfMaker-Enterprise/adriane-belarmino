import React from "react";
import SobreInd from "./_components/ui/SobreInd";
import HeroPsico from "./_components/ui/HeroPsico";
import BeneficiosPraticos from "./_components/ui/BeneficiosPraticos";

export default function page() {
  return (
    <div>
      <HeroPsico />
      <SobreInd />
      <BeneficiosPraticos />
    </div>
  );
}
