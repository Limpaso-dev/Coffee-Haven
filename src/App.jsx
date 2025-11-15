// all the imports
import Header from "./components/layout/Header.jsx";
import Hero from "./components/sections/Hero.jsx";
import Features from "./components/sections/Features";
import Bestbrewer from "./components/sections/Bestbrewer.jsx";
import Products from "./components/sections/Products.jsx";
import Testimonials from "./components/sections/Testimonials";
import Footer from "./components/layout/Footer";
import CTA from "./components/layout/CTA.jsx";

function App() {
  return (
    <div className="font-sans text-gray-900">
      <Header />
      <Hero />
      <Features />
      <Bestbrewer />
      <Products />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
