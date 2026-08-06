import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section
      id="acerca-de"
      className="scroll-mt-24 relative w-full flex flex-col lg:flex-row gap-5 lg:gap-0 overflow-hidden bg-[url('/images/about/shape-bg.avif')] bg-[length:100%_auto] bg-bottom bg-no-repeat"
    >
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start gap-7 z-10 px-4 sm:px-8 lg:px-25 xl:px-30 2xl:px-40">
        <h2 className="relative font-bespoke font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl after:absolute after:-bottom-2 md:after:-bottom-4 lg:after:-bottom-3 xl:after:-bottom-5 after:left-0 after:h-1 after:w-full lg:after:w-2/3 after:rounded-full after:bg-landing-orange md:mb-4 lg:mb-0 xl:mb-6">
          Quiénes somos
        </h2>
        <p className="italic text-center lg:text-start text-base xl:text-lg max-w-md">
          En Educore creemos que la educación debe ser accesible, organizada y
          cercana para todos. Nuestra plataforma conecta estudiantes, docentes e
          instituciones en un solo espacio, facilitando el aprendizaje y la
          gestión académica.
        </p>
        <Link
          href="/dashboard"
          className="inline-flex w-fit text-sm md:text-base items-center gap-2 rounded-tl-xl rounded-br-xl lg:rounded-tl-2xl lg:rounded-br-2xl bg-landing-orange px-6 py-2 lg:py-3 font-semibold text-landing-surface shadow-lg hover:shadow-2xl hover:bg-landing-orange-light transition-all duration-300"
        >
          Abrir Sistema
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="w-full lg:w-1/2 z-10">
        <Image
          src="/images/about/about-illustration.avif"
          alt="Logo de Educore"
          width={1536}
          height={1024}
          className="h-auto w-full"
        />
      </div>
    </section>
  );
}
