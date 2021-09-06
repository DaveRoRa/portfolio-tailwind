export default function Contact() {
  return (
      <section id='contact'>
        <form
          netlify
          name="contact"
          className="">
          <h2 className="">
            Hire Me
          </h2>
          <p className="">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
            suscipit officia aspernatur veritatis. Asperiores, aliquid?
          </p>
          <div className="">
            <label htmlFor="name" className="">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className=""
            />
          </div>
          <div className="">
            <label htmlFor="email" className="">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className=""
            />
          </div>
          <div className="">
            <label
              htmlFor="message"
              className="">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className=""
            />
          </div>
          <button
            type="submit"
            className="">
            Submit
          </button>
        </form>
      </section>
  )
}
