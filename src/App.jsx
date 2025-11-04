import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import Features from './components/sections/Features';
import Products from './components/sections/Products';
import Testimonials from './components/sections/Testimonials';
import Newsletter from './components/sections/Newsletter';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="font-sans text-gray-900">
      <Header />
      <Hero />
      <Features />
      <Products />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
