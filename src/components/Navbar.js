export default function Navbar() {
  return (
    <header className="bg-gray-800 container mx-auto">
      <div className="py-4 px-2 flex flex-row">
          <a href="#about" className="text-white md:border-r-2 text-xl md:px-4 my-auto font-medium">
            David Rodriguez Ramirez
          </a>
          <nav className='justify-items-start flex-grow content-center flex gap-x-4 my-auto pl-4'>
            <a href="#projects" className="hover:text-white">
              Past work
            </a>
            <a href="#skills" className="hover:text-white">
              Skills
            </a>
            <a href="#testimonials" className="hover:text-white">
              Testimonials
            </a>
          </nav>
          <a href="#contact" className="hover:bg-gray-700 py-2 px-4 rounded-md">
            Hire Me
          </a>
      </div>
    </header>
  );
}
