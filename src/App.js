import {
  About,
  Contact,
  Navbar,
  Projects,
  Skills,
} from "./components";

function App() {
  return (
    <div className='bg-gray-900 text-gray-400'>
      <Navbar/>
      <About/>
      <Projects/>
      <Skills/>
    </div>
  );
}

export default App;
