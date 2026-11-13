/*
  CEST 2.0 — cost model for the home page.

  Every constant here carries its legal source, and CEST2.0.md §4 holds the
  verification status. Rule inherited from the LATENTFY method: no number
  appears on the page without the norm next to it, and nothing here is a
  promise — the outputs are estimates of what the company already pays.
*/

/** Salário mínimo 2026 — Decreto 12.797/2025 (DOU 24/12/2025). */
export const SALARIO_MINIMO_2026 = 1621;

/**
  Salaries a year on which payroll contributions fall: 12 months + 13º + ⅓ de
  férias. Estimate — the exact incidence base is pending confirmation with an
  accountant (CEST2.0.md §7, item 3).
*/
export const SALARIOS_POR_ANO = 13 + 1 / 3;

/** RAT: 1%, 2% or 3% — Decreto 3.048/1999, art. 202 e Anexo V. */
export const RAT_OPCOES = [0.01, 0.02, 0.03] as const;

/** FAP: 0,5000 a 2,0000 — Decreto 3.048/1999, art. 202-A. */
export const FAP_MIN = 0.5;
export const FAP_NEUTRO = 1;
export const FAP_MAX = 2;

/** Adicional de aposentadoria especial: 6, 9 ou 12 pontos — Lei 8.213/1991, art. 57, §6º. */
export const ADICIONAL_ESPECIAL_OPCOES = [0.06, 0.09, 0.12] as const;

/** FGTS: 8% — Lei 8.036/1990, art. 15; mantido no afastamento acidentário (§5º). */
export const FGTS = 0.08;

/** Primeiros 15 dias do afastamento pagos pela empresa — Lei 8.213/1991, art. 60, §3º. */
export const DIAS_PAGOS_EMPRESA = 15;

export type SimInput = {
  funcionarios: number;
  salarioMedio: number;
  rat: number;
  fap: number;
  expostos: number;
  adicionalEspecial: number;
  afastamentos: number;
  diasMediosAfastamento: number;
};

export const SIM_DEFAULTS: SimInput = {
  funcionarios: 50,
  salarioMedio: 2500,
  rat: 0.03,
  fap: FAP_NEUTRO,
  expostos: 10,
  adicionalEspecial: 0.06,
  afastamentos: 2,
  diasMediosAfastamento: 60,
};

export function ratAnual(folhaMensal: number, rat: number, fap: number) {
  return folhaMensal * SALARIOS_POR_ANO * rat * fap;
}

export function adicionalEspecialAnual(
  expostos: number,
  salario: number,
  aliquota: number
) {
  return expostos * salario * SALARIOS_POR_ANO * aliquota;
}

/**
  Direct cash cost of one accident-related leave to the employer: the first
  15 days of salary plus FGTS deposited for the remainder of the leave.
  Deliberately leaves out what can't be estimated honestly from the outside —
  replacement labour, the 12-month stability (art. 118), INSS regressive
  action (art. 120) and the FAP increase in the following cycles. Those are
  named on the page, not priced.
*/
export function custoAfastamento(salario: number, dias: number) {
  const diasEmpresa = Math.min(dias, DIAS_PAGOS_EMPRESA);
  const diasINSS = Math.max(0, dias - DIAS_PAGOS_EMPRESA);
  return (salario / 30) * diasEmpresa + FGTS * salario * (diasINSS / 30);
}

export function simular(input: SimInput) {
  const folhaMensal = input.funcionarios * input.salarioMedio;
  const expostos = Math.min(input.expostos, input.funcionarios);

  const rat = ratAnual(folhaMensal, input.rat, input.fap);
  const ratNoMinimo = ratAnual(folhaMensal, input.rat, FAP_MIN);
  const ratNoMaximo = ratAnual(folhaMensal, input.rat, FAP_MAX);
  const especial = adicionalEspecialAnual(
    expostos,
    input.salarioMedio,
    input.adicionalEspecial
  );
  const afastamentos =
    input.afastamentos *
    custoAfastamento(input.salarioMedio, input.diasMediosAfastamento);

  return {
    folhaMensal,
    rat,
    ratNoMinimo,
    ratNoMaximo,
    /** What separates the company's current FAP from the floor of 0,5. */
    ratEmJogo: Math.max(0, rat - ratNoMinimo),
    especial,
    afastamentos,
    total: rat + especial + afastamentos,
  };
}

export type SimResult = ReturnType<typeof simular>;

const brl = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  maximumFractionDigits: 0,
});

export const formatBRL = (value: number) => brl.format(Math.round(value));

export const formatPct = (value: number) =>
  `${(value * 100).toLocaleString("pt-BR", { maximumFractionDigits: 1 })}%`;

export const formatFap = (value: number) =>
  value.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
