export default function TeacherListHeader() {
  return (
    <div
      className="
        grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 text-sm font-semibold
        sm:grid-cols-[1.35fr_0.85fr_1.15fr_auto]
        md:grid-cols-[1.35fr_0.65fr_0.8fr_1.1fr_auto]
        lg:grid-cols-[1.25fr_0.55fr_0.75fr_0.75fr_1fr_1.4fr_auto]
        xl:grid-cols-[1.2fr_0.55fr_0.75fr_0.7fr_1fr_1.35fr_0.85fr_auto]
      "
    >
      <span>Nombre completo</span>
      <span className="hidden md:block">Código</span>
      <span className="hidden lg:block">Nacimiento</span>
      <span className="hidden sm:block">Teléfono</span>
      <span className="hidden sm:block">Clase</span>
      <span className="hidden lg:block">Correo</span>
      <span className="hidden xl:block">Género</span>
      <span className="text-center">Acciones</span>
    </div>
  );
}
