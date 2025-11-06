import new1 from "../../assets/images/New-1.jpeg";
import new2 from "../../assets/images/new2.jpeg";
import new3 from "../../assets/images/new3.jpeg";
import new4 from "../../assets/images/new4.jpeg";

function Features() {
  return (
    <section className="bg-white flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-16">
      {/* Left Text Section */}
      <div className="md:w-1/3 text-center md:text-left space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Heyy new Brews here!!
        </h2>
        <p className="text-gray-600 max-w-md mx-auto md:mx-0">
          Explore our latest coffee creations, from rich espresso blends to
          smooth cold brews, freshly roasted for true coffee lovers.
        </p>
        <button className="bg-[#00B894] hover:bg-[#019875] transition px-8 py-3 rounded-full text-white font-semibold">
          Check Them Out
        </button>
      </div>

      {/* Right Image Section */}
      <div className="md:w-2/3 mt-10 md:mt-0 flex justify-center items-center gap-4">
        <img
          src={new1}
          alt="New Furniture 1"
          className="rounded-lg shadow-md object-cover w-1/4 h-56"
        />
        <img
          src={new2}
          alt="New Furniture 2"
          className="rounded-lg shadow-md object-cover w-1/4 h-56"
        />
        <img
          src={new3}
          alt="New Furniture 3"
          className="rounded-lg shadow-md object-cover w-1/4 h-56"
        />
        <img
          src={new4}
          alt="New Furniture 4"
          className="rounded-lg shadow-md object-cover w-1/4 h-56"
        />
      </div>
    </section>
  );
}

export default Features;
