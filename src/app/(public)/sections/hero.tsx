import { GraduationCap, BookOpen, Users, MoveDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="pt-30 lg:pt-30 relative w-full lg:h-dvh">
      <div className="relative h-full flex flex-col items-center justify-center px-4 gap-7 sm:gap-8 md:gap-8 lg:gap-7">
        <h1 className="font-semibold font-bespoke text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-4xl text-center leading-tight">
          Educación que{" "}
          <span className="font-normal text-landing-orange-light">inspira</span>
          , aprendizaje que transforma
        </h1>
        <div className="flex justify-center items-center flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <GraduationCap className="bg-landing-surface p-1 xl:p-2 md:w-8 md:h-8 xl:w-10 xl:h-10 text-landing-orange-light rounded-full shadow-lg" />
            <span className="text-sm sm:text-base font-semibold">
              Formación integral
            </span>
          </div>
          <div className="flex items-center gap-2">
            <BookOpen className="bg-landing-surface p-1 xl:p-2 md:w-8 md:h-8 xl:w-10 xl:h-10 text-landing-orange-light rounded-full shadow-lg" />
            <span className="text-sm sm:text-base font-semibold">
              Docentes comprometidos
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="bg-landing-surface p-1 xl:p-2 md:w-8 md:h-8 xl:w-10 xl:h-10 text-landing-orange-light rounded-full shadow-lg" />
            <span className="text-sm sm:text-base font-semibold">
              Aprendizaje de calidad
            </span>
          </div>
        </div>
        <Image
          src="/images/hero/hero-right-img.avif"
          alt="Ilustración educativa"
          width={1024}
          height={1536}
          className="w-60 md:hidden aspect-auto"
          priority
        />
        <Link
          href="/contact"
          className="inline-flex text-sm md:text-base items-center gap-2 rounded-tl-xl rounded-br-xl lg:rounded-tl-2xl lg:rounded-br-2xl bg-landing-orange px-6 py-2 lg:py-3 font-semibold text-landing-surface -mt-5 md:mt-0 shadow-lg hover:shadow-2xl hover:bg-landing-orange-light transition-all duration-300"
        >
          Háblanos
          <MoveDown className="h-4 w-4" />
        </Link>
        <p className="font-semibold text-sm sm:text-base max-w-sm text-center">
          Educamos con propósito para formar estudiantes preparados para
          afrontar el futuro.
        </p>
        <Image
          src="/images/hero/hero-image.avif"
          alt="Ilustración educativa"
          width={1024}
          height={1024}
          className="h-50 w-50 sm:h-60 sm:w-60 md:h-80 md:w-80 lg:h-70 lg:w-70 animate-floating"
          priority
        />
        <Image
          src="/images/hero/hero-left-img.avif"
          alt="Ilustración educativa"
          width={1024}
          height={1536}
          className="hidden md:block absolute top-2/6 left-1/2 md:ml-[25rem] lg:ml-[27rem] xl:ml-[30rem] -translate-x-1/2 w-80 aspect-auto"
          priority
        />

        <Image
          src="/images/hero/hero-right-img.avif"
          alt="Ilustración educativa"
          width={1024}
          height={1536}
          className="hidden md:block absolute top-2/6 left-1/2 md:-ml-[25rem] lg:-ml-[27rem] xl:-ml-[30rem] -translate-x-1/2 w-80 aspect-auto"
          priority
        />
      </div>
    </section>
  );
}
