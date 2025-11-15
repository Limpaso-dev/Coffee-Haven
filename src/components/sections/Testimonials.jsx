import React, { useState } from "react";

function Testimonials() {
  const testimonials = [
    {
      name: "Limpaso M.",
      role: "Art Collector",
      image: "/review.jpeg",
      quote:
        "The curated selection here has transformed my living space. Each cup tells a story and adds a unique charm.",
    },

    {
      name: "Mepetu Z.",
      role: "Interior Designer",
      image: "/daniel.jpeg",
      quote:
        "I loved the taste of the coffee and the ambiance of the place. Highly recommend to all coffee lovers!",
    },
  ];

  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const t = testimonials[index];

  return (
    <section className="w-full bg-neutral-50 py-20 px-6 md:px-16 grid md:grid-cols-2 gap-10 items-center">
      <div>
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          What People Are Saying About Us
        </h2>

        {/* Customer*/}
        <div className="flex items-center gap-4 mb-4 transition-all">
          <img
            src={t.image}
            alt={t.name}
            className="w-14 h-14 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-gray-900">{t.name}</h3>
            <p className="text-gray-500 text-sm">{t.role}</p>
          </div>
        </div>

        {/* Quote */}
        <p className="text-gray-700 leading-relaxed max-w-lg">“{t.quote}”</p>

        <div className="flex gap-4 mt-6">
          <button
            onClick={prev}
            className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-200 transition"
          >
            ←
          </button>
          <button
            onClick={next}
            className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-200 transition"
          >
            →
          </button>
        </div>
      </div>

      <div>
        <img
          src="/coffeeroom.jpeg"
          alt="coffee room"
          className="rounded-xl shadow-lg w-full object-cover py-75 h-80"
        />
      </div>
    </section>
  );
}

export default Testimonials;
