import Image from "next/image";

const teamMembers = [
  {
    name: "Carla",
    image: "/images/our-team/maestra-carla.avif",
    message:
      "Apasionada por enseñar y acompañar el crecimiento de cada estudiante.",
    backgroundColor: "bg-landing-orange",
    textColor: "text-landing-orange",
  },
  {
    name: "Marvin",
    image: "/images/our-team/profesor-marvin.avif",
    message: "Comprometido con crear clases dinámicas y llenas de aprendizaje.",
    backgroundColor: "bg-landing-yellow",
    textColor: "text-landing-yellow",
  },
  {
    name: "Silvia",
    image: "/images/our-team/maestra-silvia.avif",
    message:
      "Dedicada a inspirar confianza, creatividad y curiosidad en el aula.",
    backgroundColor: "bg-landing-green",
    textColor: "text-landing-green",
  },
  {
    name: "Sergio",
    image: "/images/our-team/profesor-sergio.avif",
    message:
      "Enfocado en ayudar a cada estudiante a alcanzar su máximo potencial.",
    backgroundColor: "bg-landing-blue",
    textColor: "text-landing-blue",
  },
];

export default function OurTeam() {
  return (
    <section id="nuestro-equipo" className="scroll-mt-24 w-full">
      <ul className="grid grid-cols-1 gap-10 px-4 sm:grid-cols-2 xl:grid-cols-4 xl:px-20">
        {teamMembers.map((member) => (
          <li key={member.name}>
            <article className="flex flex-col items-center text-center">
              <div
                className={`overflow-hidden rounded-full ${member.backgroundColor}`}
              >
                <Image
                  src={member.image}
                  alt={`Fotografía de ${member.name}`}
                  width={500}
                  height={500}
                  className="h-60 w-60 object-cover"
                />
              </div>

              <h3
                className={`mt-4 font-bespoke text-xl font-semibold ${member.textColor}`}
              >
                {member.name}
              </h3>

              <p className="mt-2 text-sm text-gray-600 max-w-[240px]">
                {member.message}
              </p>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
