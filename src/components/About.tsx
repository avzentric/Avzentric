import { Target, Users, Trophy, Rocket } from "lucide-react";

const stats = [
  { icon: Users, value: "-", label: "Clients Served" },
  { icon: Trophy, value: "-", label: "Success Rate" },
  { icon: Rocket, value: "-", label: "Projects Delivered" },
  { icon: Target, value: "-", label: "Years Experience" },
];

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Why Choose Avzentric?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
              We're more than just a technology company. We're
              your strategic partner in digital transformation,
              committed to turning your challenges into
              opportunities through innovative solutions.
            </p>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Our team combines technical expertise with
              industry best practices to deliver solutions that
              address today's needs while preparing your
              business for future growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="#work"
                className="
              px-6 py-3
              text-sm sm:text-base
              font-medium
              bg-black/90
              text-white
              hover:bg-black/80
              text-primary-foreground
              border border-border
              rounded-lg
              hover:bg-primary
              transition-colors
              text-center
            "
              >
                Explore Our Work
              </a>

              <a
                href="#contact"
                className="
              px-6 py-3
              text-sm sm:text-base
              font-medium
              border border-border
              rounded-lg
              hover:bg-secondary
              transition-colors
              text-center
            "
              >
                Contact Us
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="
              p-6 md:p-8
              bg-card
              rounded-xl
              border border-border
              text-center
              space-y-3
              hover:border-primary/40
              hover:-translate-y-1
              hover:shadow-lg
              transition-all duration-300
            "
              >
                <div className="w-14 h-14 md:w-16 md:h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                  <stat.icon className="w-7 h-7 md:w-8 md:h-8 text-primary" />
                </div>

                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
                  {stat.value}
                </div>

                <div className="text-xs sm:text-sm md:text-base text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}