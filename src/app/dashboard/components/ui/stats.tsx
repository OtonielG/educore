import {
  GraduationCap,
  Users,
  CircleCheckBig,
  CircleAlert,
} from "lucide-react";

const stats = [
  {
    label: "Total de estudiantes",
    value: 20,
    icon: Users,
    color: "bg-dashboard-blue",
  },
  {
    label: "Total de maestros",
    value: 8,
    icon: GraduationCap,
    color: "bg-dashboard-orange",
  },
  {
    label: "Estudiantes solventes",
    value: 15,
    icon: CircleCheckBig,
    color: "bg-dashboard-green",
  },
  {
    label: "Estudiantes morosos",
    value: 5,
    icon: CircleAlert,
    color: "bg-dashboard-red",
  },
];

export default function Stats() {
  return (
    <section className="w-full flex flex-wrap justify-between items-center gap-5 pb-5">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.label}
            className={`grow ${stat.color} min-w-[275px] text-dashboard-surface/90 flex flex-col gap-3 p-5 rounded-2xl`}
          >
            <div className="flex gap-3">
              <Icon className="size-6" />
              <span>{stat.label}</span>
            </div>
            <span className="text-3xl font-bold">{stat.value}</span>
          </div>
        );
      })}
    </section>
  );
}
