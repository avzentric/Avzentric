export default function Hero() {
  return (
    <section id="home" className="pt-24 md:pt-32 pb-16 md:pb-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-6 md:space-y-8">

          <div className="inline-flex items-center gap-2 px-3 py-2 md:px-4 rounded-full border border-border text-sm sm:text-base md:text-lg font-medium text-secondary-foreground bg-white">
            <img
              src='avzentriclogo.jpeg'
              alt="Avzentric"
              className="w-9 h-7 md:w-13 md:h-9"
            />

            <span className="text-xs sm:text-sm md:text-base text-secondary-foreground">
              Transforming Businesses Through Digital Innovation
            </span>
          </div>

          <h1 className="max-w-4xl mx-auto leading-tight font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Solving Complex Problems with{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Digital Excellence
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-muted-foreground leading-relaxed text-base sm:text-lg md:text-xl">
            Avzentric empowers organizations to overcome challenges through
            innovative digital solutions, streamlined processes, and
            cutting-edge technology.
          </p>

        </div>
      </div>
    </section>
  );
}
