import { ArrowRightIcon } from '@heroicons/react/solid'
export default function Navbar() {
  return (
    <header className="bg-gray-800 self-center md:sticky top-0 z-20">
      <div className="py-5 px-2 flex md:flex-row flex-col gap-y-3">
          <a href="#about" className="text-white md:border-r-2 text-xl md:px-4 md:my-auto self-center font-medium">
            David Rodriguez Ramirez
          </a>
          <nav className='md:justify-items-start md:flex-grow content-center self-center flex gap-x-4 my-auto md:pl-4'>
            <a href="#projects" className="hover:text-white">
              Past work
            </a>
            <a href="#skills" className="hover:text-white">
              Skills
            </a>
          </nav>
          <a href="#contact" className="hover:bg-gray-700 py-1 px-2 md:py-2 md:px-4 rounded-md self-center flex flex-row">
            <span>Hire Me</span><ArrowRightIcon className='ml-2 w-5'/>
          </a>
      </div>
    </header>
  );
}
