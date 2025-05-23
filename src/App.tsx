import "./App.css";
import {
  Hero,
  About,
  Services,
  Stats,
  Testimonials,
  Brands,
  News,
  Footer,
} from "./components/sections";
import { Navbar } from "./components/ui/navbar/navbar";

function App() {
  return (
    <main>
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Stats />
        <Testimonials />
        <Brands />
        <News />
        <Footer />
    </main>
  );
}

export default App;
