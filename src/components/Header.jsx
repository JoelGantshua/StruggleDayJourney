
import React from "react";
export default function Header() {
    return (
      <header className="bg-black text-white p-5 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Struggle Day Journey</h1>
        <nav>
          <ul className="flex gap-6">
            <li><a href="/" className="hover:text-gray-400">Accueil</a></li>
            <li><a href="/services" className="hover:text-gray-400">Services</a></li>
            <li><a href="/contacts" className="hover:text-gray-400">Contact</a></li>
          </ul>
        </nav>
      </header>
    );
  }
  