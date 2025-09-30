"use client";

import { motion } from "framer-motion";
import { Award, Users, Clock, Shield, Star, Phone } from "lucide-react";
import Image from "next/image";
import WaterPipeScrollIndicator from "../../components/WaterPipeScrollIndicator";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <WaterPipeScrollIndicator />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-cyan-700 text-[#C3D5FD] py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              À Propos de SUN7
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Votre partenaire de confiance pour la création et l'entretien de piscines en Suisse Romande depuis plus de 20 ans
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-[#C3D5FD]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-[#112A46] mb-6">
                Notre Histoire
              </h2>
              <div className="space-y-6 text-[#112A46] text-lg">
                <p>
                  Fondée en 2008, SUN7 est née de la passion de créer des espaces aquatiques exceptionnels. 
                  Notre expertise s'est développée au fil des années pour devenir une référence en Suisse Romande.
                </p>
                <p>
                  Nous croyons que chaque piscine doit être unique, refléter la personnalité de son propriétaire 
                  et s'intégrer parfaitement dans son environnement. C'est cette philosophie qui guide chacun de nos projets.
                </p>
                <p>
                  Aujourd'hui, avec plus de 200 réalisations à notre actif, nous continuons d'innover 
                  pour offrir les meilleures solutions à nos clients.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <Image
                      src="/sun7piscine-images/pool34-cool.jpg"
                      alt="Équipe SUN7"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-32 rounded-lg overflow-hidden">
                    <Image
                      src="/sun7piscine-images/pool29-cool.jpg"
                      alt="Travaux en cours"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="relative h-32 rounded-lg overflow-hidden">
                    <Image
                      src="/sun7piscine-images/pool19-cool.jpg"
                      alt="Finitions de qualité"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <Image
                      src="/sun7piscine-images/pool31-cool.jpg"
                      alt="Piscine terminée"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-[#C3D5FD]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#112A46] mb-6">
              Nos Valeurs
            </h2>
            <p className="text-xl text-[#112A46] max-w-3xl mx-auto">
              Ce qui nous guide dans chacune de nos réalisations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Excellence",
                description: "Nous visons l'excellence dans chaque détail, de la conception à la réalisation."
              },
              {
                icon: Users,
                title: "Écoute Client",
                description: "Votre satisfaction est notre priorité. Nous écoutons vos besoins et y répondons."
              },
              {
                icon: Clock,
                title: "Respect des Délais",
                description: "Nous nous engageons à respecter les délais convenus pour tous nos projets."
              },
              {
                icon: Shield,
                title: "Garantie Qualité",
                description: "Tous nos travaux sont garantis 10 ans, gage de notre confiance en notre savoir-faire."
              },
              {
                icon: Star,
                title: "Innovation",
                description: "Nous restons à la pointe des technologies et tendances du secteur."
              },
              {
                icon: Phone,
                title: "Service Après-Vente",
                description: "Notre relation ne s'arrête pas à la livraison. Nous assurons un suivi complet."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#C3D5FD] border border-[#112A46]/20 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center mb-6">
                  <value.icon className="w-8 h-8 text-[#112A46]" />
                </div>
                <h3 className="text-xl font-bold text-[#112A46] mb-4">
                  {value.title}
                </h3>
                <p className="text-[#112A46] opacity-80">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-[#C3D5FD]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#112A46] mb-6">
              Notre Équipe
            </h2>
            <p className="text-xl text-[#112A46] max-w-3xl mx-auto">
              Des professionnels passionnés et expérimentés à votre service
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "Marc Dubois",
                role: "Fondateur & Directeur",
                experience: "20 ans d'expérience",
                speciality: "Conception et gestion de projets"
              },
              {
                name: "Sophie Martin",
                role: "Architecte Paysagiste",
                experience: "20+ ans d'expérience",
                speciality: "Design et intégration paysagère"
              },
              {
                name: "Thomas Leroy",
                role: "Chef d'Équipe Technique",
                experience: "18 ans d'expérience",
                speciality: "Installation et rénovation"
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <div className="text-3xl font-bold text-white">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#112A46] mb-2">
                  {member.name}
                </h3>
                <p className="text-amber-600 font-semibold mb-2">
                  {member.role}
                </p>
                <p className="text-[#112A46] opacity-70 text-sm mb-2">
                  {member.experience}
                </p>
                <p className="text-[#112A46] opacity-80 text-sm">
                  {member.speciality}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-[#C3D5FD]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              Certifications & Partenaires
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Notre expertise reconnue par les professionnels du secteur
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              "Certification ISO 9001",
              "Membre FPP Suisse",
              "Partenaire Zodiac",
              "Garantie Décennale"
            ].map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 border border-gray-700 rounded-lg"
              >
                <div className="w-16 h-16 bg-amber-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Award className="w-8 h-8" />
                </div>
                <p className="font-semibold">{cert}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Travaillons Ensemble
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Vous avez un projet ? Parlons-en ! Notre équipe est là pour vous accompagner 
              et réaliser la piscine de vos rêves.
            </p>
            <div className="space-x-4">
              <a
                href="/#contact"
                className="inline-block bg-amber-400 text-[#112A46] hover:bg-amber-500 font-semibold py-4 px-8 rounded-full transition-colors duration-200"
              >
                Nous Contacter
              </a>
              <a
                href="/portfolio"
                className="inline-block border-2 border-[#C3D5FD] hover:bg-[#C3D5FD] hover:text-[#112A46] text-[#C3D5FD] font-semibold py-4 px-8 rounded-full transition-colors duration-200"
              >
                Voir Nos Réalisations
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}