import headerImage from "../../assets/images/headerimage.jpeg";

function Header() {
  return (
    <header
      className="relative bg-cover bg-center text-white shadow-lg h-75"
      style={{ backgroundImage: `url(${headerImage})` }}
    >
      {/* Opacity */}
      <div className="absolute inset-0 bg-black bg-opacity-30 h-75"></div>

      {/* Header content */}
      <div className="relative container mx-auto flex items-center justify-between py-20 px-8">
        {/* My Brand */}
        <div className="flex items-center gap-0 mr-6">
          <h1 className="text-2xl font-bold tracking-wide">Coffee Haven </h1>
        </div>

        {/* Nav Bar */}
        <nav>
          <ul className="flex items-end space-x-4 text-lg font-medium color-blue-200 mt-2">
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
    </header>
  );
}

export default Header;
