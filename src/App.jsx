import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./component/Navbar";
import MySkills from "./pages/MySkills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";

function App() {
      
  return (
    <>
    
      <Navbar/>
      <Home/>
      <About/>
      <MySkills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
