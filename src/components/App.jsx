import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import About from "./About/About";

function App() {
  return (
    <div className="container">
  <Header />
  <main> 
    <Hero />
    <About />
  </main>
    </div>
  )
};

export default App;
