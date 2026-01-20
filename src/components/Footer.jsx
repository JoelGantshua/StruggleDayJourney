import React from "react";
import { Link } from "react-router-dom";
import { FaBrain } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-5">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Logo ou titre */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4 text-blue-600">
            Struggle Day Journey
          </h2>
          <p className="text-gray-400 text-sm">
            Un accompagnement personnalisé pour transformer vos défis en réussites.
          </p>
        </div>

        {/* Liens utiles */}
        <div className="flex flex-col items-center justify-center text-center">
          <h3 className="text-lg font-semibold mb-4 text-blue-600">Liens utiles</h3>
          <ul className="space-y-2">
            <li>
              <Link 
                to="/" 
                onClick={() => window.scrollTo(0, 0)}
                className="hover:text-yellow-400 transition"
              >
                Accueil
              </Link>
            </li>
            <li>
              <Link 
                to="/services" 
                onClick={() => window.scrollTo(0, 0)}
                className="hover:text-yellow-400 transition"
              >
                Services
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                onClick={() => window.scrollTo(0, 0)}
                className="hover:text-yellow-400 transition"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Réseaux sociaux */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right">
          <h3 className="text-lg font-semibold mb-4 text-blue-600">Suivez-nous</h3>
          <div className="flex flex-col space-y-2">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-yellow-400 transition">
              🌐 Facebook
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-yellow-400 transition">
              🌐 Instagram
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-yellow-400 transition">
              🌐 Twitter
            </a>
          </div>
        </div>
      </div>

      {/* Bas de page */}
      <div className="text-center text-gray-500 text-sm mt-8">
        &copy; {new Date().getFullYear()} Struggle Day Journey. Tous droits réservés.
        <div className="flex items-center justify-center mt-2">
          <span className="mr-1">Développé par</span>
          <a 
            href="https://joel-gantshua.vercel.app/" 
            target="_blank" 
            rel="noreferrer" 
            className="hover:text-blue-400 transition flex items-center"
            title="Visiter braincode"
          >
            <FaBrain className="text-blue-400 text-lg" /> 
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
