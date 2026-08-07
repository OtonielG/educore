import CountChart from "./components/ui/count-chart";
import Stats from "./components/ui/stats";

export default function Dashboard() {
  return (
    <section className="w-full flex-1 min-h-0 flex flex-col">
      <Stats />
      <div className="w-full flex-1 min-h-0 flex flex-col md:flex-row">
        <div className="w-full lg:w-2/3 p-5">
          <CountChart />
        </div>
        <div className="w-full lg:w-1/3"></div>
      </div>
    </section>
  );
}
