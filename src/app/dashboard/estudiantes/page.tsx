import StudentsToolbar from "./components/students-toolbar";

export default function Estudiantes() {
  return (
    <section className="w-full h-full p-5">
      <div className="bg-dashboard-surface p-5 rounded-3xl">
        <StudentsToolbar />
      </div>
    </section>
  );
}
