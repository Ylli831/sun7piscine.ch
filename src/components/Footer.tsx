"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#c3d5fd] to-[#a7c7f7] text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-gray-900">SUN7 Piscine</h3>
            <p className="text-gray-700 leading-relaxed">
              Votre partenaire de confiance pour piscines et spas en Suisse Romande.
              Plus de 20 ans d&apos;expérience dans la construction, rénovation et entretien.
            </p>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-xl font-semibold text-gray-900">Nos Services</h4>
            <ul className="space-y-2">
              {[
                "Construction de piscines",
                "Rénovation & Modernisation",
                "Entretien & Maintenance",
                "Installation de spas",
                "Dépannage d'urgence",
                "Produits & Accessoires"
              ].map((service) => (
                <li key={service}>
                  <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors duration-300">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-xl font-semibold text-gray-900">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gray-600 mt-0.5 flex-shrink-0" />
                <div className="text-gray-700">
                  <div className="font-medium">Adresse</div>
                  <div className="text-sm">Esplanade des Récréations 22</div>
                  <div className="text-sm">1217 Meyrin, Suisse</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-600 flex-shrink-0" />
                <div className="text-gray-700">
                  <div className="font-medium">Téléphone</div>
                  <div className="text-sm">+41 79 346 32 00</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-600 flex-shrink-0" />
                <div className="text-gray-700">
                  <div className="font-medium">Email</div>
                  <div className="text-sm">contact@sun7piscine.ch</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-gray-600 mt-0.5 flex-shrink-0" />
                <div className="text-gray-700">
                  <div className="font-medium">Horaires</div>
                  <div className="text-sm">Lun-Ven: 8h-18h</div>
                  <div className="text-sm">Sam: 9h-16h</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-xl font-semibold text-gray-900">Liens Rapides</h4>
            <ul className="space-y-2">
              {[
                { label: "À propos", href: "#" },
                { label: "Nos Réalisations", href: "#portfolio" },
                { label: "Devis Gratuit", href: "#quote" },
                { label: "Contact", href: "#" },
                { label: "FAQ", href: "#" },
                { label: "Mentions légales", href: "#" }
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-700 hover:text-gray-900 transition-colors duration-300">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-white/30 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <div className="text-gray-700 text-sm">
            © {new Date().getFullYear()} SUN7 Piscine. Tous droits réservés.
          </div>
          <div className="text-gray-700 text-sm">
            Site réalisé par{" "}
            <a
              href="https://atlas-studio.eu"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900 transition-colors duration-300"
            >
              Atlas Studio
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}