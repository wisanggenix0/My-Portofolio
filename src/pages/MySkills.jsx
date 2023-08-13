import {
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoHtml5,
  BiLogoTailwindCss,
  BiLogoNodejs,
  BiLogoMongodb,
  BiLogoGit,
  BiLogoReact,
} from "react-icons/bi";
import Card from "../component/Card";

function MySkills() {
  const skills = [
    {
      icon: <BiLogoHtml5 className="w-16 h-16 text-orange-500" />,
    },
    {
      icon: <BiLogoCss3 className="w-16 h-16 text-blue-500" />,
    },
    {
      icon: <BiLogoJavascript className="w-16 h-16 text-yellow-500" />,
    },
    {
      icon: <BiLogoTailwindCss className="w-16 h-16 text-cyan-500" />,
    },
    {
      icon: <BiLogoNodejs className="w-16 h-16 text-green-600" />,
    },
    {
      icon: <BiLogoMongodb className="w-16 h-16 text-green-500" />,
    },
    {
      icon: <BiLogoGit className="w-16 h-16 text-red-400" />,
    },
    {
      icon: <BiLogoReact className="w-16 h-16 text-sky-500" />,
    },
    // Tambahkan skill lainnya sesuai kebutuhan
  ];

  return (
    <>
      <section className="pt-36 pb-40" id="skills">
        <div className="container">
          <div className="flex flex-wrap lg:flex-col lg:items-center">
            <div className="w-full px-4 mb-10 lg:w-1/2 lg:text-center">
              <h2 className="font-bold uppercase text-lg text-primary mb-3">
                My skills
              </h2>
              <h4 className=" text-2xl font-bold mb-5">
                This is what I can do :
              </h4>
            </div>

            <div className="w-full h-fit flex flex-wrap justify-center gap-4 lg:w-3/4 ">
              {skills.map((skill, index) => (
                <Card key={index} {...skill} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MySkills;
