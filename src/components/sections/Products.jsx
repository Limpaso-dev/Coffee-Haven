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
    {
      img: espressoo,
      name: "Espresso",
      price: "$200",
      beforePrice: "$250",
    },

    {
      img: cappuccino,
      name: "Cappuccino",
      price: "$400",
      beforePrice: "$450",
    },

    {
      img: latte,
      name: "Latte",
      price: "$320",
      beforePrice: "$360",
    },

    {
      img: mocha,
      name: "Mocha",
      price: "$700",
      beforePrice: "$750",
    },

    {
      img: coldbrew,
      name: "Cold Brew",
      price: "$700",
      beforePrice: "$750",
    },

    {
      img: croissant,
      name: "Butter Croissant",
      price: "$500",
      beforePrice: "$540",
    },

    {
      img: muffin,
      name: "Blueberry Muffin",
      price: "$450",
      beforePrice: "$500",
    },

    {
      img: coffeebeans,
      name: "Coffee Beans",
      price: "$100",
      beforePrice: "$150",
    },
  ];

  return (
    <section className="bg-white py-16 px-6 md:px-16 text-center">
      {/*Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-[#4B2E05] mb-4">
        Our Signature Blends & Pastries
      </h2>
      <p className="text-gray-700 max-w-xl mx-auto mb-10">
        Taste the art of brewing, explore our rich coffee blends and freshly
        baked delights crafted for every moment.
      </p>

      {/*Cards Grid */}
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
            <div className="flex items-center gap-2 mt-2">
              <span className="text-gray-800 font-bold">{item.price}</span>
              <span className="text-gray-400 line-through">
                {item.beforePrice}
              </span>
              <span className="text-gray-300 line-through">
                {item.oldPrice}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;
