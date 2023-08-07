import { useEffect, useRef } from "react";
import Typed from "typed.js";

function HomeLeft() {

  //TYPED JS
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [" Web Developer", "Gamers", "UI/UX Desainer"],
      typeSpeed: 100,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="w-full self-center px-4 lg:w-2/5">
      <h1 className="text-base font-semibold md:text-xl ">
        Yoo 👋, perkenalkan aku{" "}
        <span className="block font-bold text-4xl text-accent mt-1 lg:text-5xl">
          Wisanggeni
        </span>
      </h1>
      <h2 className="font-medium text-lg mb-5 md:text-xl md:mt-2">
        Aku adalah <span ref={el} className="text-accent"></span>
      </h2>
      <p className="text-secondary-light font-medium mb-10 leading-relaxed md:text-md">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, nam?
      </p>

      <a
        href="#"
        className="h-12 w-36 flex justify-center items-center text-base font-semibold bg-accent rounded border border-secondary-light hover:bg-secondary-light  hover:shadow hover:shadow-primary transition ease-in-out duration-300 delay-100"
      >
        Contact Me
      </a>
    </div>
  );
}

export default HomeLeft
