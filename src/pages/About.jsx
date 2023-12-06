/* eslint-disable react/jsx-no-target-blank */
import { SiFacebook, SiInstagram, SiGithub, SiLinkedin, SiTiktok } from "react-icons/si";

function About() {
  return (
    <>
      <section className="pt-48 pb-32" id="about">
        <div className="container">
          <div className="flex flex-wrap lg:items-center justify-center">
            <div className="w-full px-4 mb-10 lg:w-2/5">
              <h2
                className="font-bold uppercase text-lg text-primary mb-3"
                data-aos="fade-right"
                data-aos-delay="50"
                data-aos-duration="500"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true"
              >
                ABOUT ME
              </h2>
              <h4
                className=" text-3xl font-bold max-w-md mb-5"
                data-aos="fade-right"
                data-aos-delay="150"
                data-aos-duration="750"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true"
              >
                Who im ?
              </h4>
              <p
                className="font-medium text-base text-secondaryls max-w-md"
                data-aos="fade-right"
                data-aos-delay="250"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis ipsam repellendus alias quam voluptatum, aspernatur
                suscipit, quaerat reiciendis provident voluptas cumque sint
                magnam facere. Aut, recusandae! Amet beatae qui autem.
              </p>
            </div>
            <div className="w-full px-4 lg:w-2/5">
              <h4
                className="text-2xl font-semibold mb-4"
                data-aos="fade-left"
                data-aos-delay="50"
                data-aos-duration="500"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true"
              >
                Get closer with me
              </h4>
              <p
                className="font-medium text-base text-secondaryls mb-6 max-w-md"
                data-aos="fade-left"
                data-aos-delay="150"
                data-aos-duration="750"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                animi, voluptates alias ipsum magni at necessitatibus, dolores
                quae nesciunt aliquid consequatur, illo natus quod architecto
                excepturi suscipit non facilis. Nemo?
              </p>
              <div
                className="w-full px-4 flex justify-center gap-6 text-secondaryls lg:justify-start"
                data-aos="fade-left"
                data-aos-delay="250"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true"
              >
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
