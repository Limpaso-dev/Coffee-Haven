import headerImage from "../../assets/images/headerimage.jpeg";

function Header() {
  return (
    <header
      className="relative bg-cover bg-center text-white shadow-lg h-[90vh]"
      style={{ backgroundImage: `url(${headerImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* NAVBAR */}
      <div className="relative container mx-auto flex items-center justify-between py-6 px-8">
        <h1 className="text-2xl font-bold tracking-wide">Coffee Haven</h1>

        <nav>
          <ul className="flex space-x-6 text-lg font-medium">
            <li>
              <a href="#home" className="hover:text-amber-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#menu" className="hover:text-amber-400 transition">
                Menu
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-amber-400 transition">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-amber-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* HERO SECTION */}
      <div className="relative container mx-auto text-center px-8 mt-20">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-4">
          Experience the True Taste of Coffee
        </h2>

        <p className="max-w-2xl mx-auto text-lg text-gray-200 mb-6">
          Enjoy authentic brews crafted to perfection!! Rich flavor, smooth
          aroma, and an unforgettable cafe feel.
        </p>

        <button className="bg-amber-500 hover:bg-amber-600 transition px-10 py-3 rounded-full text-white font-semibold">
          Buy Now
        </button>
      </div>

      {/* STATS*/}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-[-50px] 
                      bg-white text-black rounded-xl shadow-xl 
                      grid grid-cols-3 md:grid-cols-4 gap-6 
                      px-8 py-6 w-[85%] md:w-[60%] text-center"
      >
        <div>
          <h3 className="text-3xl font-bold">4</h3>
          <p className="text-gray-600 text-sm">Years of Experience</p>
        </div>

        <div>
          <h3 className="text-3xl font-bold">6</h3>
          <p className="text-gray-600 text-sm">Top Roasters</p>
        </div>

        <div>
          <h3 className="text-3xl font-bold">8k+</h3>
          <p className="text-gray-600 text-sm">Happy Customers</p>
        </div>

        <div>
          <h3 className="text-3xl font-bold">300+</h3>
          <p className="text-gray-600 text-sm">Daily Cups Served</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
