import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import OurWorks from "@/components/OurWorks";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <NavBar />

      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="services">
          <Services />
        </section>

        <section id="works">
          <OurWorks />
        </section>
      </main>

      <Footer />
    </>
  );
}