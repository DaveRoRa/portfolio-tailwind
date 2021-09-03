export default function Navbar() {
  return (
    <header className="bg-gray-800 container ">
      <div className="py-8 px-4 flex flex-row justify-between">
          <a href="#about" className="text-white border-r-2">
            David Rodriguez Ramirez
          </a>
          <nav>
            <a href="#projects" className="">
              Past work
            </a>
            <a href="#skills" className="">
              Skills
            </a>
            <a href="#testimonials" className="">
              Testimonials
            </a>
          </nav>
          <a href="#contact" className="">
            Hire Me
          </a>
      </div>
    </header>
  );
}
