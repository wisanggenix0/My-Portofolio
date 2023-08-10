/* eslint-disable react/jsx-no-target-blank */
import { SiFacebook, SiInstagram, SiGithub, SiLinkedin, SiTiktok } from "react-icons/si";

function About() {
  return (
    <>
      <section className="pt-36 pb-32" id="about">
        <div className="container">
          <div className="flex flex-wrap lg:items-center">
            <div className="w-full px-4 mb-10 lg:w-1/2">
              <h2 className="font-bold uppercase text-lg text-primary mb-3">
                ABOUT ME
              </h2>
              <h4 className=" text-3xl font-bold max-w-md mb-5">Who im ?</h4>
              <p className="font-medium text-base text-secondaryls max-w-md">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis ipsam repellendus alias quam voluptatum, aspernatur
                suscipit, quaerat reiciendis provident voluptas cumque sint
                magnam facere. Aut, recusandae! Amet beatae qui autem.
              </p>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <h4 className="text-2xl font-semibold mb-4">
                Get closer with me
              </h4>
              <p className="font-medium text-base text-secondaryls mb-6 max-w-md">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                animi, voluptates alias ipsum magni at necessitatibus, dolores
                quae nesciunt aliquid consequatur, illo natus quod architecto
                excepturi suscipit non facilis. Nemo?
              </p>
              <div className="w-full px-4 flex justify-center gap-6 text-secondaryls lg:justify-start">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  className="block group"
                >
                  <SiFacebook className="w-6 h-6 group-hover:text-primary" />
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  className="block group"
                >
                  <SiInstagram className="w-6 h-6 group-hover:text-primary" />
                </a>
                <a
                  href="https://www.Linkedin.com/"
                  target="_blank"
                  className="block group"
                >
                  <SiLinkedin className="w-6 h-6 group-hover:text-primary" />
                </a>
                <a
                  href="https://www.Tiktok.com/"
                  target="_blank"
                  className="block group"
                >
                  <SiTiktok className="w-6 h-6 group-hover:text-primary" />
                </a>
                <a
                  href="https://github.com/wisanggenix0"
                  target="_blank"
                  className="block group"
                >
                  <SiGithub className="w-6 h-6 group-hover:text-primary" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
