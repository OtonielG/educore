"use client";

import { RadialBarChart, RadialBar } from "recharts";
import Image from "next/image";

const data = [
  {
    name: "Total",
    count: 20,
    fill: "white",
  },
  {
    name: "Hombres",
    count: 12,
    fill: "oklch(88.2% 0.059 254.128)",
  },
  {
    name: "Mujeres",
    count: 8,
    fill: "oklch(88.5% 0.062 18.334)",
  },
];

export default function CountChart() {
  return (
    <article className="bg-dashboard-surface w-full flex flex-col justify-center items-center gap-5 lg:w-1/3 rounded-3xl p-4">
      <div>
        <h2 className="font-semibold font-bespoke">Estudiantes</h2>
      </div>
      <div className="relative w-full">
        <RadialBarChart
          responsive
          cx="50%"
          cy="50%"
          innerRadius="20%"
          outerRadius="100%"
          barSize={30}
          data={data}
          style={{ width: "100%", aspectRatio: 1 }}
        >
          <RadialBar background dataKey="count" />
        </RadialBarChart>
        <Image
          src="/images/dashboard/icono-genero-estudiantes.avif"
          alt="Icono de genero de estudiantes"
          width={666}
          height={700}
          className="absolute w-[20%] h-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      <div className="flex justify-center items-center gap-12 lg:gap-7">
        <div className="flex flex-col gap-1">
          <div className="h-5 w-5 bg-blue-200 rounded-full" />
          <span className="font-bold">12</span>
          <span className="text-sm text-gray-400">Hombres (60%)</span>
        </div>
        <div className="flex flex-col gap-1">
          <div className="h-5 w-5 bg-red-200 rounded-full" />
          <span className="font-bold">8</span>
          <span className="text-sm text-gray-400">Mujeres (40%)</span>
        </div>
      </div>
    </article>
  );
}
