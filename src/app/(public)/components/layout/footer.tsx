import Image from "next/image";
import Link from "next/link";
import { GraduationCap, BookOpenCheck, Building2 } from "lucide-react";

const footerLinks = [
  {
    label: "Inicio",
    href: "#inicio",
  },
  {
    label: "Quiénes somos",
    href: "#acerca-de",
  },
  {
    label: "Niveles académicos",
    href: "#niveles-academicos",
  },
  {
    label: "Sistema de gestión",
    href: "/dashboard",
  },
];

const footerStats = [
  {
    value: "120+",
    label: "Docentes activos",
    icon: GraduationCap,
  },
  {
    value: "8,000+",
    label: "Clases completadas",
    icon: BookOpenCheck,
  },
  {
    value: "25+",
    label: "Instituciones asociadas",
    icon: Building2,
  },
];

export default function Footer() {
  return (
    <footer className="mt-10 bg-landing-text text-landing-surface">
      <div className="mx-auto flex w-full max-w-360 flex-col gap-10 px-6 py-12 sm:px-10">
        {/* Desktop */}
        <div className="hidden w-full justify-between lg:flex lg:gap-14 xl:gap-25">
          <section
            aria-labelledby="footer-brand-desktop"
            className="flex items-start"
          >
            <h2 id="footer-brand-desktop" className="sr-only">
              Educore
            </h2>

            <Image
              src="/educore-logo-claro.avif"
              alt="Logo de Educore"
              width={780}
              height={160}
              className="h-12 w-auto"
            />
          </section>

          <nav
            aria-labelledby="footer-links-desktop"
            className="flex flex-col gap-2"
          >
            <h2
              id="footer-links-desktop"
              className="font-serif font-semibold text-landing-orange"
            >
              Explora Educore
            </h2>

            <ul className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <section
            aria-labelledby="footer-stats-desktop"
            className="flex flex-col gap-3"
          >
            <h2
              id="footer-stats-desktop"
              className="font-serif font-semibold text-landing-orange"
            >
              Educore en cifras
            </h2>

            <ul className="flex flex-col gap-3">
              {footerStats.map((stat) => {
                const Icon = stat.icon;

                return (
                  <li key={stat.label} className="flex items-center gap-2">
                    <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />

                    <span className="text-sm">
                      <strong>{stat.value}</strong> {stat.label}
                    </span>
                  </li>
                );
              })}
            </ul>
          </section>
        </div>

        {/* Mobile y tablet */}
        <div className="flex flex-col gap-8 lg:hidden">
          <section
            aria-labelledby="footer-brand-mobile"
            className="flex items-start"
          >
            <h2 id="footer-brand-mobile" className="sr-only">
              Educore
            </h2>

            <Image
              src="/educore-logo-claro.avif"
              alt="Logo de Educore"
              width={780}
              height={160}
              className="h-8 w-auto"
            />
          </section>

          <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between md:gap-0">
            <nav
              aria-labelledby="footer-links-mobile"
              className="flex flex-col gap-2"
            >
              <h2
                id="footer-links-mobile"
                className="font-serif font-semibold text-landing-orange"
              >
                Explora Educore
              </h2>

              <ul className="flex flex-col gap-2">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm hover:underline">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <section
              aria-labelledby="footer-stats-mobile"
              className="flex flex-col gap-3"
            >
              <h2
                id="footer-stats-mobile"
                className="font-serif font-semibold text-landing-orange"
              >
                Educore en cifras
              </h2>

              <ul className="flex flex-col gap-3">
                {footerStats.map((stat) => {
                  const Icon = stat.icon;

                  return (
                    <li key={stat.label} className="flex items-center gap-2">
                      <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />

                      <span className="text-sm">
                        <strong>{stat.value}</strong> {stat.label}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </section>
          </div>
        </div>

        <div className="h-px w-full bg-landing-orange" aria-hidden="true" />

        <p className="text-center text-sm">Hecho con ❤️ por Otoniel G.</p>
      </div>
    </footer>
  );
}
