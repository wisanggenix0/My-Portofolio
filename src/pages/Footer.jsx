/* eslint-disable react/jsx-no-target-blank */
import { SiFacebook, SiGithub, SiInstagram, SiLinkedin, SiTiktok } from "react-icons/si"

function Footer() {
  return (
    <>
      <footer className="pt-28 pb-16 bg-slate-800 text-slate-500">
        <div className="container">
          <div className="flex flex-wrap gap-4 border justify-center">
            
            <div className="w-full flex flex-col items-center gap-3 lg:w-2/5 border">
              <h4 className="text-slate-500 text-xl font-bold uppercase leading-relaxed tracking-wider">
                Navigation
              </h4>
              <div className="flex gap-4 text-base font-medium">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#skilss">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
              </div>
            </div>
            <div className="w-full flex flex-col items-center gap-3 lg:w-2/5 border">
              <h4 className="text-slate-500 text-xl font-bold uppercase leading-relaxed tracking-wider">
                Follow me
              </h4>
              <div className="flex flex-wrap gap-4 text-base font-medium">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  className="block group"
                >
                  <SiFacebook className="w-6 h-6 group-hover:text-primary transition ease-in-out duration-300 delay-100" />
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  className="block group"
                >
                  <SiInstagram className="w-6 h-6 group-hover:text-primary transition ease-in-out duration-300 delay-100" />
                </a>
                <a
                  href="https://www.Linkedin.com/"
                  target="_blank"
                  className="block group"
                >
                  <SiLinkedin className="w-6 h-6 group-hover:text-primary transition ease-in-out duration-300 delay-100" />
                </a>
                <a
                  href="https://www.Tiktok.com/"
                  target="_blank"
                  className="block group"
                >
                  <SiTiktok className="w-6 h-6 group-hover:text-primary transition ease-in-out duration-300 delay-100" />
                </a>
                <a
                  href="https://github.com/wisanggenix0"
                  target="_blank"
                  className="block group"
                >
                  <SiGithub className="w-6 h-6 group-hover:text-primary transition ease-in-out duration-300 delay-100" />
                </a>
              </div>
            </div>
            <span className="w-full flex flex-col items-center pt-4">
              <p>
                Created by{" "}
                <a
                  href="https://github.com/wisanggenix0"
                  target="_blank"
                  className="hover:text-primary transition ease-in-out duration-300 delay-100"
                >
                  {" "}Wisanggeni
                </a>
              </p>
            </span>

          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer
