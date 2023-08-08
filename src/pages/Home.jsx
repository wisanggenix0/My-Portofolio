/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-unused-vars */

import Aos from "aos";
import "aos/dist/aos.css"; 
import HomeLeft from "../component/HomeLeft";
import HomeRight from "../component/HomeRight";





function Home() {
  //AOS
  Aos.init();

 

  return (
    <>
      <section id="home" className="pt-36">
        <div className="container">
          <div className="flex flex-wrap justify-evenly">
            
            <HomeLeft />
            <HomeRight/>

          </div>
        </div>
      </section>
    </>
  );
}

export default Home;