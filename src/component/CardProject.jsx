/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";

function CardProject({ imgSrc, title, icon }) {
  useEffect(() => {
    showDetail();
  }, []);

  const [translate, setTranslate] = useState("");
  const [toggle, setToggle] = useState(false);
  const icons = [...icon];

  function showDetail() {
    setToggle(!toggle);

    toggle === true ? setTranslate("-translate-x-[1000px]") : setTranslate("");
  }


  console.log(icon)
  return (
    <div className="p-4 md:w-1/3 shadow-inner shadow-secondary rounded backdrop-blur relative overflow-hidden hover:scale-105 transition ease-in-out duration-300 delay-100">
      <img
        src={imgSrc}
        alt=""
        className="w-[600px]  h-auto max-h-[300px] rounded"
      />

      <h3 className="font-semibold text-xl text-dark mt-5 mb-3">{title}</h3>
      <p className="font-medium text-base">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi,
        assumenda?
      </p>
      <button
        className="px-6 py-2 bg-primary mt-2 rounded-full hover:bg-secondary hover:shadow hover:shadow-primary hover:text-background"
        onClick={() => showDetail()}
      >
        Detail
      </button>

      <div
        className={`w-full h-full bg-background bg-opacity-80 backdrop-blur-3xl shadow-inner shadow-secondary absolute top-0 -right-[1000px] ${translate} transition ease-in-out duration-300 delay-100`}
      >
        <button
          className="px-4 py-2 mt-2 hover:text-primary"
          onClick={() => showDetail()}
        >
          <BiArrowBack className="w-6 h-6 " />
        </button>

        <div className=" h-5/6 flex flex-col items-center py-2 gap-2">
          <h4 className="text-2xl font-medium text-primary uppercase pb-4">
            Tech Stack
          </h4>
          <div className="h-4/5 w-full flex flex-wrap justify-center gap-2">
            {icons.map((icon, index) => (
              <div key={index}>{icon}</div>
            ))}
          </div>

          <a
            href="#"
            className="text-base hover:text-primary hover:underline transition ease-in-out duration-300 delay-100 flex justify-center items-center gap-2"
          >
            <p className="font-medium">See this Project</p>
            <BiArrowBack className="rotate-180" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default CardProject;




