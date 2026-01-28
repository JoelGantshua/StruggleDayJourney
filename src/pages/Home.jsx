import React, { useState } from "react";
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
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      name: "Laury Sharone",
      city: "Paris",
      img: "./images/site.jpeg",
      text: "J'ai eu l'opportunité d'un mois de coaching gratuit, qui s'est révélé extrêmement bénéfique. Ce suivi m'a permis d'adopter des meilleures habitudes alimentaires et sportives adaptées à mes besoins. En un mois, j'ai constaté une progression significative, passant de 50kg à 57 kg, tout en améliorant mon énergie et mon bien-être général. Un accompagnement de qualité que je recommande vivement.",
    },
    {
      id: 2,
      name: "Brigitte M.",
      city: "Lille",
      img: "./images/tst.jpg",
      text: "Le coaching gratuit d'un mois m'a vraiment beaucoup aidé, au niveau de l'alimentation et du sport. Ce n'était pas seulement un programme sportif, j'ai appris à mieux manger, mieux m'organiser à la salle. En 1 mois, j'ai vu une vraie transformation, je suis passé de 106 kilos à 95 kilos et je me sens beaucoup mieux dans mon corps. J'ai aussi gagné en confiance en moi. Au début je ne savais pas trop comment organiser mes séances à la salle mais vous m'avez donné des exemples d'exercices à faire à la salle ce qui m'a aidé à prendre un bon rythme. Également pour l'alimentation, j'ai eu un vrai suivi avec des conseils qui m'ont permis de savoir ce que je dois manger. Vous avez cru en moi alors que même moi malgré ma motivation je n'ai pas eu autant confiance en moi pour la perte de poids. J'ai décidé de continuer avec vous parce que le mois gratuit s'est très bien passé. Je tiens à vous remercier pour votre patience, votre disponibilité et votre motivation.",
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div>
      {/* Hero Section avec image de fond (réduite à 80vh) */}
      <section
        className="relative h-[90vh]  flex items-center justify-center text-center text-white"
        style={{
          backgroundImage:
            "url('/images/two.jpeg')",
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

      {/* Témoignages */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Ce que disent nos clients</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-6 relative">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonials[currentTestimonial].img} 
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold text-lg">{testimonials[currentTestimonial].name}</h3>
                  <p className="text-gray-600">{testimonials[currentTestimonial].city}</p>
                </div>
              </div>
              <div 
                className="text-gray-700 mb-6 max-h-60 overflow-y-auto pr-2"
                style={{ scrollbarWidth: 'thin', scrollbarColor: '#a78bfa #e2e8f0' }}
              >
                <p className="italic">"{testimonials[currentTestimonial].text}"</p>
              </div>
              
              {/* Boutons de navigation */}
              <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                <button
                  onClick={prevTestimonial}
                  className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-md hover:bg-indigo-200 transition-colors"
                  disabled={testimonials.length <= 1}
                >
                  Précédent
                </button>
                <div className="text-sm text-gray-500">
                  {currentTestimonial + 1} / {testimonials.length}
                </div>
                <button
                  onClick={nextTestimonial}
                  className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
                  disabled={testimonials.length <= 1}
                >
                  Suivant
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
