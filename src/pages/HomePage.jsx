import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";

export default function HomePage() {
  return (
    <>
      <main className="    m-4 ">
        <Navbar />
        <Hero />
        <Projects/>
      </main>
    </>
  );
}
