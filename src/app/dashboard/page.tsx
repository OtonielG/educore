import CountChart from "./components/ui/count-chart";
import EventCalendar from "./components/ui/event-calendar";
import Stats from "./components/ui/stats";
import TopStudents from "./components/ui/top-students";

export default function Dashboard() {
  return (
    <section className="w-full flex flex-1 flex-col gap-5 p-5">
      <Stats />
      <div className="w-full h-full flex flex-col gap-5">
        <div className="w-full flex flex-col lg:flex-row gap-5">
          <div className="w-full h-full lg:w-1/5 bg-green-100 rounded-3xl">
            <CountChart />
          </div>
          <div className="w-full h-full lg:w-2/5 bg-dashboard-surface rounded-3xl"></div>
          <div className="w-full h-full lg:w-2/5 rounded-3xl">
            <EventCalendar />
          </div>
        </div>
        <div className="w-full flex flex-col lg:flex-row gap-5">
          <div className="w-full h-full lg:w-3/5 rounded-3xl">
            <TopStudents />
          </div>
          <div className="w-full h-full lg:w-2/5 bg-red-100 rounded-3xl"></div>
        </div>
      </div>
    </section>
  );
}
