import heroImage from "../../assets/images/Herosection.jpeg";

function Hero() {
  return (
    <section className="bg-gray-50 flex flex-col md:flex-row items-left justify-between px-6 md:px-16 py-16 md:py-24">
      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center mb-1 md:mb-0">
        <img
          src={heroImage}
          alt="Modern Furniture"
          className="rounded-0 shadow-xl w-full max-w-sm object-cover h-80"
        />
      </div>

      {/* Text*/}
      <div className="md:w-1/2 text-center md:text-left space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Brewed Fresh, Served with Love
        </h1>
        <p className="text-gray-600 max-w-md mx-auto md:mx-0">
          Start your day with the perfect cup, crafted with passion and warmth.
        </p>
        <p className="text-gray-600 max-w-md mx-auto md:mx-0">
          <ul className="text-gray-600 text-[30] font-bold max-w-md mx-auto md:mx-0 list-disc list-inside">
            <li>Best servies</li>
          </ul>
          <p>Get served at your comfort zone at the shortest time possible</p>
          <ul className="text-gray-600 text-[30] font-bold max-w-md mx-auto md:mx-0 list-disc list-inside">
            <li>Production of best coffee beans</li>
          </ul>
          <p>For the ultimate coffe beans, we are the way to go!!</p>
        </p>
        <button className="bg-[#00B894] hover:bg-[#019875] transition-all duration-300 px-10 py-3 rounded-full text-white font-semibold shadow-md">
          Shop Now
        </button>
      </div>
    </section>
  );
}

export default Hero;
