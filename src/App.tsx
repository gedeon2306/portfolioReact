import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <div className="p-5 md:px-[10%]">
        <NavBar />
        <Home/>
      </div>
      <About/> 
      <div className="p-5 md:px-[10%]">
        <Skills/>
      </div>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
