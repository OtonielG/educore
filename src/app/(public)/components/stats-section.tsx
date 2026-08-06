import { GraduationCap, BookCheck, Building2 } from "lucide-react";

const stats = [
  {
    value: "120+",
    label: "Docentes activos en nuestra comunidad",
    icon: GraduationCap,
    color: "bg-landing-orange",
  },
  {
    value: "8,000+",
    label: "Clases completadas por estudiantes",
    icon: BookCheck,
    color: "bg-landing-yellow",
  },
  {
    value: "25+",
    label: "Instituciones educativas asociadas",
    icon: Building2,
    color: "bg-landing-green",
  },
];

export default function StatsSection() {
  return (
    <section className="flex flex-wrap justify-center items-center gap-8 lg:gap-10 max-w-7xl px-4 sm:px-16 md:px-7 mt-10 lg:mt-0">
      {stats.map((stat, index) => (
        <div
          key={stat.label}
          className={`bg-landing-text flex items-center w-[330px] text-landing-surface py-7 rounded-bl-[40px] rounded-tr-[50px] md:mx-0 ${
            index % 2 === 0
              ? "mr-auto animate-from-left"
              : "ml-auto animate-from-right"
          }`}
        >
          <div className="w-1/3 self-start flex justify-end px-5">
            <stat.icon
              className={`size-10 ${stat.color} p-2 rounded-bl-[10px] rounded-tr-[10px]`}
            />
          </div>

          <div className="flex flex-col gap-2">
            <span className="font-bespoke text-3xl font-semibold">
              {stat.value}
            </span>
            <span className="text-sm max-w-[180px]">{stat.label}</span>
          </div>
        </div>
      ))}
    </section>
  );
}
