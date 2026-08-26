import Navbar from "./components/Navbar";
import Hero from "./Sections/Hero";
import About from "./Sections/About";
import Skills from "./Sections/Skills";
import Projects from "./Sections/Projects";
import Journey from "./Sections/Journey";
import Certification from "./Sections/Certifications";
import Achievements from "./Sections/Achievements";
import Education from "./Sections/Education";
import Contact from "./Sections/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Navbar />

      <main>
        <section id="home">
          <Hero />
        </section>

        {/* Sections will be added here */}
       <About />
       <Skills />
       <Projects />
       <Journey />
       <Certification />
       <Achievements />
       <Education />
       <Contact />
       </main>
       <Footer />
    </>
  );
}

export default App;