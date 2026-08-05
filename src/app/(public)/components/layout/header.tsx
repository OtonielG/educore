import { Menu, X } from "lucide-react";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 h-20 flex justify-center items-center backdrop-blur">
      <div className="relative w-full max-w-360 h-full flex items-center justify-between gap-5 px-4 sm:px-6 lg:px-8">
        <Image
          src="/educore-logo.png"
          alt="EduCore"
          width={780}
          height={160}
          className="h-6 sm:h-7 md:h-8 xl:h-10 w-auto hover:scale-90 transition-transform duration-300 cursor-pointer"
          priority
        />

        <nav className="hidden grow lg:flex items-center justify-center">
          <ul className="flex items-center justify-center lg:gap-8 xl:gap-12">
            <li>
              <Link
                href="/"
                className="relative font-semibold after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-landing-orange-light after:transition-all after:duration-300 hover:after:w-full"
              >
                Inicio
              </Link>
            </li>

            <li>
              <Link
                href="/about"
                className="relative font-semibold after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-landing-orange-light after:transition-all after:duration-300 hover:after:w-full"
              >
                Quiénes somos
              </Link>
            </li>

            <li>
              <Link
                href="/academic-levels"
                className="relative font-semibold after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-landing-orange-light after:transition-all after:duration-300 hover:after:w-full"
              >
                Niveles académicos
              </Link>
            </li>

            <li>
              <Link
                href="/management-system"
                className="relative font-semibold after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-landing-orange-light after:transition-all after:duration-300 hover:after:w-full"
              >
                Sistema de gestión
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="font-semibold px-4 py-1 sm:px-5 md:px-6 md:py-2 xl:px-7 xl:py-3 bg-landing-surface border-2 border-landing-text outline-none rounded-tl-none rounded-tr-xl rounded-br-none rounded-bl-xl md:rounded-tl-none md:rounded-tr-2xl md:rounded-br-none md:rounded-bl-2xl xl:rounded-tl-none xl:rounded-tr-3xl xl:rounded-br-none xl:rounded-bl-3xl hover:bg-landing-text hover:text-landing-surface transition-all duration-300"
          >
            Contacto
          </Link>
          <Menu className="h-6 sm:h-7 sm:w-7 md:h-8 md:w-8 lg:hidden" />
        </div>
        <div className="absolute inset-x-4 bottom-0 h-px bg-landing-text/30 sm:inset-x-6 lg:inset-x-8" />
      </div>
    </header>
  );
}
