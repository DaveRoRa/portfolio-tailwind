import {
  About,
  Contact,
  Navbar,
  Projects,
  Skills,
  Testimonials,
} from "./components";

function App() {
  return (
    <div className='bg-gray-900 text-gray-400'>
      <Navbar/>
      <About/>
      <Projects/>
    </div>
  );
}

export default App;
