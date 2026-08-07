import CountChart from "./components/ui/count-chart";
import Stats from "./components/ui/stats";

export default function Dashboard() {
  return (
    <section className="w-full h-[1000px]">
      <Stats />
      <div className="w-full h-full flex flex-col md:flex-row">
        <div className="w-full h-full lg:w-2/3 p-5">
          <CountChart />
        </div>
        <div className="w-full h-full lg:w-1/3"></div>
      </div>
    </section>
  );
}
