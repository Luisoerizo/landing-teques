import "./App.css";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Jumbotron } from "./components/Jumbotron";
import { Services } from "./components/Services";


function App() {
  return (
    <>
      <Jumbotron />
      <About />
      <Services />
      <Contact />
      
    </>
  );
}

export default App;
