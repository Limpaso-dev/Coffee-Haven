import coffeeImage from "../../assets/images/Herosection.jpeg"; // adjust path as needed
import { FaCheck } from "react-icons/fa";
function Hero() {
  return (
    <section className="w-full bg-white text-black py-20 px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        {/* Left: Image */}
        <div className="md:w-1/2 mb-8 md:mb-0 md:mr-12">
          <img
            src={coffeeImage}
            alt="Coffee"
            className="w-full rounded-1 shadow-xl object-cover py-75 h-80"
          />
        </div>

       {/* Right: Text */}
<div className="md:w-1/2 flex flex-col items-start text-left">

  <h2 className="text-3xl md:text-5xl font-bold leading-tight">
    Discover the Perfect Coffee Experience
  </h2>

  <p className="text-gray-700 text-lg mt-4 mb-6">
    Savor every sip of our carefully roasted coffee, crafted to bring out
    the rich aroma and smooth flavor you deserve. From bean to cup, we
    make every moment enjoyable.
  </p>

  {/* Bullet Items */}
  <div className="space-y-6">

    {/* Item 1 */}
    <div>
      <div className="flex items-center space-x-3">
        <span className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-xs">
          <FaCheck />
        </span>
        <h3 className="text-xl font-semibold">Freshly Roasted Beans</h3>
      </div>
      <p className="mt-2 text-gray-600 ml-9">
        We source high-quality beans and roast them in small batches to ensure
        maximum freshness, aroma, and rich, natural flavor.
      </p>
    </div>

    {/* Item 2 */}
    <div>
      <div className="flex items-center space-x-3">
        <span className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-xs">
          <FaCheck />
        </span>
        <h3 className="text-xl font-semibold">Expertly Brewed Coffee</h3>
      </div>
      <p className="mt-2 text-gray-600 ml-9">
        Every cup is brewed with precision, balancing temperature, grind,
        and extraction to give you a consistently smooth and satisfying taste.
      </p>
    </div>

  </div>
</div>
      </div>
    </section>
  );
}

export default Hero;
