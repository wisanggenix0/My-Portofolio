import FormContact from "../component/FormContact";

function Contact() {
  return (
    <>
      <section className="pt-36 pb-32" id="contact">
        <div className="container">
          <div className="flex flex-col items-center justify-center md:px-16 lg:px-32">
            <div className="w-full px-4 mb-6 lg:w-1/2 lg:text-center">
              <h2 className="font-bold uppercase text-2xl text-primary mb-3">
                Contact 
              </h2>
              <h4 className=" text-lg font-bold mb-5">
                Isi formulir untuk menghubungi aku.
              </h4>
            </div>
           <FormContact/>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact
