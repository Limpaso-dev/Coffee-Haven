function Testimonials() {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-16">
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
        What Our Customers Say
      </h2>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Card 1 */}
        <div className="bg-white rounded-xl shadow-md p-6 text-center">
          <img
            src="/src/assets/images/test1.jpeg"
            alt="Customer 1"
            className="w-20 h-20 mx-auto rounded-full object-cover mb-4"
          />
          <h3 className="text-xl font-semibold text-gray-800">Sarah Kim</h3>
          <p className="text-amber-500 text-lg">★★★★★</p>
          <p className="text-gray-600 mt-2">
            “The caramel latte is unmatched! Amazing ambiance and friendly staff.”
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-xl shadow-md p-6 text-center">
          <img
            src="/src/assets/images/test2.jpeg"
            alt="Customer 2"
            className="w-20 h-20 mx-auto rounded-full object-cover mb-4"
          />
          <h3 className="text-xl font-semibold text-gray-800">James Muriuki</h3>
          <p className="text-amber-500 text-lg">★★★★★</p>
          <p className="text-gray-600 mt-2">
            “Best cappuccino in town. Coffee Haven has become my daily spot.”
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-xl shadow-md p-6 text-center">
          <img
            src="/src/assets/images/test3.jpeg"
            alt="Customer 3"
            className="w-20 h-20 mx-auto rounded-full object-cover mb-4"
          />
          <h3 className="text-xl font-semibold text-gray-800">Linda W.</h3>
          <p className="text-amber-500 text-lg">★★★★★</p>
          <p className="text-gray-600 mt-2">
            “Stylish place, premium beans, perfect brews. Highly recommended!”
          </p>
        </div>

      </div>
    </section>
  );
}

export default Testimonials;
