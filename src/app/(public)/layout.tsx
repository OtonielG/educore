import "./landing.css";

import Header from "./components/layout/header";
import Footer from "./components/layout/footer";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="landing min-h-screen bg-landing-background text-landing-text overflow-hidden">
      <Header />

      <main className="flex flex-col items-center justify-center gap-12">
        {children}
      </main>

      <Footer />
    </div>
  );
}
