export default function StudentListHeader() {
  return (
    <div
      className="
        grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 text-sm font-semibold
        sm:grid-cols-[1.5fr_0.9fr_1fr_0.6fr]
        md:grid-cols-[1.5fr_0.7fr_0.8fr_1fr_0.6fr]
        lg:grid-cols-[1.5fr_0.7fr_0.9fr_0.8fr_1fr_0.6fr_0.6fr]
        xl:grid-cols-[1.5fr_0.7fr_0.9fr_0.8fr_1fr_0.6fr_0.7fr_0.6fr]
      "
    >
      <span>Nombre completo</span>
      <span className="hidden md:block">Código</span>
      <span className="hidden lg:block">Nacimiento</span>
      <span className="hidden sm:block">Teléfono</span>
      <span className="hidden sm:block">Grado</span>
      <span className="hidden lg:block">Promedio</span>
      <span className="hidden xl:block">Género</span>
      <span className="text-center">Acciones</span>
    </div>
  );
}
