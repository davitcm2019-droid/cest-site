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
import { CheckCircle2, Loader2, Send } from "lucide-react";
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

const schema = z.object({
  name: z.string().min(2, "Informe seu nome completo"),
  company: z.string().min(2, "Informe o nome da empresa"),
  phone: z.string().min(8, "Informe um telefone válido"),
  email: z.string().email("Informe um e-mail válido"),
  city: z.string().min(2, "Informe a cidade"),
  employees: z.string().min(1, "Informe a quantidade de funcionários"),
  service: z.string().min(1, "Selecione um serviço"),
  message: z.string().min(10, "Conte um pouco mais sobre sua necessidade"),
});

type FormData = z.infer<typeof schema>;

const inputClasses =
  "w-full rounded-lg border border-graphite/15 bg-white px-4 py-3 text-sm text-graphite outline-none transition-colors placeholder:text-graphite/40 focus:border-brand focus:ring-2 focus:ring-brand/20 aria-[invalid=true]:border-red-500";

const labelClasses = "mb-1.5 block text-sm font-medium text-graphite/80";

function RequiredMark() {
  return (
    <span className="text-red-600" aria-hidden="true">
      {" "}
      *
    </span>
  );
}

function ErrorMessage({ id, error }: { id: string; error?: FieldError }) {
  if (!error) return null;
  return (
    <p id={id} role="alert" className="mt-1.5 text-xs text-red-600">
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

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
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

    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center rounded-2xl border border-brand/20 bg-mist px-6 py-14 text-center">
        <CheckCircle2 className="h-12 w-12 text-brand" />
        <h3 className="mt-4 text-lg font-bold text-brand-dark">
          Solicitação enviada
        </h3>
        <p className="mt-2 max-w-sm text-sm text-graphite/70">
          Abrimos o WhatsApp com sua mensagem pronta. Caso a janela não tenha
          aberto, confira o bloqueador de pop-ups do navegador.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm font-semibold text-brand hover:text-brand-dark"
        >
          Enviar nova solicitação
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="space-y-5 rounded-2xl border border-graphite/10 bg-white p-6 sm:p-8"
    >
      <p className="text-xs text-graphite/60">
        Campos marcados com <span className="text-red-600">*</span> são
        obrigatórios.
      </p>

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
          error={errors.phone}
          registration={register("phone")}
        />
        <Field
          id="email"
          label="E-mail"
          type="email"
          inputMode="email"
          autoComplete="email"
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
        className="flex w-full items-center justify-center gap-2 rounded-full bg-brand-dark px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand disabled:opacity-60 sm:w-auto"
      >
        {isSubmitting ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <Send className="h-4 w-4" />
        )}
        Solicitar orçamento
      </button>
    </form>
  );
}
