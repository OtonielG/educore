import Link from "next/link";
import type { RefObject } from "react";

type MobileNavProps = {
  isOpen: boolean;
  navRef: RefObject<HTMLElement | null>;
  onClose: () => void;
};

export default function MobileNav({ isOpen, navRef, onClose }: MobileNavProps) {
  return (
    <nav
      ref={navRef}
      id="mobile-navigation"
      aria-hidden={!isOpen}
      className={`absolute z-40 right-4 top-[110%] w-auto bg-landing-border/95 p-5 lg:hidden rounded-2xl transition-all duration-300 ease-out ${
        isOpen
          ? "translate-y-0 scale-100 opacity-100"
          : "-translate-y-3 scale-95 opacity-0 pointer-events-none"
      }`}
    >
      <ul className="flex flex-col gap-1">
        <li className="w-full">
          <Link
            href="#inicio"
            onClick={onClose}
            className="block w-full px-4 py-1 text-center font-semibold transition-colors duration-300 hover:bg-landing-background rounded-2xl"
          >
            Inicio
          </Link>
        </li>

        <li className="w-full">
          <Link
            href="#acerca-de"
            onClick={onClose}
            className="block w-full px-4 py-1 text-center font-semibold transition-colors duration-300 hover:bg-landing-background rounded-2xl"
          >
            Quiénes somos
          </Link>
        </li>

        <li className="w-full">
          <Link
            href="#nuestro-equipo"
            onClick={onClose}
            className="block w-full px-4 py-1 text-center font-semibold transition-colors duration-300 hover:bg-landing-background rounded-2xl"
          >
            Nuestro Equipo
          </Link>
        </li>
      </ul>
    </nav>
  );
}
