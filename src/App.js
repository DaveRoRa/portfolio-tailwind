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
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
    </div>
  );
}

export default App;
