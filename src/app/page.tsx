import { HeroHome } from "@/components/cest2/HeroHome";
import { EmpresaSection } from "@/components/cest2/EmpresaSection";
import { FightSection } from "@/components/cest2/FightSection";
import { ProofSection } from "@/components/cest2/ProofSection";
import { SolucaoSection } from "@/components/cest2/SolucaoSection";
import { CTAFinal } from "@/components/cest2/CTAFinal";
import { FxObserver } from "@/components/cest2/FxObserver";

/*
  CEST 2.0 home — narrative order is fixed (see CEST2.0.md §2):
  1. a empresa → 2. chama pro fight → 3. a prova → 4. a solução → 5. CTA.

  Every section is a server component. The only client code on the page is
  the entrance observer and the counting numbers in the proof.
*/
export default function HomePage() {
  return (
    <>
      <HeroHome />
      <EmpresaSection />
      <FightSection />
      <ProofSection />
      <SolucaoSection />
      <CTAFinal />
      <FxObserver />
    </>
  );
}
