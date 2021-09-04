import { TemplateIcon } from "@heroicons/react/solid";
import { projects } from "../data";
export default function Projects() {
  return (
    <section
      id="projects"
      className="flex flex-col container mx-auto items-center  gap-y-4"
    >
      <TemplateIcon className="w-16" />
      <h2 className="text-white text-4xl font-medium">Apps I've Built</h2>
      <p className="text-center">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui laborum
        quasi, incidunt dolore iste nostrum cupiditate voluptas? Laborum,
        voluptas natus?
      </p>
      <div className="flex flex-wrap gap">
        {projects.map((project) => (
          <a
            key={project.title}
            href="google.com"
            className="w-full md:w-1/2 md:h-80 lg:w-1/3 lg:h-80 p-4 center  "
          >
            <div className="border-2 border-gray-500 p-10 flex flex-col gap-y-4 h-full justify-around items-center opacity-0 hover:opacity-100">
              <h3 className="text-lg text-white font-medium">
                {project.title}
              </h3>
              <h4 className="font-medium text-green-400">{project.subtitle}</h4>
              <p className="text-center">{project.description}</p>
            </div>
            <div className="flex relative">
              <img
                className="object-center"
                src="https://www.pngfind.com/pngs/m/685-6854970_react-logo-png-png-download-logo-png-reactjs.png"
              />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
