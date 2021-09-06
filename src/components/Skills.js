import { ChipIcon, BadgeCheckIcon } from "@heroicons/react/solid";
import { skills } from "../data";
export default function Skills() {
  return (
    <section
      id="#skills"
      className="flex flex-col container mx-auto items-center gap-y-8 mt-12 px-8"
    >
      <ChipIcon className="w-16" />
      <h2 className="text-white text-4xl font-medium">
        Skills and Technologies
      </h2>
      <p className="text-center mb-4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui laborum
        quasi, incidunt dolore iste nostrum cupiditate voluptas? Laborum,
        voluptas natus?
      </p>
      <div className="flex flex-wrap mx-auto">
        {skills.map((skill) => (
          <div key={skill} className="p-2 md:w-1/2 w-full">
            <div className='rounded-md bg-gray-800 flex items-center gap-x-4 p-3'>
              <BadgeCheckIcon className='w-8 text-green-400'/><span className='text-white font-medium'>{skill}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
