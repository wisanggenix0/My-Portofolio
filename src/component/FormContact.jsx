
import { useRef, useState } from "react";
import TextInput from "./TextInput";
import emailjs from "emailjs-com";

function FormContact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [projectDetail, setProjectDetail] = useState("");
  const form = useRef()

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleProjectDetailChange = (event) => {
    setProjectDetail(event.target.value);
  };

  const isEmailValid = (email) => {
    // Regular expression for email validation
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!isEmailValid(email)) {
      alert("Please provide a valid email address.");
      return;
    }

    console.log({email, name, projectDetail})
     emailjs
       .sendForm(
         "service_4rlwkzn",
         "template_wphtakk",
         form.current,
         "GWchX71sFnUF46P9u"
       )
       .then(
         (result) => {
           console.log(result.text);
         },
         (error) => {
           console.log(error.text);
         }
       );
  };

  return (
    <>
      <form
        ref={form}
        onSubmit={handleSubmit}
        className="w-full flex flex-col gap-4 px-6 py-12 md:px-24 lg:w-3/5 shadow-inner shadow-secondary rounded backdrop-blur"
      >
        <TextInput
          label="Name"
          id="name"
          value={name}
          onChange={handleNameChange}
          name="user_name"
        />

        <TextInput
          label="Email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          name="user_email"
        />

        <label
          htmlFor="projectDetail"
          className="flex flex-col gap-1 shadow-inner shadow-secondary py-4 px-6 rounded hover:scale-105 transition ease-in-out duration-300"
        >
          <span className="text-primary font-medium">Project Detail</span>
          <textarea
            className="rounded p-1 shadow shadow-secondary hover:shadow-primary focus:ring focus:ring-primary transition ease-in-out duration-300 text-background"
            id="projectDetail"
            value={projectDetail}
            onChange={handleProjectDetailChange}
            name="message"
          />
        </label>

        <input
          type="submit"
          value="Submit"
          className="bg-primary w-1/2 self-center py-2 mt-6 rounded shadow shadow-secondary hover:bg-secondary hover:shadow hover:shadow-primary hover:text-background transition ease-in-out duration-300"
        ></input>
      </form>
    </>
  );
}

export default FormContact;