import {
  Smartphone,
  Globe,
  Cpu,
} from 'lucide-react';

const services = [
  {
    icon: Smartphone,
    title: 'App Development',
    description:
      'Build fast, scalable, and user-friendly mobile applications for iOS and Android, tailored to your business needs.',
  },
  {
    icon: Globe,
    title: 'Website Development',
    description:
      'Create modern, responsive, and high-performance websites that deliver exceptional user experiences across all devices.',
  },
  {
    icon: Cpu,
    title: 'Tech Solution',
    description:
      'Design and implement custom technology solutions that improve efficiency, automate workflows, and solve complex business challenges.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Our Services</h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Comprehensive digital solutions designed to solve your most pressing challenges
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all hover:shadow-lg group"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 md:w-8 md:h-8 text-primary"/>
              </div>
              <h3 className="mb-3 text-xl md:text-2xl font-semibold">{service.title}</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
