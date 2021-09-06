export default function FormInput({ name }) {
  const style = "w-full rounded-md p-2 bg-gray-800  border border-solid outline-none border-gray-500 focus:border-green-400 text-white focus:ring-2 focus:ring-green-700 transition-colors duration-300 ease-in-out";

  return (
    <div className="flex flex-col w-full md:w-2/3 lg:w-1/2 xl:w-2/5 ">
      <label htmlFor={name} className="font-medium mb-1">
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </label>
      {name === "message" ? (
        <textarea name={name} id={name} className={style + 'h-40'} />
      ) : (
        <input type={name} name={name} id={name} className={style + ' text-xl'} />
      )}
    </div>
  );
}
