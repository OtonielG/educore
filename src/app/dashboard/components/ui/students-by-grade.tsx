const studentsByGrade = [
  {
    grade: "1.º básico",
    students: 16,
    percentage: 45.71,
    color: "bg-dashboard-blue",
    background: "bg-blue-100",
  },
  {
    grade: "2.º básico",
    students: 11,
    percentage: 31.43,
    color: "bg-dashboard-orange",
    background: "bg-orange-100",
  },
  {
    grade: "3.º básico",
    students: 8,
    percentage: 22.86,
    color: "bg-dashboard-green",
    background: "bg-green-100",
  },
];

export default function StudentsByGrade() {
  return (
    <section className="w-full rounded-3xl bg-dashboard-surface p-5 shadow-[inset_0_3px_8px_rgba(0,0,0,0.12),inset_0_-1px_3px_rgba(255,255,255,0.55)]">
      <h2 className="mb-3 font-bespoke font-semibold">Estudiantes por grado</h2>

      <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3 lg:grid-cols-1">
        {studentsByGrade.map((item) => (
          <article
            key={item.grade}
            className={`rounded-2xl border border-dashboard-border px-4 py-3 ${item.background}`}
          >
            <div className="flex items-center justify-between gap-3">
              <div className="min-w-0">
                <h3 className="font-semibold">{item.grade}</h3>

                <p className="text-xs text-dashboard-text-muted">
                  {item.students} estudiantes
                </p>
              </div>

              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white/75 text-sm font-bold">
                {item.students}
              </span>
            </div>

            <div className="mt-2">
              <div className="mb-1 flex items-center justify-between text-xs text-dashboard-text-muted">
                <span>Distribución</span>
                <span>{item.percentage.toFixed(2)}%</span>
              </div>

              <div className="h-2 w-full overflow-hidden rounded-full bg-white/70">
                <div
                  className={`h-full rounded-full ${item.color}`}
                  style={{ width: `${item.percentage}%` }}
                />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
