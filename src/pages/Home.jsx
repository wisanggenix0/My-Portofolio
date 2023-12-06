/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-unused-vars */


import HomeLeft from "../component/HomeLeft";
import HomeRight from "../component/HomeRight";




function Home(dataAOS) {
  console.log(dataAOS)

 

  return (
    <>
      <section id="home" className="pt-36">
        <div className="container">
          <div className="flex flex-wrap justify-evenly">
            
            <HomeLeft/>
            <HomeRight/>

          </div>
        </div>
      </section>
    </>
  );
}

export default Home;