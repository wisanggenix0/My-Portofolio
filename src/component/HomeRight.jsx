/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-target-blank */
import myPhoto from "../assets/images/Wisanggeni.png";
import blob from "../assets/svg/blob.svg";
// import { FiFacebook, FiInstagram, FiGithub } from "react-icons/fi";





function HomeRight() {
  return (
    <div className="w-full px-4 self-end lg:w-1/2">
      <div className="relative mt-10 lg:mt-0">
        <img
          src={myPhoto}
          alt="MyPhoto"
          className="max-w-full mx-auto scale-75 drop-shadow-[0px_10px_15px_rgba(128,128,128,.30)] "
        />

        <img
          src={blob}
          className="absolute scale-125 rotate-12 top-12 left-1/2 -translate-x-1/2 -z-10 lg:scale-150"
        />
        {/* <div className="absolute bottom-1/2 right-0 translate-y-1/2 opacity-20 h-full pl-1 flex flex-col justify-center items-center gap-6">
          <p className="[writing-mode:vertical-lr] text-secondary-light text-xl font-semibold tracking-widest md:text-3xl">
            FOLLOW ME :
          </p>
          
          <a
            href="https://www.facebook.com/"
            target="_blank"
            className="block group"
          >
            <FiFacebook className="w-6 h-6 md:w-10 md:h-10 group-hover:text-accent"/>
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            className="block group"
          >
            <FiInstagram className="w-6 h-6 md:w-10 md:h-10 group-hover:text-accent"/>
          </a>
          <a
            href="https://github.com/wisanggenix0"
            target="_blank"
            className="block group"
          >
            <FiGithub className="w-6 h-6 md:w-10 md:h-10 group-hover:text-accent"/>
          </a>
        </div> */}
      </div>
    </div>
  );
}

export default HomeRight
