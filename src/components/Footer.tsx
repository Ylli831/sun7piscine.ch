"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer 
      className="relative text-brand-sky"
      style={{
        background: 'url(/layered-waves-footer.png) no-repeat center center',
        backgroundSize: '100% 100%'
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/70 to-cyan-700/80"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-brand-sky flex items-center gap-3">
              <Image
                src="/logo-without-bg.png"
                alt="SUN7 Piscine"
                width={56}
                height={56}
                className="h-14 w-14 object-contain"
                priority
              />
              SUN7 Piscine
            </h3>
            <p className="text-brand-sky opacity-90 leading-relaxed">
              Votre partenaire de confiance pour piscines et spas en Suisse Romande.
              Plus de 20 ans d&apos;expérience dans la construction, rénovation et entretien.
            </p>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="bg-white/20 hover:bg-white/40 p-3 rounded-full transition-all duration-300 text-white"
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="bg-white/20 hover:bg-white/40 p-3 rounded-full transition-all duration-300 text-white"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="bg-white/20 hover:bg-white/40 p-3 rounded-full transition-all duration-300 text-white"
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
            <h4 className="text-xl font-semibold text-brand-sky">Nos Services</h4>
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
                  <a href="#" className="text-brand-sky hover:text-white transition-colors duration-300">
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
            <h4 className="text-xl font-semibold text-brand-sky">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-brand-sky mt-0.5 flex-shrink-0" />
                <div className="text-brand-sky/90">
                  <div className="font-medium text-brand-sky">Adresse</div>
                  <div className="text-sm text-brand-sky/80">Esplanade des Récréations 22</div>
                  <div className="text-sm text-brand-sky/80">1217 Meyrin, Suisse</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-brand-sky flex-shrink-0" />
                <div className="text-brand-sky/90">
                  <div className="font-medium text-brand-sky">Téléphone</div>
                  <div className="text-sm text-brand-sky/80">+41 79 346 32 00</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-brand-sky flex-shrink-0" />
                <div className="text-brand-sky/90">
                  <div className="font-medium text-brand-sky">Email</div>
                  <div className="text-sm text-brand-sky/80">info@sun7piscine.ch</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-brand-sky mt-0.5 flex-shrink-0" />
                <div className="text-brand-sky/90">
                  <div className="font-medium text-brand-sky">Horaires</div>
                  <div className="text-sm text-brand-sky/80">Lun-Ven: 8h-18h</div>
                  <div className="text-sm text-brand-sky/80">Sam: 9h-16h</div>
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
            <h4 className="text-xl font-semibold text-brand-sky">Liens Rapides</h4>
            <ul className="space-y-2">
              {[
                { label: "À propos", href: "/about" },
                { label: "Nos Services", href: "/services" },
                { label: "Réalisations", href: "/portfolio" },
                { label: "Demander un devis", href: "/contact" },
                { label: "Contact", href: "/#contact" },
                { label: "FAQ", href: "/faq" }
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-brand-sky hover:text-white transition-colors duration-300">
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
          <div className="text-brand-sky/80 text-sm">
            © {new Date().getFullYear()} SUN7 Piscine. Tous droits réservés.
          </div>
          <div className="text-brand-sky/80 text-sm">
            Site réalisé par{" "}
            <a
              href="https://atlas-studio.eu"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-300"
            >
              Atlas Studio
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}