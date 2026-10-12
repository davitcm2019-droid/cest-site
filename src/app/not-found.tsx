import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function NotFound() {
  return <section className="site-shell section-space"><span className="eyebrow">404 / Página não encontrada</span><h1 className="mt-5 text-4xl font-medium tracking-tight">Vamos encontrar o caminho certo.</h1><p className="my-7 text-graphite/70">Esta página não está disponível. Conheça nossas soluções ou fale com a equipe da CEST.</p><div className="flex flex-wrap gap-6"><Link href="/" className="button button-dark">Voltar ao início <ArrowUpRight size={18}/></Link><Link href="/contato" className="text-link">Fale com a CEST <ArrowUpRight size={18}/></Link></div></section>;
}
