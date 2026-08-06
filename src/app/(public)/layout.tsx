import "./landing.css";

import Header from "./components/layout/header";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="landing min-h-screen bg-landing-background text-landing-text overflow-hidden">
      <Header />

      <main className="flex flex-col items-center justify-center">
        {children}
      </main>

      {/* <Footer /> */}
    </div>
  );
}
