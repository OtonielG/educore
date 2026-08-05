export default function Hero() {
  return (
    <section className="pt-30 lg:pt-20 relative w-full lg:h-dvh">
      <div className="h-full flex flex-col items-center justify-center px-4 md:gap-8 lg:gap-0">
        <h1 className="font-semibold font-bespoke text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl max-w-sm sm:max-w-md md:max-w-xl lg:max-w-3xl xl:max-w-4xl text-center leading-snug">
          Educación que{" "}
          <span className="font-normal text-landing-orange-light">inspira</span>
          , aprendizaje que transforma
        </h1>
      </div>
    </section>
  );
}
