import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Incident from "../components/Incident";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="page">
      <Navbar />
      <main id="top">
        <Hero />
        <About />
        <Incident />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
