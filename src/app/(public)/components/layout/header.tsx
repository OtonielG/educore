"use client";

import { Menu, X } from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import MobileNav from "../mobile-nav";

export default function Header() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const mobileNavRef = useRef<HTMLElement | null>(null);
  const mobileNavButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!isMobileNavOpen) return;

    const handleOutsideClick = (event: PointerEvent) => {
      const target = event.target;

      if (!(target instanceof Node)) return;

      if (
        mobileNavRef.current?.contains(target) ||
        mobileNavButtonRef.current?.contains(target)
      ) {
        return;
      }

      setIsMobileNavOpen(false);
    };

    document.addEventListener("pointerdown", handleOutsideClick);

    return () => {
      document.removeEventListener("pointerdown", handleOutsideClick);
    };
  }, [isMobileNavOpen]);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 1024px)");

    const handleDesktopChange = () => {
      if (desktopQuery.matches) {
        setIsMobileNavOpen(false);
      }
    };

    handleDesktopChange();
    desktopQuery.addEventListener("change", handleDesktopChange);

    return () => {
      desktopQuery.removeEventListener("change", handleDesktopChange);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-20 flex justify-center items-center backdrop-blur">
      <div className="relative w-full max-w-360 h-full flex items-center justify-between gap-5 px-4 sm:px-6 lg:px-8">
        <Image
          src="/educore-logo.avif"
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
                href="#inicio"
                className="relative font-semibold after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-landing-orange-light after:transition-all after:duration-300 hover:after:w-full"
              >
                Inicio
              </Link>
            </li>

            <li>
              <Link
                href="#acerca-de"
                className="relative font-semibold after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-landing-orange-light after:transition-all after:duration-300 hover:after:w-full"
              >
                Quiénes somos
              </Link>
            </li>

            <li>
              <Link
                href="#niveles-academicos"
                className="relative font-semibold after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-landing-orange-light after:transition-all after:duration-300 hover:after:w-full"
              >
                Niveles académicos
              </Link>
            </li>

            <li>
              <Link
                href="#sistema-de-gestion"
                className="relative font-semibold after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-landing-orange-light after:transition-all after:duration-300 hover:after:w-full"
              >
                Sistema de gestión
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="#contacto"
            className="font-semibold px-4 py-1 sm:px-5 md:px-6 md:py-2 xl:px-7 xl:py-3 bg-landing-surface border-2 border-landing-text outline-none rounded-tl-none rounded-tr-xl rounded-br-none rounded-bl-xl md:rounded-tl-none md:rounded-tr-2xl md:rounded-br-none md:rounded-bl-2xl xl:rounded-tl-none xl:rounded-tr-3xl xl:rounded-br-none xl:rounded-bl-3xl hover:bg-landing-text hover:text-landing-surface transition-all duration-300"
          >
            Contacto
          </Link>
          <button
            ref={mobileNavButtonRef}
            type="button"
            aria-label={
              isMobileNavOpen
                ? "Cerrar menu de navegacion"
                : "Abrir menu de navegacion"
            }
            aria-controls="mobile-navigation"
            aria-expanded={isMobileNavOpen}
            onClick={() => setIsMobileNavOpen((isOpen) => !isOpen)}
            className="relative grid h-8 w-8 place-items-center lg:hidden"
          >
            <Menu
              aria-hidden="true"
              className={`absolute h-6 w-6 transition-all duration-300 sm:h-7 sm:w-7 md:h-8 md:w-8 ${
                isMobileNavOpen
                  ? "rotate-90 scale-75 opacity-0"
                  : "rotate-0 scale-100 opacity-100"
              }`}
            />
            <X
              aria-hidden="true"
              className={`absolute h-6 w-6 transition-all duration-300 sm:h-7 sm:w-7 md:h-8 md:w-8 ${
                isMobileNavOpen
                  ? "rotate-0 scale-100 opacity-100"
                  : "-rotate-90 scale-75 opacity-0"
              }`}
            />
          </button>
        </div>
        <div className="absolute inset-x-4 bottom-0 h-px bg-landing-text/30 sm:inset-x-6 lg:inset-x-8" />
        <MobileNav
          isOpen={isMobileNavOpen}
          navRef={mobileNavRef}
          onClose={() => setIsMobileNavOpen(false)}
        />
      </div>
    </header>
  );
}
