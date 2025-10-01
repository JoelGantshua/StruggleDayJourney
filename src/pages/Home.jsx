import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Animation réutilisable
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.8 },
  }),
};

export default function Home() {
  const testimonials = [
    {
      id: 1,
      name: "Marie Dupont",
      city: "Paris",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
      text: "Une équipe formidable qui m’a aidée à dépasser mes limites et atteindre mes objectifs.",
    },
    {
      id: 2,
      name: "Ahmed Benali",
      city: "Casablanca",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      text: "Le coaching m’a permis de clarifier ma vision professionnelle.",
    },
    {
      id: 3,
      name: "Clara Rossi",
      city: "Rome",
      img: "https://randomuser.me/api/portraits/women/68.jpg",
      text: "Des formations de qualité, interactives et motivantes !",
    },
    {
      id: 4,
      name: "Jean-Paul Martin",
      city: "Lyon",
      img: "https://randomuser.me/api/portraits/men/56.jpg",
      text: "Une expérience enrichissante qui a transformé ma carrière.",
    },
  ];

  return (
    <div>
      {/* Hero Section avec image de fond (réduite à 80vh) */}
      <section
        className="relative h-[80vh]  flex items-center justify-center text-center text-white"
        style={{
          backgroundImage:
            "url('/images/site2.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 px-6">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl font-bold"
          >
            Bienvenue sur Struggle Day Journey
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-4 text-xl text-gray-200"
          >
            Un accompagnement personnalisé pour transformer vos défis en réussites.
          </motion.p>

          {/* Bouton animé */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 inline-block"
          >
            <Link
              to="/services"
              className="bg-blue-600 px-6 py-3 rounded-lg shadow hover:bg-purple-700 transition block"
            >
              Découvrir nos services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <motion.section
        id="section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="py-16 px-6 md:px-20 text-center bg-gray-100"
      >
        <h2 className="text-3xl font-bold mb-4">Qui sommes-nous ?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Nous aidons les individus et les organisations à atteindre leur plein potentiel grâce
          à des services de coaching, de formation et de conseil adaptés.
        </p>
      </motion.section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 p-10 bg-gray-100">
  {["Coaching", "Formations", "Consulting"].map((title, i) => (
    <motion.div
      key={i}
      custom={i}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      transition={{ delay: i * 0.2 }}
      className="bg-white shadow-lg p-6 rounded-lg text-center transform transition duration-300 hover:scale-105"
    >
      <h3 className="text-xl font-bold mb-2" id="section-cible">{title} </h3>
      <p>
        {title === "Coaching" &&
          "Un suivi personnalisé pour vos objectifs personnels et professionnels."}
        {title === "Formations" &&
          "Des programmes interactifs et modernes pour développer vos compétences."}
        {title === "Consulting" &&
          "Des conseils stratégiques pour booster vos projets et entreprises."}
      </p>
    </motion.div>
  ))}
</section>


      {/* Call To Action */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-24 text-center"
      >
        <h2 className="text-3xl font-bold">Prêt à commencer ?</h2>
        <p className="mt-3 text-lg">
          Rejoignez notre communauté et transformez vos ambitions en réalité.
        </p>

        <motion.div
            whileHover={{ scale: 1.1, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 inline-block"
          >
            <Link
              to="/Contact"
              className="bg-indigo-500 px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition block"
            >
              Nous contacter
            </Link>
          </motion.div>
      </motion.section>

      {/* Témoignages en deux lignes, sens opposés */}
      <section className="py-10 bg-gray-100 overflow-hidden ">
        <h2 className="text-3xl font-bold text-center mb-10">Témoignages</h2>

        {/* Ligne 1 → gauche */}
        <motion.div
          className="flex gap-6 mb-8"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "linear",
          }}
          style={{ width: "max-content" }}
        >
          {[...testimonials, ...testimonials].map((t, index) => (
            <div
              key={index}
              className="bg-white shadow-md p-4 rounded-lg w-60 flex-shrink-0 text-center"
            >
              <img
                src={t.img}
                alt={t.name}
                className="w-14 h-14 rounded-full mx-auto mb-3"
              />
              <p className="italic text-gray-600 text-sm">"{t.text}"</p>
              <h4 className="mt-2 font-bold">{t.name}</h4>
              <p className="text-xs text-gray-500">{t.city}</p>
            </div>
          ))}
        </motion.div>

        {/* Ligne 2 → droite */}
        <motion.div
          className="flex gap-6"
          animate={{ x: ["-100%", "0%"] }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "linear",
          }}
          style={{ width: "max-content" }}
        >
          {[...testimonials, ...testimonials].map((t, index) => (
            <div
              key={index}
              className="bg-white shadow-md p-4 rounded-lg w-60 flex-shrink-0 text-center"
            >
              <img
                src={t.img}
                alt={t.name}
                className="w-14 h-14 rounded-full mx-auto mb-3"
              />
              <p className="italic text-gray-600 text-sm">"{t.text}"</p>
              <h4 className="mt-2 font-bold">{t.name}</h4>
              <p className="text-xs text-gray-500">{t.city}</p>
            </div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
