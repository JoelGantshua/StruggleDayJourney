import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const form = useRef();
  const [success, setSuccess] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7241mlo", // ⚡ ton service ID
        "template_uz3hjln", // ⚡ ton template ID
        form.current,
        "LhgImiIizNgMuJ3ZZ" // ⚡ ta clé publique
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error.text);
        }
      );
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Infos Contact */}
        <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
            Nos coordonnées
          </h2>
          <div className="space-y-6 text-gray-700">
            <div className="flex items-center space-x-3">
              <FaMapMarkerAlt className="text-blue-600 text-xl" />
              <span>📍 Montreuil, France</span>
            </div>
            <div className="flex items-center space-x-3">
              <FaPhone className="text-blue-600 text-xl" />
              <span>📞 +33 6 69 00 54 70</span>
            </div>
            <div className="flex items-center space-x-3">
              <FaEnvelope className="text-blue-600 text-xl" />
              <span>📧 hodeempire@gmail.com</span>
            </div>
          </div>
          <div className="mt-6 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d34558.68120754138!2d2.4078558343136938!3d48.863740810970214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66d45530eef85%3A0xa3aa7c6db0c45bf0!2s93100%20Montreuil%2C%20France!5e1!3m2!1sfr!2sma!4v1759172472580!5m2!1sfr!2sma"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map Montreuil"
            ></iframe>
          </div>
        </div>

        {/* Formulaire */}
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
            Contactez-nous
          </h2>
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <input
              type="text"
              name="from_name"   // correspond  {{from_name}} dans ton template
              placeholder="Votre nom complet"
              required
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            <input
              type="email"
              name="from_email"   // correspond à {{from_email}}
              placeholder="Votre email"
              required
              className="w-full p-3 border border-gray-300 rounded-lg"
            />

            {/* Menu déroulant des services */}
            <select
              name="from_services"
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-lg"
            >
              <option value="">-- Choisissez un service --</option>
              <option value="Perte de Poids">Perte de Poids</option>
              <option value="Coaching Personnel">Coaching Personnel</option>
              <option value="Accompagnement Projet">Accompagnement Projet</option>
              <option value="Développement Personnel">Développement Personnel</option>
              <option value="Pack Complet">Pack Complet</option>
              <option value="Programme sur Demande">Programme sur Demande</option>
            </select>

            <textarea
              name="message"   // à {{message}}
              rows="5"
              placeholder="Votre message"
              required
              className="w-full p-3 border border-gray-300 rounded-lg"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Envoyer
            </button>
          </form>
          {success && (
            <p className="mt-4 text-green-600 text-center">
              ✅ Message envoyé avec succès !
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
