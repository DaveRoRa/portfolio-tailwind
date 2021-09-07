import { TemplateIcon } from "@heroicons/react/solid";
import { projects } from "../data";
export default function Projects() {
  return (
    <section
      id="projects"
      className="flex flex-col container mx-auto items-center  gap-y-8 mt-12 px-8"
    >
      <TemplateIcon className="w-16" />
      <h2 className="text-white text-4xl font-medium">Apps I've Built</h2>
      <p className="text-center mb-4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui laborum
        quasi, incidunt dolore iste nostrum cupiditate voluptas? Laborum,
        voluptas natus?
      </p>
      <div className="flex flex-wrap gap">
        {projects.map((project) => (
          <a
            key={project.title}
            href="google.com"
            className="w-full md:w-1/2 md:h-80 lg:w-1/3 p-4 center xl:h-96 "
          >
            <div className="relative h-full">
                <img alt={project.title}
                  className="object-center inset-0 object-cover h-full w-full absolute opacity-100 hover:opacity-0 z-10"
                  src="https://www.pngfind.com/pngs/m/685-6854970_react-logo-png-png-download-logo-png-reactjs.png"
                />
              <div className="relative border-2 border-gray-500 p-10 flex flex-col gap-y-4 h-full justify-around items-center">
                <h3 className="text-lg text-white font-medium">
                  {project.title}
                </h3>
                <h4 className="font-medium text-green-400">
                  {project.subtitle}
                </h4>
                <p className="text-center">{project.description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
