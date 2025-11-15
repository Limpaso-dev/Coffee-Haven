import coffeeImage from "../../assets/images/Herosection.jpeg"; // adjust path as needed

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
          <p className="text-base md:text-lg text-gray-700 mt-4 max-w-md">
            Savor every sip of our carefully roasted coffee, crafted to bring
            out the rich aroma and smooth flavor you deserve. From bean to cup,
            we make every moment enjoyable.
          </p>
          <button className="mt-6 px-8 py-3 rounded-2xl bg-black text-white font-semibold shadow-lg hover:opacity-90 transition-all">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
