// import heroImg from "../assets/Herosection.jpeg";

// function Hero() {
//   return (
//     <section
//       className="relative min-w-screen flex flex-col items-center justify-center text-center bg-center bg-cover bg-no-repeat rounded-xl shadow-lg w-full px-6 py-20 transition-all duration-700"
//       style={{ backgroundImage: url(${heroImg})}}
//     >

//       <nav className="relative z-2 flex items-center justify-between px-10 py-6 text-white">
//         <h1 className="font-bold text-2xl">The MuseHall </h1>

//         <ul className="flex items-center gap-8 text-lg">
//           <li className="hover:text-cyan-300 cursor-pointer">Home</li>
//           <li className="hover:text-gray-300 cursor-pointer">About</li>
//           <li className="hover:text-gray-300 cursor-pointer">Features</li>
//           <li className="hover:text-gray-300 cursor-pointer">Contact</li>
//         </ul>
//       </nav>

//       <header className="relative z-10 max-w-2xl">
//         <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
//           A Space Where African Art Speaks
//         </h2>

//         <p className="text-gray-200 text-lg md:text-xl leading-relaxed mb-8">
//           Discover authentic expressions, connect with artists, and become part of
//           a living, evolving cultural gallery.
//         </p>

//         <div className="flex flex-col sm:flex-row justify-center gap-4">
//           <button className="px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition">
//             Join Upcoming Event
//           </button>
//           <button className="px-6 py-3 rounded-full border border-white text-white font-medium hover:bg-white hover:text-black transition">
//             Display Your Artwork
//           </button>
//         </div>

//          <div className="relative z-20 bg-[#0F544E] text-white py-8 rounded-t-3xl">
//         <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 text-center gap-6 px-4">
//           <div>
//             <h2 className="text-4xl font-bold">7</h2>
//             <p className="text-sm">Year Experience</p>
//           </div>

//           <div>
//             <h2 className="text-4xl font-bold">2</h2>
//             <p className="text-sm">Opened in the country</p>
//           </div>

//           <div>
//             <h2 className="text-4xl font-bold">10k+</h2>
//             <p className="text-sm">Furniture sold</p>
//           </div>

//           <div>
//             <h2 className="text-4xl font-bold">260+</h2>
//             <p className="text-sm">Variant Furniture</p>
//           </div>
//         </div>
//       </div>
//       </header>
//     </section>
//   );
// }

// export default Hero;

// import heroImage from "../../assets/images/Herosection.jpeg";

// function Hero() {
//   return (
//     <section className="bg-gray-50 flex flex-col md:flex-row items-left justify-between px-6 md:px-16 py-16 md:py-24">
//       {/* Image Section */}
//       <div className="md:w-1/2 flex justify-center mb-1 md:mb-0">
//         <img
//           src={heroImage}
//           alt="Modern Furniture"
//           className="rounded-0 shadow-xl w-full max-w-sm object-cover h-80"
//         />
//       </div>

//       {/* Text*/}
//       <div className="md:w-1/2 text-center md:text-left space-y-6">
//         <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
//           Brewed Fresh, Served with Love
//         </h1>
//         <p className="text-gray-600 max-w-md mx-auto md:mx-0">
//           Start your day with the perfect cup, crafted with passion and warmth.
//         </p>
//         <p className="text-gray-600 max-w-md mx-auto md:mx-0">
//           <ul className="text-gray-600 text-[30] font-bold max-w-md mx-auto md:mx-0 list-disc list-inside">
//             <li>Best services</li>
//           </ul>
//           <p>Get served at your comfort zone at the shortest time possible</p>
//           <ul className="text-gray-600 text-[30] font-bold max-w-md mx-auto md:mx-0 list-disc list-inside">
//             <li>Production of best coffee beans</li>
//           </ul>
//           <p>For the ultimate coffe beans, we are the way to go!!</p>
//         </p>
//         <button className="bg-[#00B894] hover:bg-[#019875] transition-all duration-300 px-10 py-3 rounded-full text-white font-semibold shadow-md">
//           Shop Now
//         </button>
//       </div>
//     </section>
//   );
// }

// export default Hero;

//

import React from "react";

function Hero() {
  return (
    <section className="w-full bg-[#1a1a1a] text-white pt-24 pb-32 px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Creative Home Simplify Your Furniture
        </h1>
        <p className="text-base md:text-lg text-gray-300 mt-4 max-w-2xl">
          For a place to feel like home, it must feel like your imagination,
          comfort, and lifestyle combined into one.
        </p>

        <button className="mt-8 px-8 py-3 rounded-2xl bg-white text-black font-semibold shadow-lg hover:opacity-90 transition-all">
          Shop Now
        </button>
      </div>

      <div className="max-w-6xl mx-auto mt-16">
        <img
          src="/images/Herosection.jpeg"
          alt="Hero Furniture"
          className="w-full rounded-2xl shadow-xl object-cover"
        />
      </div>
    </section>
  );
}

export default Hero;
