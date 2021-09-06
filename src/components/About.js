export default function About() {
  return (
    <section id="about" className='container flex md:flex-row flex-col-reverse mx-auto mt-12 px-8'>
      <div className='flex flex-col m-auto gap-y-8 md:px-12 md:text-left text-center'>
        <h1 className='text-white text-4xl font-medium'>Hi, I'm David.I love to build amazing apps.</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui laborum
          quasi, incidunt dolore iste nostrum cupiditate voluptas? Laborum,
          voluptas natus?
        </p>
        <div className='flex flex-row gap-x-10 md:gap-x-3 self-center md:self-baseline'>
          <a href='#contact' className='py-2 px-6 rounded-md bg-green-500 text-white text-lg hover:bg-green-600'>Work with me</a>
          <a href='#projects' className='py-2 px-6 rounded-md bg-gray-800 text-lg hover:bg-gray-600 hover:text-white'>See my past work</a>
        </div>
      </div>
      <div className='m-auto md:pr-8 pb-12'>
        <img className='object-center rounded-full' src='https://www.pngfind.com/pngs/m/685-6854970_react-logo-png-png-download-logo-png-reactjs.png' />
      </div>
    </section>
  )
}
