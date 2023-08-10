import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./component/Navbar";

function App() {
      
  return (
    <div className=" text-accent">
      <Navbar/>
      <Home/>
      <About/>
    </div>
  );
}

export default App;
