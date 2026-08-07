import {
  LayoutDashboard,
  Users,
  GraduationCap,
  BookOpen,
  Settings,
} from "lucide-react";
import Link from "next/link";

export const menuItems = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Estudiantes",
    href: "/dashboard/students",
    icon: GraduationCap,
  },
  {
    label: "Maestros",
    href: "/dashboard/teachers",
    icon: Users,
  },
  {
    label: "Clases",
    href: "/dashboard/classes",
    icon: BookOpen,
  },
  {
    label: "Configuración",
    href: "/dashboard/settings",
    icon: Settings,
  },
];
export default function Menu() {
  return (
    <nav className="mt-5 flex flex-col gap-6 px-4">
      <span className="hidden sm:block md:text-lg text-center lg:text-start text-gray-400 font-normal">
        MENU
      </span>
      <ul className="flex flex-col gap-6">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <li key={item.label}>
              <Link
                href={item.href}
                className="flex justify-center items-center lg:justify-start text-gray-500 gap-3"
              >
                <Icon className="size-6" />
                <span className="hidden lg:block">{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
