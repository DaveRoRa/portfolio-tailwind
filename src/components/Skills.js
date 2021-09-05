import { ChipIcon, BadgeCheckIcon } from "@heroicons/react/solid";
import { skills } from "../data";
export default function Skills() {
  return (
    <section
      id="#skills"
      className="flex flex-col container mx-auto items-center gap-y-8 mt-12"
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
          <div key={skill} className="p-2 w-1/2">
            <div className='rounded-md bg-gray-600 flex'>
              <BadgeCheckIcon/><span>{skill}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
