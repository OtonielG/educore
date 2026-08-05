import { GraduationCap, BookOpen, Users, MoveDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="pt-30 lg:pt-20 relative w-full lg:h-dvh">
      <div className="h-full flex flex-col items-center justify-center px-4 gap-7 sm:gap-8 md:gap-8">
        <h1 className="font-semibold font-bespoke text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-4xl text-center leading-snug">
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
        <Link
          href="/contact"
          className="inline-flex text-sm md:text-base items-center gap-2 rounded-tl-xl rounded-br-xl lg:rounded-tl-2xl lg:rounded-br-2xl bg-landing-orange px-6 py-2 lg:py-3 font-semibold text-landing-surface"
        >
          Háblanos
          <MoveDown className="h-4 w-4" />
        </Link>
        <p className="font-semibold text-sm sm:text-base max-w-sm text-center">
          Educamos con propósito para formar estudiantes preparados para
          afrontar el futuro.
        </p>
        <Image
          src="/images/hero/hero-image.png"
          alt="Ilustración educativa"
          width={1024}
          height={1024}
          className="h-50 w-50 sm:h-60 sm:w-60 md:h-80 md:w-80 lg:h-70 lg:w-70"
          priority
        />
      </div>
    </section>
  );
}
