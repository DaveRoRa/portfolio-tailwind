import FormInput from "./FormInput";
import { useState } from 'react'

function encode(data) {
  return Object.keys(data)
    .map(
      (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
    )
    .join("&");
}

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSub = (e) =>{
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }

  return (
    <section id="contact" className="container items-center mx-auto mt-12 px-8 ">
      <form
        netlify
        name="contact"
        className="flex flex-col items-center gap-y-8"
      >
        <h2 className="text-white text-4xl font-medium">Hire Me</h2>
        <p className="text-center mb-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
          suscipit officia aspernatur veritatis. Asperiores, aliquid?
        </p>
        <FormInput onChange={setName} name='name'/>
        <FormInput onChange={setEmail} name='email'/>
        <FormInput onChange={setMessage} name='message'/>
        <button onClick={onSub} type="submit" className="w-full md:w-2/3 lg:w-1/2 xl:w-2/5 rounded-md text-lg text-white p-2 font-medium hover:bg-green-800 bg-green-500">
          Submit
        </button>
      </form>
    </section>
  );
}
