import bestImage from "../../assets/images/bestbrewer.jpeg";

function Bestbrewer() {
  return (
    <section className="bg-white flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-16">
      {/* Text*/}
      <div className="md:w-1/2 text-center md:text-left space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
          The Best Coffee Roaster of Your Choice
        </h2>
        <p className="text-gray-600 max-w-md mx-auto md:mx-0">
          At Coffee Haven, we source premium beans and roast them to perfection,
          ensuring every sip delivers unmatched flavor and freshness
        </p>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <img
          src={bestImage}
          alt="Best Furniture Manufacturer"
          className="rounded-0 shadow-lg w-full max-w-md md:max-w-lg object-cover h-80"
        />
      </div>
    </section>
  );
}

export default Bestbrewer;
