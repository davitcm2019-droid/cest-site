import type { Service } from "@/data/services";
import { ServiceCard } from "@/components/ServiceCard";

export function HorizontalServicesScroll({ services }: { services: Service[] }) {
  return (
    <>
      <div className="relative hidden lg:block">
        <div className="overflow-x-auto pb-4">
          <div className="flex w-max gap-6 px-[6vw]">
            {services.map((service) => (
              <div key={service.slug} className="w-[340px] shrink-0">
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
        </div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-mist to-transparent" />
      </div>

      <div className="grid grid-cols-1 gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:hidden">
        {services.map((service, index) => (
          <ServiceCard key={service.slug} service={service} delay={index * 0.05} />
        ))}
      </div>
    </>
  );
}
