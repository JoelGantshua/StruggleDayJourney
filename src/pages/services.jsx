import React from "react";
import { FaWeight, FaUsersCog, FaStar, FaBrain, FaCrown, FaMagic } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Variants pour animations au scroll
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

export default function Services() {
  return (
    <div className="bg-gray-900 text-gray-200">
      {/* Hero Section avec image en fond */}
      {/* Hero Section style Watch.ME */}
<section className="bg-white dark:bg-gray-800 flex relative z-20 items-center overflow-hidden">
  <div className="container mx-auto px-5 flex flex-col-reverse sm:flex-row relative py-16">
    {/* Texte Hero */}
    <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20 text-center sm:text-left">
      <span className="w-20 h-2 bg-gray-800 dark:bg-white mb-12 mx-auto sm:mx-0"></span>
      <motion.h1
        className="font-bebas-neue uppercase text-5xl sm:text-7xl font-black flex flex-col leading-none dark:text-white text-gray-800"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
      >
        Nos
        <span className="text-4xl sm:text-6xl">Services</span>
      </motion.h1>
      <motion.p
        className="text-sm sm:text-base text-gray-700 dark:text-white mt-4"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
      >
        Découvrez nos programmes personnalisés conçus pour vous accompagner
        dans votre transformation personnelle et professionnelle.
      </motion.p>
      <div className="flex mt-8 justify-center sm:justify-start">
        <Link
          to="/contact"
          onClick={() => window.scrollTo(0, 0)}
          className="uppercase py-2 px-4 rounded-lg bg-purple-700 border-2 border-transparent text-white text-md mr-4 hover:bg-blue-400"
        >
          Commencer
        </Link>
        <Link
          to="/#section"
          onClick={() => window.scrollTo(0, 0)}
          className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-purple-700 text-pink-500 dark:text-white hover:bg-blue-400 hover:text-white text-md"
        >
          En savoir plus
        </Link>
      </div>
    </div>

    {/* Image Hero */}
    <div className="sm:w-1/3 lg:w-3/5 relative mb-8 sm:mb-0">
      <img
        src="/images/one1.jpeg" // 👉 place ton image dans public/images/
        alt="hero"
        className="max-w-xs md:max-w-sm lg:max-w-md m-auto"
      />
    </div>
  </div>
</section>

      {/* Services Section */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-indigo-400">
          Nos Programmes
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Service Card 1 */}
          <motion.div
            className="bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform transition duration-300 hover:scale-105"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
          >
            <div className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white text-4xl flex items-center justify-center py-6">
              <FaWeight />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-indigo-300">
                Perte de Poids
              </h3>
              <p className="mb-4 text-gray-400">
                Un programme personnalisé pour atteindre vos objectifs de poids de manière saine
                et durable.
              </p>
              <ul className="mb-4 space-y-2 text-gray-400">
                <li>✓ Plan nutritionnel personnalisé</li>
                <li>✓ Suivi hebdomadaire</li>
                <li>✓ Exercices adaptés</li>
                <li>✓ Support motivationnel</li>
              </ul>
              <div className="text-purple-400 font-bold text-lg mb-4">60€/mois</div>
              <Link
                to="/contact"
                state={{ service: "Perte de Poids" }}
                onClick={() => window.scrollTo(0, 0)}
                className="btn-primary"
              >
                Commencer
              </Link>
            </div>
          </motion.div>

          {/* Service Card 2 */}
          <motion.div
            className="bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform transition duration-300 hover:scale-105"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
          >
            <div className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white text-4xl flex items-center justify-center py-6">
              <FaUsersCog />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-indigo-300">
                Coaching Personnel 
              </h3>
              <p className="mb-4 text-gray-400">
                Des ateliers interactifs et du coaching individuel pour développer vos compétences
                personnelles.
              </p>
              <ul className="mb-4 space-y-2 text-gray-400">
                <li>✓ Prise de parole en public</li>
                <li>✓ Image, Standards, Opportunités</li>
                <li>✓ Développer et maximiser son potentiel</li>
                <li>✓ Liberté financière et création de revenus</li>
              </ul>
              <div className="text-purple-400 font-bold text-lg mb-4">70€/Séance</div>
              <Link
                to="/contact"
                state={{ service: "Coaching Personnel" }}
                onClick={() => window.scrollTo(0, 0)}
                className="btn-primary"
              >
                Réserver
              </Link>
            </div>
          </motion.div>

          {/* Service Card 3 */}
          <motion.div
            className="bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform transition duration-300 hover:scale-105"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
          >
            <div className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white text-4xl flex items-center justify-center py-6">
              <FaStar />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-indigo-300">
                Accompagnement de projet
              </h3>
              <p className="mb-4 text-gray-400">
                Choisissez la formule adaptée à votre projet : Basic ou Premium.
              </p>
              <div className="bg-indigo-950 p-4 rounded mb-3">
                <strong>Basic (145€)</strong>
                <ul className="mt-2 space-y-1 text-gray-400">
                  <li>✓ Étude du projet</li>
                  <li>✓ Proposition d'amélioration / orientation</li>
                  <li>✓ Business plan</li>
                </ul>
              </div>
              <div className="bg-purple-950 p-4 rounded mb-4">
                <strong>Premium (650€)</strong>
                <ul className="mt-2 space-y-1 text-gray-400">
                  <li>✓ Stratégie de pénétration du marché</li>
                  <li>✓ Stratégie commerciale, communication et marketing</li>
                  <li>✓ Document complet étudié</li>
                  <li>✓ Recommandation vers partenaires</li>
                </ul>
              </div>
              <Link
                to="/contact"
                state={{ service: "Accompagnement de projet" }}
                onClick={() => window.scrollTo(0, 0)}
                className="btn-primary"
              >
                Commencer
              </Link>
            </div>
          </motion.div>

          {/* Service Card 4 */}
          <motion.div
            className="bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform transition duration-300 hover:scale-105"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
          >
            <div className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white text-4xl flex items-center justify-center py-6">
              <FaBrain />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-indigo-300">
                Développement Personnel (4 mois)
              </h3>
              <p className="mb-4 text-gray-400">
              Allier la guerison des traumas à l'expression de soi.
              </p>
              <ul className="mb-4 space-y-2 text-gray-400">
                <li>✓ Liberation et sécurité interieure</li>
                <li>✓ Reconstruction de l'estime de soi</li>
                <li>✓ L'art de la parole </li>
                <li>✓ Découverte de soi</li>
                <li>✓ Intelligence émotionnelle</li>
                <li>✓ Confiance et dépassement de soi</li>
                <li>✓ Devenir la meilleure version de soi</li>
              </ul>
              <div className="text-purple-400 font-bold text-lg mb-4">Payable en 4 fois</div>
              <Link
                to="/contact"
                state={{ service: "Développement Personnel" }}
                onClick={() => window.scrollTo(0, 0)}
                className="btn-primary"
              >
                Commencer
              </Link>
            </div>
          </motion.div>

          {/* Service Card 5 */}
          <motion.div
            className="bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform transition duration-300 hover:scale-105"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
          >
            <div className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white text-4xl flex items-center justify-center py-6">
              <FaCrown />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-indigo-300">
                Boss Move (6 mois)
              </h3>
              <p>Devenez l'atout majeur de votre propre réussite. L'éveil  du leader: identité, image, et impact business.</p>
              <p className="mb-4 text-gray-400">
                L'offre ultime incluant tous nos services avec un tarif préférentiel. <br />
                <strong>Payable en 4 fois</strong>
              </p>
              <ul className="mb-4 space-y-2 text-gray-400">
                <li>✓ Mindset</li>
                <li>✓ Image et Branding</li>
                <li>✓ Networking</li>
                <li>✓ Business</li>
                <li>✓ VIP acces</li>
              </ul>
              <div className="text-purple-400 font-bold text-lg mb-4">Payable en 4 fois</div>
              <Link
                to="/contact"
                state={{ service: "Pack Complet" }}
                onClick={() => window.scrollTo(0, 0)}
                className="btn-primary"
              >
                Commencer
              </Link>
            </div>
          </motion.div>

          {/* Service Card 6 */}
          <motion.div
            className="bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform transition duration-300 hover:scale-105"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
          >
            <div className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white text-4xl flex items-center justify-center py-6">
              <FaMagic />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-indigo-300">
                Programme sur Demande
              </h3>
              <p className="mb-4 text-gray-400">
                Créez votre programme personnalisé avec une flexibilité maximale et une tarification adaptée.
              </p>
              <ul className="mb-4 space-y-2 text-gray-400">
                <li>✓ Personnalisation complète</li>
                <li>✓ Flexibilité maximale</li>
                <li>✓ Tarification adaptée</li>
                <li>✓ Programme sur mesure</li>
              </ul>
              <div className="text-purple-400 font-bold text-lg mb-4">Sur devis</div>
              <Link
                to="/contact"
                state={{ service: "Programme sur Demande" }}
                onClick={() => window.scrollTo(0, 0)}
                className="btn-special"
              >
                Créer mon programme
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-800 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-indigo-400">
            Notre Méthode en 4 Étapes
          </h2>
          <div className="grid gap-8 md:grid-cols-4 ">
            {[
              { num: "1", title: "Diagnostic", desc: "Analyse de votre situation et de vos objectifs." },
              { num: "2", title: "Planification", desc: "Création d’un plan d’action personnalisé." },
              { num: "3", title: "Action", desc: "Mise en œuvre et suivi régulier." },
              { num: "4", title: "Évaluation", desc: "Mesure des progrès et ajustements." },
            ].map((step, i) => (
              <motion.div
                key={i}
                className="text-center p-6 bg-gray-900 rounded-xl shadow hover:shadow-lg transform transition duration-300 hover:scale-105"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                custom={i}
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-r from-indigo-600 to-purple-700 text-white flex items-center justify-center font-bold">
                  {step.num}
                </div>
                <h3 className="font-semibold mb-2 text-indigo-300">{step.title}</h3>
                <p className="text-gray-400">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white text-center py-20">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
        >
          Prêt à transformer votre vie ?
        </motion.h2>
        <motion.p
          className="mb-6 max-w-xl mx-auto"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
        >
          Rejoignez Struggle Day Journey et commencez votre voyage vers le développement personnel dès aujourd'hui.
        </motion.p>
        <Link
          to="/contact"
          state={{ service: "" }}
          onClick={() => window.scrollTo(0, 0)}
          className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Commencer maintenant
        </Link>
      </section>
    </div>
  );
}

/* ✅ Styles personnalisés Tailwind */
const styles = `
.btn-primary {
  @apply inline-block bg-gradient-to-r from-indigo-600 to-purple-700 text-white px-6 py-2 rounded-full font-semibold shadow hover:shadow-lg transition;
}
.btn-special {
  @apply inline-block bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-2 rounded-full font-semibold shadow hover:shadow-lg transition;
}
`;

/* Injection des styles */
if (typeof document !== "undefined") {
  const style = document.createElement("style");
  style.innerHTML = styles;
  document.head.appendChild(style);
}
