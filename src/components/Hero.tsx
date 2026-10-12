import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Check, ShieldCheck } from "lucide-react";
import { whatsappLink } from "@/config/siteConfig";

export function Hero() {
  return (
    <section className="home-hero">
      <div className="site-shell hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">
            <span className="status-dot" /> Engenharia de Segurança do Trabalho
          </span>
          <h1>
            Segurança para
            <br />
            quem trabalha.
            <br />
            <span>Tranquilidade</span>
            <br />
            para quem gere.
          </h1>
          <p>
            Da avaliação dos riscos à rotina de SST, a CEST conecta conhecimento
            técnico, prevenção e cuidado com as pessoas da sua empresa.
          </p>
          <div className="hero-actions">
            <a
              href={whatsappLink(
                "Olá! Quero conhecer as soluções de SST da CEST para minha empresa.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="button button-lime"
            >
              Vamos cuidar da sua empresa <ArrowUpRight size={18} />
            </a>
            <Link href="/servicos" className="text-link">
              Explorar soluções <ArrowUpRight size={17} />
            </Link>
          </div>
          <div className="hero-assurances">
            <span>
              <Check size={15} /> Atendimento técnico direto
            </span>
            <span>
              <Check size={15} /> Gestão integrada de SST
            </span>
          </div>
        </div>
        <div className="hero-visual">
          <Image
            src="/industrial-hero.webp"
            alt="Ilustração de um profissional em um ambiente industrial organizado"
            fill
            sizes="(max-width: 760px) 100vw, 48vw"
            preload
            className="hero-photo"
          />
          <div className="photo-topline">
            <span>PREVENÇÃO EM CADA DETALHE</span>
            <span className="photo-cross">+</span>
          </div>
          <div className="hero-photo-caption">
            <span className="caption-rule" />
            <p>
              O cuidado começa
              <br />
              <strong>onde o trabalho acontece.</strong>
            </p>
          </div>
          <div className="hero-note">
            <span className="note-icon">
              <ShieldCheck size={23} />
            </span>
            <div>
              <strong>Técnica que protege.</strong>
              <span>Gestão que acompanha.</span>
            </div>
            <ArrowUpRight size={20} />
          </div>
          <span className="image-credit">Imagem conceitual</span>
        </div>
      </div>
      <div className="site-shell hero-bottom">
        <span>DOCUMENTOS. PESSOAS. PROCESSOS.</span>
        <a href="#solucoes">
          Conheça a CEST <ArrowDown size={15} />
        </a>
        <span>TAQUARITINGA · SP</span>
      </div>
    </section>
  );
}
