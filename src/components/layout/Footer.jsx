import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#0c0c0c] text-[#e5e5e5]">
      <div className="max-w-6xl mx-auto px-6 lg:px-24 py-12">
        {/*Socials */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-[#333] pb-10">
          <h1 className="text-2xl font-bold mb-6 md:mb-0 flex items-center gap-3 text-white">
            <img className="h-9" />
            <span>
              Coffee Haven<span className="text-[#d6b15a]"></span>
            </span>
          </h1>

          {/* Social Icons */}
          <div className="flex space-x-6 text-xl text-[#888]">
            <a href="#" className="hover:text-[#0fa3a3] transition-colors">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-[#0fa3a3] transition-colors">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-[#0fa3a3] transition-colors">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-[#0fa3a3] transition-colors">
              <FaGithub />
            </a>
            <a href="#" className="hover:text-[#0fa3a3] transition-colors">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 mt-10 text-sm">
          {/* Sessions */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Our Sessions</h3>
            <ul className="space-y-2">
              {[
                "Coffee Nights",
                "Morning Brews",
                "Weekend Specials",
                "Holiday Events",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-[#e5e5e5] hover:text-[#0fa3a3] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Resources</h3>
            <ul className="space-y-2">
              {[
                "Newsletter",
                "Help Center",
                "Privacy Policy",
                "Terms of Service",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-[#e5e5e5] hover:text-[#0fa3a3] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-2">
              {["About Us", "Careers", "Press", "Blog", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-[#e5e5e5] hover:text-[#0fa3a3] transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Connect</h3>
            <ul className="space-y-2">
              {["Instagram", "Facebook", "Twitter", "Email"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-[#e5e5e5] hover:text-[#0fa3a3] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 text-center text-sm border-t border-[#333] pt-6 text-[#bfbfbf]">
          ©CoffeeHaven {new Date().getFullYear()} All Rights Reserved
        </div>
      </div>
    </footer>
  );
}

export default Footer;
