"use client";

import { useState } from "react";
import type { ComponentPropsWithoutRef } from "react";
import {
  useForm,
  type FieldError,
  type UseFormRegisterReturn,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, ExternalLink, Loader2, Send } from "lucide-react";
import { whatsappLink } from "@/config/siteConfig";

const serviceOptions = [
  "PGR/GRO",
  "PCMSO",
  "LTCAT",
  "PPP",
  "eSocial SST",
  "Laudo de Insalubridade",
  "Laudo de Periculosidade",
  "Laudo Ergonômico",
  "Treinamentos",
  "Gestão de EPIs",
  "Medicina Ocupacional",
  "Outros",
];

/** Brazilian landline or mobile, with area code: 10 or 11 digits. */
const BR_PHONE_DIGITS = /^\d{10,11}$/;

const schema = z.object({
  name: z.string().trim().min(2, "Informe seu nome completo"),
  company: z.string().trim().min(2, "Informe o nome da empresa"),
  phone: z
    .string()
    .trim()
    .refine((value) => BR_PHONE_DIGITS.test(value.replace(/\D/g, "")), {
      message: "Informe DDD + número, ex.: (16) 99999-9999",
    }),
  email: z.string().trim().email("Informe um e-mail válido"),
  city: z.string().trim().min(2, "Informe a cidade"),
  employees: z
    .string()
    .trim()
    .refine((value) => /^\d{1,6}$/.test(value.replace(/\D/g, "")), {
      message: "Informe apenas números, ex.: 45",
    }),
  service: z.string().min(1, "Selecione um serviço"),
  message: z.string().trim().min(10, "Conte um pouco mais sobre sua necessidade"),
  /*
    Honeypot: invisible to people, irresistible to naive bots.

    Deliberately NOT constrained to an empty string. A schema rule would fail
    validation before the submit handler runs, and since this field is hidden
    the user would face a form that refuses to submit with nothing on screen
    explaining why — the exact trap a stray autofill would spring. The value is
    inspected in the submit handler instead.
  */
  website: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const inputClasses =
  "w-full rounded-lg border border-graphite/15 bg-card px-4 py-3 text-sm text-graphite outline-none transition-colors placeholder:text-graphite/40 focus:border-brand focus:ring-2 focus:ring-brand/20 aria-[invalid=true]:border-red-400";

const labelClasses = "mb-1.5 block text-sm font-medium text-graphite/80";

function RequiredMark() {
  return (
    <span className="text-red-300" aria-hidden="true">
      {" "}
      *
    </span>
  );
}

function ErrorMessage({ id, error }: { id: string; error?: FieldError }) {
  if (!error) return null;
  return (
    <p id={id} className="mt-1.5 text-xs text-red-300">
      {error.message}
    </p>
  );
}

type FieldProps = {
  id: keyof FormData;
  label: string;
  error?: FieldError;
  registration: UseFormRegisterReturn;
} & Omit<ComponentPropsWithoutRef<"input">, "id" | "name">;

function Field({ id, label, error, registration, ...inputProps }: FieldProps) {
  const errorId = `${id}-error`;
  return (
    <div>
      <label htmlFor={id} className={labelClasses}>
        {label}
        <RequiredMark />
      </label>
      <input
        id={id}
        className={inputClasses}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        {...inputProps}
        {...registration}
      />
      <ErrorMessage id={errorId} error={error} />
    </div>
  );
}

const fieldLabels: Record<string, string> = {
  name: "Nome",
  company: "Empresa",
  phone: "Telefone/WhatsApp",
  email: "E-mail",
  city: "Cidade",
  employees: "Quantidade de funcionários",
  service: "Serviço de interesse",
  message: "Mensagem",
};

export function ContactForm() {
  // Holds the composed WhatsApp URL after a successful submit, so the success
  // screen can offer it as a real link. The previous version only called
  // window.open(); when a popup blocker swallowed that call the lead was lost
  // with no way to recover it.
  const [sentLink, setSentLink] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, submitCount },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const errorEntries = Object.entries(errors).filter(
    ([field]) => field !== "website"
  );

  const onSubmit = async (data: FormData) => {
    // A filled honeypot means a bot. Show the normal success state so the bot
    // learns nothing, but send nothing.
    if (data.website) {
      setSentLink(null);
      reset();
      return;
    }

    const message = [
      "Olá! Gostaria de solicitar um orçamento de Segurança do Trabalho.",
      `Nome: ${data.name}`,
      `Empresa: ${data.company}`,
      `Telefone: ${data.phone}`,
      `E-mail: ${data.email}`,
      `Cidade: ${data.city}`,
      `Funcionários: ${data.employees}`,
      `Serviço de interesse: ${data.service}`,
      `Mensagem: ${data.message}`,
    ].join("\n");

    const url = whatsappLink(message);

    /*
      `window.open` with `noopener` returns null by specification, even when the
      window opened fine — so its return value cannot be used to detect a popup
      blocker. Rather than guess (and risk telling every user their browser
      blocked something it didn't), always hand them the link on the success
      screen and word it for both outcomes.
    */
    window.open(url, "_blank", "noopener,noreferrer");

    setSentLink(url);
    reset();
  };

  if (sentLink) {
    return (
      <div className="flex flex-col items-center rounded-2xl border border-brand/20 bg-mist px-6 py-14 text-center">
        <CheckCircle2 className="h-12 w-12 text-brand" aria-hidden="true" />
        <h3 className="mt-4 text-lg font-bold text-white">
          Solicitação pronta
        </h3>
        <p className="mt-2 max-w-sm text-sm text-graphite/70">
          Abrimos o WhatsApp com sua mensagem já preenchida. Se a janela não
          apareceu — alguns navegadores bloqueiam —, use o botão abaixo.
        </p>

        <a
          href={sentLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center justify-center gap-2 cursor-pointer rounded-lg bg-brand-accent px-6 py-3 text-sm font-semibold text-[#0a0c0b] transition-[filter] duration-200 hover:brightness-110"
        >
          <ExternalLink className="h-4 w-4" aria-hidden="true" />
          Abrir conversa no WhatsApp
        </a>

        <button
          type="button"
          onClick={() => setSentLink(null)}
          className="mt-4 text-sm font-semibold text-brand hover:text-white"
        >
          Enviar nova solicitação
        </button>
      </div>
    );
  }

  return (
    <form
      // react-hook-form's `shouldFocusError` (on by default) already moves
      // focus to the first invalid field on a failed submit, which is the
      // behaviour we want. The summary below is the announcement, not the
      // focus target — an extra focus() call here would only race with it.
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="space-y-5 rounded-2xl border border-graphite/10 bg-card p-6 sm:p-8"
    >
      <p className="text-xs text-graphite/60">
        Campos marcados com <span className="text-red-300">*</span> são
        obrigatórios.
      </p>

      {/*
        Single summary of everything that went wrong, announced via `aria-live`
        so a screen-reader user hears the whole list instead of discovering
        errors one field at a time. Each entry links to its field.
      */}
      <div
        aria-live="assertive"
        className={
          errorEntries.length > 0
            ? "rounded-lg border border-red-500/30 bg-red-500/10 p-4"
            : "sr-only"
        }
      >
        {errorEntries.length > 0 ? (
          <>
            <p className="text-sm font-semibold text-red-300">
              {errorEntries.length === 1
                ? "1 campo precisa ser corrigido:"
                : `${errorEntries.length} campos precisam ser corrigidos:`}
            </p>
            <ul className="mt-2 space-y-1">
              {errorEntries.map(([field, error]) => (
                <li key={field} className="text-sm text-red-300">
                  <a href={`#${field}`} className="underline">
                    {fieldLabels[field] ?? field}
                  </a>
                  : {(error as FieldError)?.message}
                </li>
              ))}
            </ul>
          </>
        ) : submitCount > 0 ? (
          "Formulário válido."
        ) : null}
      </div>

      {/*
        Honeypot. Hidden from sight and from assistive tech, and explicitly
        excluded from autofill so real users never populate it.
      */}
      <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website">Não preencha este campo</label>
        <input
          id="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("website")}
        />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field
          id="name"
          label="Nome"
          autoComplete="name"
          error={errors.name}
          registration={register("name")}
        />
        <Field
          id="company"
          label="Empresa"
          autoComplete="organization"
          error={errors.company}
          registration={register("company")}
        />
        <Field
          id="phone"
          label="Telefone/WhatsApp"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          placeholder="(16) 99999-9999"
          error={errors.phone}
          registration={register("phone")}
        />
        <Field
          id="email"
          label="E-mail"
          type="email"
          inputMode="email"
          autoComplete="email"
          // An email address is not prose; the red squiggle is only noise here.
          spellCheck={false}
          error={errors.email}
          registration={register("email")}
        />
        <Field
          id="city"
          label="Cidade"
          autoComplete="address-level2"
          error={errors.city}
          registration={register("city")}
        />
        <Field
          id="employees"
          label="Quantidade de funcionários"
          inputMode="numeric"
          placeholder="45"
          error={errors.employees}
          registration={register("employees")}
        />
      </div>

      <div>
        <label htmlFor="service" className={labelClasses}>
          Serviço de interesse
          <RequiredMark />
        </label>
        <select
          id="service"
          defaultValue=""
          className={inputClasses}
          aria-invalid={errors.service ? true : undefined}
          aria-describedby={errors.service ? "service-error" : undefined}
          {...register("service")}
        >
          <option value="" disabled>
            Selecione um serviço
          </option>
          {serviceOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <ErrorMessage id="service-error" error={errors.service} />
      </div>

      <div>
        <label htmlFor="message" className={labelClasses}>
          Mensagem
          <RequiredMark />
        </label>
        <textarea
          id="message"
          rows={4}
          className={inputClasses}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? "message-error" : undefined}
          {...register("message")}
        />
        <ErrorMessage id="message-error" error={errors.message} />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="flex w-full items-center justify-center gap-2 cursor-pointer rounded-lg bg-brand-accent px-6 py-3.5 text-sm font-semibold text-[#0a0c0b] transition-[filter] duration-200 hover:brightness-110 disabled:opacity-60 sm:w-auto"
      >
        {isSubmitting ? (
          <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
        ) : (
          <Send className="h-4 w-4" aria-hidden="true" />
        )}
        Solicitar orçamento
      </button>

      <p className="text-xs leading-relaxed text-graphite/55">
        Ao enviar, sua mensagem é aberta no WhatsApp da CEST já preenchida. Nada
        é armazenado neste site.
      </p>
    </form>
  );
}
