import new1 from "../../assets/images/New1.jpeg";
import new2 from "../../assets/images/new2.jpeg";
import new3 from "../../assets/images/new3.jpeg";

function Features() {
  return (
    <section className="bg-white flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-16">
      {/* Left Text Section */}
      <div className="md:w-1/2 text-center md:text-left space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          New In Store Now
        </h2>
        <p className="text-gray-600 max-w-md mx-auto md:mx-0">
          Explore our latest furniture arrivals — crafted with precision and
          designed to bring elegance and comfort into your living space.
        </p>
        <button className="bg-[#00B894] hover:bg-[#019875] transition px-8 py-3 rounded-full text-white font-semibold">
          Discover More
        </button>
      </div>

      {/* Right Image Section */}
      <div className="md:w-1/2 mt-10 md:mt-0 grid grid-cols-2 gap-4">
        <img
          src={new1}
          alt="New Furniture 1"
          className="rounded-lg shadow-md w-full h-48 object-cover"
        />
        <img
          src={new2}
          alt="New Furniture 2"
          className="rounded-lg shadow-md w-full h-48 object-cover"
        />
        <img
          src={new3}
          alt="New Furniture 3"
          className="rounded-lg shadow-md w-full h-48 object-cover col-span-2"
        />
      </div>
    </section>
  );
}

export default Features;
