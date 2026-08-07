import CountChart from "./components/ui/count-chart";
import Stats from "./components/ui/stats";

export default function Dashboard() {
  return (
    <section className="w-full flex flex-col p-5 lg:flex-1 lg:min-h-0">
      <Stats />
      <div className="w-full flex flex-col md:flex-row lg:flex-1 lg:min-h-0">
        <div className="w-full lg:w-2/3">
          <CountChart />
        </div>
        <div className="w-full lg:w-1/3"></div>
      </div>
    </section>
  );
}
