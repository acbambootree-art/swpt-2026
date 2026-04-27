import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Atmosphere from "@/components/Atmosphere";
import Schedule from "@/components/Schedule";
import Venue from "@/components/Venue";
import Rules from "@/components/Rules";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Marquee from "@/components/Marquee";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Marquee />
        <About />
        <Atmosphere />
        <Schedule />
        <Venue />
        <Rules />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
