import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import About from "./About/About";
import MindMap from "./MindMap/MindMap";

function App() {
  return (
    <div className="container">
  <Header />
  <main> 
    <Hero />
    <About />
    <MindMap />
  </main>
    </div>
  )
};

export default App;
