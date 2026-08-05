import "./landing.css";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="landing min-h-screen bg-landing-background text-landing-text">
      {/* <Header /> */}

      <main>{children}</main>

      {/* <Footer /> */}
    </div>
  );
}
