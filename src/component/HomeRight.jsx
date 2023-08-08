/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-target-blank */
import myPhoto from "../assets/images/Wisanggeni.png";
import blob from "../assets/svg/blob.svg";





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
      </div>
    </div>
  );
}

export default HomeRight
