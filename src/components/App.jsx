import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import About from "./About/About";
import MindMap from "./MindMap/MindMap";
import FAQ from "./FAQ/FAQ";

function App() {
  return (
    <div className="container">
  <Header />
  <main> 
    <Hero />
    <About />
    <MindMap />
    <FAQ />
  </main>
    </div>
  )
};

export default App;
