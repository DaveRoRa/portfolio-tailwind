import FormInput from "./FormInput";
export default function Contact() {
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
        <FormInput name='name'/>
        <FormInput name='email'/>
        <FormInput name='message'/>
        <button type="submit" className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3 rounded-md text-lg text-white p-2 font-medium hover:bg-green-800 bg-green-500">
          Submit
        </button>
      </form>
    </section>
  );
}
