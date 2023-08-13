/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import projectImg1 from "../assets/images/1.jpg";
import CardProject from "../component/CardProject";
import {
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoHtml5,
  BiLogoTailwindCss,
  BiLogoNodejs,
  BiLogoMongodb,
  BiLogoReact,
} from "react-icons/bi";

function Projects() {
  const projects = [
    {
      title: "Todolist",
      icon: [
        <BiLogoHtml5 className="svg-project-style text-orange-500" />,
        <BiLogoCss3 className="svg-project-style text-blue-500" />,
        <BiLogoJavascript className="svg-project-style text-yellow-500" />,
      ],
    },
    {
      title: "Foody-Woody",
      icon: [
        <BiLogoHtml5 className="svg-project-style text-orange-500" />,
        <BiLogoCss3 className="svg-project-style text-blue-500" />,
        <BiLogoJavascript className="svg-project-style text-yellow-500" />,
        <BiLogoTailwindCss className="svg-project-style text-cyan-500" />,
      ],
    },
    {
      title: "Contact App",
      icon: [
        <BiLogoReact className="svg-project-style text-sky-500" />,
        <BiLogoMongodb className="svg-project-style text-green-500" />,
        <BiLogoNodejs className="svg-project-style text-green-600" />,
      ],
    },
  ];




  return (
    <>
      <section className="pt-36 pb-32" id="projects">
        <div className="container">
          <div className="flex flex-col items-center justify-center">
            <div className="mb-10 lg:w-1/2 lg:text-center">
              <h2 className="font-bold uppercase text-xl text-primary mb-3">
                My Projects
              </h2>
              <p className=" text-2xl font-semibold mb-5">
                This is all my latest projects :
              </p>
            </div>

            <div className="w-full flex flex-wrap justify-center gap-4">
              {projects.map((project, index) => (
                <CardProject
                  key={index}
                  imgSrc={projectImg1}
                  title={project.title}
                  icon={project.icon}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;


