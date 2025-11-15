function Footer() {
  return (
    <footer className="bg-[#1a120b] text-gray-300 py-16 border-t border-[#d4af37]/20">
      <div className="container mx-auto px-6 grid md:grid-cols-5 gap-10">
        {/* Brand / Logo */}
        <div>
          <h3 className="font-bold text-[#d4af37] text-2xl mb-4">SoulSpace</h3>
          <p className="text-sm text-gray-400">
            A contemporary art gallery curating soulful, timeless works from
            Africa and beyond.
          </p>
        </div>

        {/* Collections */}
        <div>
          <h4 className="font-semibold mb-3 text-[#d4af37]">Collections</h4>
          <ul className="space-y-2 text-sm">
            <li>Modern Abstracts</li>
            <li>Figurative Works</li>
            <li>Photography</li>
            <li>Limited Editions</li>
          </ul>
        </div>

        {/* Artists */}
        <div>
          <h4 className="font-semibold mb-3 text-[#d4af37]">Artists</h4>
          <ul className="space-y-2 text-sm">
            <li>Resident Artists</li>
            <li>Guest Curators</li>
            <li>Artist Spotlights</li>
            <li>Submissions</li>
          </ul>
        </div>

        {/* Visit */}
        <div>
          <h4 className="font-semibold mb-3 text-[#d4af37]">Visit</h4>
          <ul className="space-y-2 text-sm">
            <li>Exhibitions</li>
            <li>Studio Tours</li>
            <li>Private Viewings</li>
            <li>Virtual Gallery</li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h4 className="font-semibold mb-3 text-[#d4af37]">Connect</h4>
          <ul className="space-y-2 text-sm">
            <li>Instagram</li>
            <li>LinkedIn</li>
            <li>Email Us</li>
            <li>Join Mailing List</li>
          </ul>
        </div>
      </div>

      <p className="text-center text-sm mt-10 text-gray-500 border-t border-[#d4af37]/10 pt-6">
        © SoulSpace Gallery 2025. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;