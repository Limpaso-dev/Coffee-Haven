import ctaBg from "../../assets/images/coffeebulb.jpg";

function CTA() {
  return (
    <section
      className="relative py-24 text-center bg-cover bg-center"
      style={{ backgroundImage: `url(${ctaBg})` }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 text-[#f5f5f5] max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold text-[#d4af37]">
            Join Our Art Lovers Newsletter
        </h2>
        <p className="mt-4 text-gray-300">
            Stay updated with the latest art trends, exclusive offers, and
        </p>

        <div className="mt-8 flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-3 rounded-l-md text-black w-72 focus:outline-none"
          />
          <button className="bg-gradient-to-r from-[#7b5e3b] to-[#d4af37] px-6 py-3 rounded-r-md font-semibold text-black hover:scale-105 transition">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}

export default CTA;
