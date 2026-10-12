import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-shell">
        <div className="footer-top">
          <div className="footer-brand">
            <Link href="/" aria-label="CEST — início">
              <Image
                src="/logo.png"
                alt="CEST"
                width={1454}
                height={546}
                sizes="180px"
                className="footer-logo"
              />
            </Link>
            <p>
              Engenharia que cuida de pessoas.
              <br />
              Gestão que acompanha empresas.
            </p>
            <div className="social-links">
              <a
                href={siteConfig.social.instagram}
                aria-label="Instagram da CEST"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span aria-hidden="true">ig</span>
              </a>
              <a
                href={siteConfig.social.linkedin}
                aria-label="LinkedIn da CEST"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span aria-hidden="true">in</span>
              </a>
            </div>
          </div>
          <div>
            <h3>Soluções</h3>
            {[
              { title: "Gestão de riscos", url: "/servicos" },
              { title: "Saúde ocupacional", url: "/medicina-ocupacional" },
              { title: "Laudos técnicos", url: "/laudos-tecnicos" },
              { title: "eSocial SST", url: "/esocial-sst" },
              { title: "Ergonomia", url: "/ergonomia" },
              { title: "Treinamentos", url: "/treinamentos" },
            ].map((item) => (
              <Link href={item.url} key={item.url}>
                {item.title}
              </Link>
            ))}
          </div>
          <div>
            <h3>A CEST</h3>
            <Link href="/sobre">Nossa atuação</Link>
            <Link href="/engenheiro-responsavel">Responsável técnico</Link>
            <Link href="/setores-atendidos">Setores atendidos</Link>
            <Link href="/conteudos">Conteúdos</Link>
            <Link href="/contato">
              Contato <ArrowUpRight size={13} />
            </Link>
          </div>
          <div className="footer-contact">
            <h3>Vamos conversar</h3>
            <a href="tel:+551632526778">
              <Phone size={15} />
              {siteConfig.contact.phoneDisplay}
            </a>
            <a href={"mailto:" + siteConfig.contact.email}>
              <Mail size={15} />
              {siteConfig.contact.email}
            </a>
            <p>
              {siteConfig.contact.address}
              <br />
              {siteConfig.contact.city}
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} CEST. Todos os direitos reservados.
          </p>
          <Link href="/politica-de-privacidade">Política de privacidade</Link>
        </div>
        <p className="footer-responsible">
          Responsável técnico: {siteConfig.engineer.name} ·{" "}
          {siteConfig.engineer.crea}
        </p>
      </div>
    </footer>
  );
}
