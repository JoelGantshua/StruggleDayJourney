import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <nav className="container mx-auto flex justify-between items-center py-6 px-6">
        
        {/* Logo */}
        <Link to="/" className="text-3xl font-bold text-indigo-600">
          Struggle Day Journey
        </Link>

        {/* Bouton hamburger (mobile) */}
        <button
          className="md:hidden text-3xl text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>

        {/* Menu desktop */}
        <ul className="hidden md:flex space-x-6 text-2xl">
          <li>
            <Link to="/" className="text-gray-700 hover:text-indigo-600 font-medium">
              Accueil
            </Link>
          </li>
          <li>
            <Link to="/services" className="text-gray-700 hover:text-indigo-600 font-medium">
              Services
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-gray-700 hover:text-indigo-600 font-medium">
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* Menu mobile (dropdown) */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col items-center space-y-4 py-6 text-lg">
            <li>
              <Link 
                to="/" 
                onClick={() => setIsOpen(false)} 
                className="text-gray-700 hover:text-indigo-600 font-medium"
              >
                Accueil
              </Link>
            </li>
            <li>
              <Link 
                to="/services" 
                onClick={() => setIsOpen(false)} 
                className="text-gray-700 hover:text-indigo-600 font-medium"
              >
                Services
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                onClick={() => setIsOpen(false)} 
                className="text-gray-700 hover:text-indigo-600 font-medium"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
