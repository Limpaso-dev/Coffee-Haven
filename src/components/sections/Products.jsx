import espressoo from "../../assets/images/espresso.jpeg";
import cappuccino from "../../assets/images/cappuccino1.jpeg";
import latte from "../../assets/images/latte.jpeg";
import mocha from "../../assets/images/mocha.jpeg";
import coldbrew from "../../assets/images/coldbrew.jpeg";
import croissant from "../../assets/images/croissant.jpeg";
import muffin from "../../assets/images/muffins.jpeg";
import coffeebeans from "../../assets/images/coffeebeans.jpeg";

function Products() {
  const items = [
    { img: espressoo, name: "Espresso", desc: "Strong, bold, and classic." },
    {
      img: cappuccino,
      name: "Cappuccino",
      desc: "Perfect blend of milk & foam.",
    },
    { img: latte, name: "Latte", desc: "Smooth, creamy, and delightful." },
    { img: mocha, name: "Mocha", desc: "Chocolate meets coffee love." },
    { img: coldbrew, name: "Cold Brew", desc: "Chilled perfection in a cup." },
    {
      img: croissant,
      name: "Butter Croissant",
      desc: "Golden, flaky pastry goodness.",
    },
    {
      img: muffin,
      name: "Blueberry Muffin",
      desc: "Soft and bursting with flavor.",
    },
    { img: coffeebeans, name: "Premium Beans", desc: "Freshly roasted daily." },
  ];

  return (
    <section className="bg-white py-16 px-6 md:px-16 text-center">
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-[#4B2E05] mb-4">
        Our Signature Blends & Pastries
      </h2>
      <p className="text-gray-700 max-w-xl mx-auto mb-10">
        Taste the art of brewing, explore our rich coffee blends and freshly
        baked delights crafted for every moment.
      </p>

      {/* Product Cards Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-transform duration-300 hover:scale-105 p-4 flex flex-col items-center"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-48 object-cover rounded-xl mb-4"
            />
            <h3 className="text-lg font-semibold text-[#4B2E05]">
              {item.name}
            </h3>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;
