"use client";

import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";
import Image from "next/image";

const data = [
  {
    name: "Total",
    count: 35,
    fill: "white",
  },
  {
    name: "Hombres",
    count: 19,
    fill: "oklch(88.2% 0.059 254.128)",
  },
  {
    name: "Mujeres",
    count: 16,
    fill: "oklch(88.5% 0.062 18.334)",
  },
];

export default function CountChart() {
  return (
    <article className="bg-dashboard-surface w-full h-auto lg:h-full min-w-0 flex flex-col justify-center items-center gap-5 rounded-3xl p-4 shadow-[inset_0_3px_8px_rgba(0,0,0,0.12),inset_0_-1px_3px_rgba(255,255,255,0.55)]">
      <div className="shrink-0">
        <h2 className="font-semibold font-bespoke">Estudiantes</h2>
      </div>

      <div className="relative w-[clamp(110px,70%,220px)] aspect-square shrink-0">
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="20%"
            outerRadius="100%"
            barSize={30}
            data={data}
          >
            <RadialBar background dataKey="count" />
          </RadialBarChart>
        </ResponsiveContainer>

        <Image
          src="/images/dashboard/icono-genero-estudiantes.avif"
          alt="Icono de genero de estudiantes"
          width={666}
          height={700}
          className="absolute w-[20%] h-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>

      <div className="flex justify-center gap-12 lg:gap-4">
        <div className="flex flex-col items-start gap-1">
          <div className="h-5 w-5 bg-blue-200 rounded-full" />

          <span className="font-bold">19</span>

          <span className="text-xs sm:text-sm text-gray-400 leading-snug">
            Hombres <span className="whitespace-nowrap">(54.29%)</span>
          </span>
        </div>

        <div className="flex flex-col items-start gap-1">
          <div className="h-5 w-5 bg-red-200 rounded-full" />

          <span className="font-bold">16</span>

          <span className="text-xs sm:text-sm text-gray-400 leading-snug">
            Mujeres <span className="whitespace-nowrap">(45.71%)</span>
          </span>
        </div>
      </div>
    </article>
  );
}
