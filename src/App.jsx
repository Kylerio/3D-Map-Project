import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import LayerSection from "./components/LayerSection";
import ResultSection from "./components/ResultSection";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <AboutSection />
        <LayerSection />
        <ResultSection />
      </div>
      <Footer />

      
    </>
  );
};

export default App;