"use client";

import { useState } from "react";
import { Zap, ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    title: "Park Here",
    category: "Mobile Application",
    description:
      "A comprehensive parking solution that revolutionizes urban parking management. Users can instantly find available parking spots, book spaces in advance, or navigate to free slots in real-time.",
    features: [
      "Real-time parking availability tracking",
      "Advanced booking system with flexible time slots",
      "GPS navigation to available spots",
      "Pay-as-you-go or subscription models",
      "Smart notifications for booking reminders",
      "Integration with city parking infrastructure",
    ],
    technologies: [
      "React Native",
      "Node.js",
      "Supabase",
      "Google Maps API",
      "Razorpay API",
    ],
    image: "/demo.jpg",
    // Phone screenshot — tall portrait frame, sized like a real device screen
    imageWidth: 300,
    imageHeight: 620,
    frame: "phone",
    link: "#",
  },
  {
    title: "CAFNet",
    category: "AI / Medical Imaging",
    description:
      "An AI system that analyzes lung tissue images to identify different types of lung cancer and distinguish them from healthy tissue. CAFNet combines fine-grained cellular pattern detection with broader tissue architecture analysis to improve the accuracy and consistency of cancer diagnosis.",
    features: [
      "Classification of lung cancer subtypes from tissue images",
      "Differentiates cancerous tissue from healthy tissue",
      "Fine-grained cellular pattern recognition",
      "Broader tissue architecture analysis for context",
      "Designed to support more accurate, consistent diagnosis",
    ],
    technologies: [
      "Python",
      "PyTorch",
      "Convolutional Neural Networks",
      "OpenCV",
      "NumPy",
    ],
    image: "/cafnet.jpeg",
    // Model output / results visualization — near-square, chart-like
    imageWidth: 520,
    imageHeight: 440,
    frame: "panel",
    link: "#",
  },
  {
    title: "Rentora",
    category: "Web Application",
    description:
      "A platform that connects renters and property owners in one place. Property owners can list their available houses with details, while renters can search, view information, and choose a house that suits their needs — designed to be simple and user-friendly so finding a rental is faster and more convenient.",
    features: [
      "Property owners can list houses with full details",
      "Search and browse available rental listings",
      "Detailed house information and view pages",
      "Simple, user-friendly interface for both sides",
      "Streamlined flow for finding and choosing a rental",
    ],
    technologies: [
      "React Native",
      "Node.js",
      "Supabase",
      "PostgreSQL",
    ],
    image: "/rentora.jpeg",
    // Browser screenshot — wide landscape frame
    imageWidth: 640,
    imageHeight: 400,
    frame: "browser",
    link: "#",
  },
];

function ProjectImage({ project }: { project: typeof projects[number] }) {
  const { image, title, imageWidth, imageHeight, frame } = project;

  const commonImgClasses = "w-full h-full object-fill";

  if (frame === "phone") {
    return (
      <div
        className="relative mx-auto w-full rounded-[2rem] border-[6px] border-border bg-background shadow-2xl overflow-hidden"
        style={{
          maxWidth: imageWidth,
          aspectRatio: `${imageWidth} / ${imageHeight}`,
        }}
      >
        <img src={image} alt={`${title} screenshot`} className={commonImgClasses} />
      </div>
    );
  }

  if (frame === "browser") {
    // subtract the toolbar's own height from the ratio so the image area
    // keeps the right proportions regardless of container width
    const toolbarHeight = 33;
    const imageAreaHeight = imageHeight - toolbarHeight;
    return (
      <div
        className="mx-auto w-full rounded-xl border border-border bg-background shadow-2xl overflow-hidden"
        style={{ maxWidth: imageWidth }}
      >
        <div className="flex items-center gap-1.5 px-3 py-2 bg-secondary/60 border-b border-border">
          <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
          <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
          <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
        </div>
        <div style={{ aspectRatio: `${imageWidth} / ${imageAreaHeight}` }}>
          <img src={image} alt={`${title} screenshot`} className={commonImgClasses} />
        </div>
      </div>
    );
  }

  // panel: generic bordered card for diagrams / model outputs / non-app visuals
  return (
    <div
      className="mx-auto w-full rounded-2xl border border-border bg-background shadow-2xl overflow-hidden"
      style={{
        maxWidth: imageWidth,
        aspectRatio: `${imageWidth} / ${imageHeight}`,
      }}
    >
      <img src={image} alt={`${title} visualization`} className={commonImgClasses} />
    </div>
  );
}

export default function WorkPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goPrev = () =>
    setActiveIndex((i) => (i === 0 ? projects.length - 1 : i - 1));
  const goNext = () =>
    setActiveIndex((i) => (i === projects.length - 1 ? 0 : i + 1));

  const project = projects[activeIndex];

  return (
    <section
      id="work"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Our Works
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Innovative digital solutions that solve real-world
            problems
          </p>
        </div>

        <div className="relative">
          <div className="bg-card rounded-xl border border-border overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-8">
              <div className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 p-6 sm:p-8 flex items-center justify-center">
                <div className="w-full flex flex-col items-center">
                  <ProjectImage project={project} />

                  <div className="mt-6 text-center">
                    <h3 className="text-xl md:text-2xl font-semibold">
                      {project.title}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      {project.category}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 md:p-8 lg:p-10 space-y-8">
                <div>
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm mb-4">
                    {project.category}
                  </div>
                  <h2 className="text-2xl md:text-4xl font-bold mb-4">
                    {project.title}
                  </h2>
                  <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div>
                  <h4 className="mb-4 text-lg md:text-xl font-semibold flex items-center gap-2">
                    <Zap className="w-5 h-5 text-primary" />
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="
                          text-sm sm:text-base
                          text-muted-foreground
                          flex items-start
                          gap-3
                          leading-relaxed
                        "
                      >
                        <span className="text-primary mt-1">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="mb-4 text-lg md:text-xl font-semibold">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 bg-secondary rounded-lg text-xs sm:text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Prev / Next arrows (desktop) */}
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous project"
            className="
              hidden sm:flex
              absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4
              items-center justify-center
              w-11 h-11 rounded-full
              bg-card border border-border shadow-lg
              hover:bg-secondary transition-colors
            "
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label="Next project"
            className="
              hidden sm:flex
              absolute right-0 top-1/2 -translate-y-1/2 translate-x-4
              items-center justify-center
              w-11 h-11 rounded-full
              bg-card border border-border shadow-lg
              hover:bg-secondary transition-colors
            "
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile prev/next + dot indicators */}
        <div className="flex items-center justify-center gap-6 mt-8">
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous project"
            className="sm:hidden w-9 h-9 rounded-full bg-card border border-border shadow flex items-center justify-center"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-2">
            {projects.map((p, idx) => (
              <button
                key={p.title}
                type="button"
                onClick={() => setActiveIndex(idx)}
                aria-label={`Go to ${p.title}`}
                className={`
                  h-2.5 rounded-full transition-all duration-300
                  ${idx === activeIndex ? "w-7 bg-primary" : "w-2.5 bg-border hover:bg-muted-foreground/40"}
                `}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={goNext}
            aria-label="Next project"
            className="sm:hidden w-9 h-9 rounded-full bg-card border border-border shadow flex items-center justify-center"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}