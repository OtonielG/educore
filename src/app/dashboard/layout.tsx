import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import Menu from "./components/layout/menu";
import Navbar from "./components/layout/navbar";
import "./dashboard.css";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="dashboard flex h-screen overflow-hidden">
      <aside className="w-1/6 max-w-[240px]">
        <Link href="/dashboard">
          <Image
            src="/educore-logo.avif"
            alt="Educore Logo"
            width={780}
            height={160}
            className="hidden w-full max-w-[160px] px-2 py-3 sm:block"
          />
        </Link>
        <Menu />
      </aside>

      <main className="bg-dashboard-background min-w-0 grow overflow-x-hidden overflow-y-auto">
        <Navbar />
        {children}
      </main>
    </div>
  );
}
