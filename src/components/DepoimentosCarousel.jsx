// src/components/DepoimentosCarousel.jsx
"use client";
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { Star, ArrowLeft, ArrowRight } from "@phosphor-icons/react";

const depoimentos = [
  {
    nome: "Ariane",
    inicial: "A",
    cor: "#0FA958",
    texto:
      "“Ótima profissional, transmite muita empatia e segurança, indico de olhos fechados!”",
    estrelas: 5,
  },
  {
    nome: "Emerson",
    inicial: "E",
    cor: "#F39AA2",
    texto:
      "“Demora um pouco para acordamos e notarmos que realmente precisamos de ajuda de um profissional da área da psicologia. Mas quando isso acontece é sucesso com certeza. Passei por grandes problemas e todos vinculados a autoestima e ao profissional, com ajuda da pessoa certa e qualificada, tive resultados e crescimentos GIGANTES em minha carreira. Sem medo algum friso que todos os meus atendimentos são online e me sinto muito confortável com os atendimentos.”",
    estrelas: 5,
  },
  {
    nome: "Beatriz",
    inicial: "B",
    cor: "#4F7CFB",
    texto:
      "“Consegui organizar minha rotina e reduzi a ansiedade no trabalho. Recomendo demais!”",
    estrelas: 5,
  },
  {
    nome: "Lucas",
    inicial: "L",
    cor: "#FFB84D",
    texto:
      "“Processo leve e direto. Em poucas semanas já notei clareza para decisões importantes.”",
    estrelas: 5,
  },
  {
    nome: "Renata",
    inicial: "R",
    cor: "#9C6BDB",
    texto:
      "“Aprendi a colocar limites e comunicar melhor minhas necessidades. Mudou minha relação com o trabalho.”",
    estrelas: 5,
  },
  {
    nome: "Marcelo",
    inicial: "M",
    cor: "#22B3B8",
    texto:
      "“Acolhimento e técnica na medida certa. Me senti respeitado e guiado durante todo o processo.”",
    estrelas: 5,
  },
];

function Card({ depo }) {
  return (
    <div className="rounded-2xl bg-white border border-[#EFEFEF]  p-6 md:p-7 h-[380px] flex flex-col">
      <div className="flex gap-1 text-[#F4A300] mb-3">
        {Array.from({ length: depo.estrelas }).map((_, i) => (
          <Star key={i} weight="fill" size={18} />
        ))}
      </div>
      <p className="text-[#3E3E3E] leading-relaxed overflow-hidden max-h-[240px]">
        {depo.texto}
      </p>
      <div className="mt-auto pt-4 flex items-center gap-3">
        <span
          className="inline-flex items-center justify-center w-8 h-8 rounded-full text-white text-[14px] font-semibold"
          style={{ backgroundColor: depo.cor }}
        >
          {depo.inicial}
        </span>
        <span className="text-[#666]">{depo.nome}</span>
      </div>
    </div>
  );
}

export default function DepoimentosCarousel() {
  const items = depoimentos;
  const total = items.length;

  const [perView, setPerView] = useState(2); // 2 desktop, 1 mobile
  const N = perView; // número de clones em cada ponta

  const viewportRef = useRef(null);
  const [viewportW, setViewportW] = useState(0);
  const slideW = viewportW > 0 ? Math.floor(viewportW / perView) : 0;

  // faixa com N clones no início e no fim
  const trackItems = useMemo(() => {
    if (!items.length) return [];
    const head = items.slice(0, N); // primeiros N
    const tail = items.slice(-N); // últimos N
    return [...tail, ...items, ...head]; // [clones fim] + reais + [clones início]
    // N depende de perView, então deve entrar no array de deps!
  }, [items, N]);

  // começamos no primeiro item real (índice N)
  const [index, setIndex] = useState(N);
  const [noTransition, setNoTransition] = useState(false);

  // mede e ajusta perView
  useLayoutEffect(() => {
    const compute = () => {
      const w = viewportRef.current?.clientWidth ?? 0;
      setViewportW(w);
      setPerView(window.innerWidth < 768 ? 1 : 2);
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);

  // quando perView/N/slideW mudam (ex.: resize), “reancora” no índice equivalente sem transição
  useEffect(() => {
    setNoTransition(true);
    // manter sempre no primeiro real após mudanças
    setIndex(N);
    const id = requestAnimationFrame(() => setNoTransition(false));
    return () => cancelAnimationFrame(id);
  }, [N, slideW]);

  const next = () => setIndex((i) => i + 1);
  const prev = () => setIndex((i) => i - 1);

  // snap invisível quando caímos nas zonas de clones
  const onTransitionEnd = () => {
    // último índice real é N + total - 1
    const lastReal = N + total - 1;

    if (index > lastReal) {
      // passou do último real (entrou no clone do início)
      setNoTransition(true);
      setIndex(N); // volta pro primeiro real
      requestAnimationFrame(() => setNoTransition(false));
    } else if (index < N) {
      // passou para os clones do fim
      setNoTransition(true);
      setIndex(lastReal); // vai para o último real
      requestAnimationFrame(() => setNoTransition(false));
    }
  };

  const offsetPx = -(index * slideW);

  return (
    <section className="w-full ">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16 xl:px-24 py-14 lg:py-20">
        {/* header */}
        <div className="text-center mb-8">
          <span className="block text-[11px] tracking-[0.24em] uppercase font-semibold text-[#C2A66A]">
            Depoimentos
          </span>
          <h2 className="mt-2 text-[28px] sm:text-[36px] lg:text-[40px] font-semibold text-[#3A3A3A]">
            Transformações <span className="text-[#C2A66A]">reais</span>
          </h2>
        </div>

        <div className="relative">
          {/* setas */}
          <button
            onClick={prev}
            aria-label="Anterior"
            className="absolute -left-4 md:-left-8 top-1/2 -translate-y-1/2 z-10 h-9 w-9 rounded-full bg-[#C2A66A] text-white flex items-center justify-center hover:bg-[#b89754] transition-colors "
          >
            <ArrowLeft size={18} weight="bold" />
          </button>
          <button
            onClick={next}
            aria-label="Próximo"
            className="absolute -right-4 md:-right-8 top-1/2 -translate-y-1/2 z-10 h-9 w-9 rounded-full bg-[#C2A66A] text-white flex items-center justify-center hover:bg-[#b89754] transition-colors "
          >
            <ArrowRight size={18} weight="bold" />
          </button>

          {/* viewport */}
          <div ref={viewportRef} className="overflow-hidden">
            {/* track */}
            <div
              className={`flex ${
                noTransition
                  ? ""
                  : "transition-transform duration-500 ease-in-out"
              }`}
              style={{
                transform: `translateX(${offsetPx}px)`,
                willChange: "transform",
              }}
              onTransitionEnd={onTransitionEnd}
            >
              {trackItems.map((depo, i) => (
                <div
                  key={`${depo.nome}-${i}`}
                  className="shrink-0 px-3"
                  style={{ width: `${slideW}px` }}
                >
                  <Card depo={depo} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
