// import { useState, useEffect, useRef } from "react";
import { useState } from "react";
import {FiMenu} from "react-icons/fi"

function Navbar() {

    const [translate, setTranslate] = useState(false);

    const showTab = () => {
      setTranslate(!translate)
    }

  return (
    <>
      <header
        className={`w-full fixed z-50 flex items-center shadow-inner shadow-black backdrop-blur`}
      >
        <div className="container">
          <div className="flex items-center justify-between relative lg:px-20">
            <div className="px-4">
              <a href="#home" className="font-bold text-lg text-primary block py-6">
                Wisanggeni
              </a>
            </div>

            <div className="flex items-center px-4 md:hidden">
              <button onClick={() => showTab()}>
                <FiMenu className="w-6 h-6 text-secondary hover:text-primary transition ease-in-out duration-300 delay-100" />
              </button>
            </div>

            <div className={`absolute bg-background shadow shadow-white w-full top-20 rounded transition ease-in-out duration-300 ${translate ? "translate-y-0" : "-translate-y-96"} flex flex-col gap-2 items-center py-6 md:static md:translate-y-0 md:flex-row md:justify-end md:gap-12 md:bg-transparent md:shadow-none md:py-0`}>
              <a href="#home" className="navigationStyle">Home</a>
              <a href="#about" className="navigationStyle">About</a>
              <a href="#skills" className="navigationStyle">Skills</a>
              <a href="#projects" className="navigationStyle">Projects</a>
              <a href="#contact" className="navigationStyle">Contact</a>
            </div>
            
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar
