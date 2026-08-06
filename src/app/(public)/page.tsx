import Hero from "./sections/hero";
import StatsSection from "./components/stats-section";
import About from "./sections/about";
import OurTeam from "./sections/our-team";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsSection />
      <About />
      <OurTeam />
    </>
  );
}
