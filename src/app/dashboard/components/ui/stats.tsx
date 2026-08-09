"use client";

import {
  GraduationCap,
  Users,
  CircleCheckBig,
  CircleAlert,
} from "lucide-react";
import { useSelector } from "react-redux";

import { useCountUp } from "@/src/hooks/use-count-up";
import { selectStudentsPaymentStatusTotals } from "@/src/store/students/selectors";

export default function Stats() {
  const { solventes, morosos } = useSelector(selectStudentsPaymentStatusTotals);
  const totalStudents = solventes + morosos;
  const animatedTotalStudents = useCountUp(totalStudents);
  const animatedTeachers = useCountUp(8);
  const animatedSolventes = useCountUp(solventes);
  const animatedMorosos = useCountUp(morosos);

  const stats = [
    {
      label: "Total de estudiantes",
      value: animatedTotalStudents,
      icon: Users,
      color: "bg-dashboard-blue",
    },
    {
      label: "Total de maestros",
      value: animatedTeachers,
      icon: GraduationCap,
      color: "bg-dashboard-orange",
    },
    {
      label: "Estudiantes solventes",
      value: animatedSolventes,
      icon: CircleCheckBig,
      color: "bg-dashboard-green",
    },
    {
      label: "Estudiantes morosos",
      value: animatedMorosos,
      icon: CircleAlert,
      color: "bg-dashboard-red",
    },
  ];

  return (
    <section className="w-full flex flex-wrap justify-between items-center gap-5">
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
