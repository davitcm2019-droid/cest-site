"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
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
  "w-full rounded-lg border border-graphite/15 bg-white px-4 py-3 text-sm text-graphite outline-none transition-colors placeholder:text-graphite/40 focus:border-brand focus:ring-2 focus:ring-brand/20";

const labelClasses = "mb-1.5 block text-sm font-medium text-graphite/80";

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
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClasses}>
            Nome
          </label>
          <input id="name" className={inputClasses} {...register("name")} />
          {errors.name && (
            <p className="mt-1.5 text-xs text-red-600">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="company" className={labelClasses}>
            Empresa
          </label>
          <input id="company" className={inputClasses} {...register("company")} />
          {errors.company && (
            <p className="mt-1.5 text-xs text-red-600">{errors.company.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="phone" className={labelClasses}>
            Telefone/WhatsApp
          </label>
          <input id="phone" className={inputClasses} {...register("phone")} />
          {errors.phone && (
            <p className="mt-1.5 text-xs text-red-600">{errors.phone.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="email" className={labelClasses}>
            E-mail
          </label>
          <input id="email" type="email" className={inputClasses} {...register("email")} />
          {errors.email && (
            <p className="mt-1.5 text-xs text-red-600">{errors.email.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="city" className={labelClasses}>
            Cidade
          </label>
          <input id="city" className={inputClasses} {...register("city")} />
          {errors.city && (
            <p className="mt-1.5 text-xs text-red-600">{errors.city.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="employees" className={labelClasses}>
            Quantidade de funcionários
          </label>
          <input id="employees" className={inputClasses} {...register("employees")} />
          {errors.employees && (
            <p className="mt-1.5 text-xs text-red-600">
              {errors.employees.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="service" className={labelClasses}>
          Serviço de interesse
        </label>
        <select
          id="service"
          defaultValue=""
          className={inputClasses}
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
        {errors.service && (
          <p className="mt-1.5 text-xs text-red-600">{errors.service.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className={labelClasses}>
          Mensagem
        </label>
        <textarea
          id="message"
          rows={4}
          className={inputClasses}
          {...register("message")}
        />
        {errors.message && (
          <p className="mt-1.5 text-xs text-red-600">{errors.message.message}</p>
        )}
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
