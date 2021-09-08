import {
  About,
  Contact,
  Navbar,
  Projects,
  Skills,
} from "./components";

function App() {
  return (
    <div className='bg-gray-900 text-gray-400 min-w-sm pb-16'>
      <Navbar/>
      <div className='h-20 m-0 p-0 w-full'/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
    </div>
  );
}

export default App;
