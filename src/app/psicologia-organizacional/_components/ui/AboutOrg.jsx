import Sessao from "@/app/servicos/_components/Sessao";
import React from "react";

export default function AboutOrg() {
  return (
    <section className="w-full">
      <Sessao
        img="/images/adriane2.svg"
        eyebrow={"Sobre o serviço"}
        title={
          "Cuidar das pessoas é a estratégia mais inteligente para transformar resultados"
        }
        text={
          "A Psicologia Organizacional que desenvolvo tem como foco alinhar produtividade, engajamento e bem-estar dentro das empresas. Por meio de programas de desenvolvimento humano, ferramentas de avaliação organizacional e palestras, ajudo líderes e equipes a fortalecerem suas competências, construírem relações mais saudáveis e atuarem de forma mais estratégica."
        }
      />
    </section>
  );
}
