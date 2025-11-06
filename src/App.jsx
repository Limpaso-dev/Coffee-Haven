import Header from "./components/layout/Header.jsx";
import Hero from "./components/sections/Hero.jsx";
import Features from "./components/sections/Features";
import Bestbrewer from "./components/sections/Bestbrewer.jsx";
// import Products from "./components/sections/Products.jsx";
// import Testimonials from "./components/sections/Testimonials";
// import Navigation from "./components/layout/Navigation.jsx";
// import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="font-sans text-gray-900">
      <Header />
      <Hero />
      <Features />
      <Bestbrewer />
      {/* <Products />
      <Testimonials />
      <Navigation />
      <Footer /> */}
    </div>
  );
}

export default App;
