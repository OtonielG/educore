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

      <main>{children}</main>

      {/* <Footer /> */}
    </div>
  );
}
