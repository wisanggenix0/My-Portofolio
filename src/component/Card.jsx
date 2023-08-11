/* eslint-disable react/prop-types */

const Card = ({ icon }) => {
  return (
    <div
      className={`w-fit lg:w-fit rounded-full p-4 bg-transparent backdrop-blur shadow-inner shadow-secondary hover:scale-110 transition ease-in-out duration-500`}
    >
      {icon}
    </div>
  );
};

export default Card;
