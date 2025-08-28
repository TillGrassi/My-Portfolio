import { Navigation } from "@/components/Navigation/Navigation";
import { GalleryView } from "@/components/Gallery/GalleryView";
import { AboutSection } from "@/components/About/AboutSection";
import { ContactForm } from "@/components/Contact/ContactForm";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-warm-gray">
      <Navigation showAdminAccess />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-white to-warm-gray">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-deep-charcoal mb-6">
            Till Grassmann
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            {t("hero.subtitle")}
          </p>
          <a
            href="#gallery"
            className="inline-flex items-center bg-deep-charcoal text-white px-8 py-4 hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 font-medium"
          >
            {t("hero.cta")}
            <i className="fas fa-arrow-right ml-2"></i>
          </a>
        </div>
      </section>

      <GalleryView />
      <AboutSection />
      <ContactForm />

      {/* Footer */}
      <footer className="bg-deep-charcoal text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-serif text-2xl font-semibold mb-4">
                Till Grassmann
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {t("footer.description")}
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">{t("footer.quickLinks")}</h4>
              <div className="space-y-2">
                <a
                  href="#gallery"
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  {t("nav.gallery")}
                </a>
                <a
                  href="#about"
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  {t("nav.about")}
                </a>
                <a
                  href="#contact"
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  {t("nav.contact")}
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">{t("footer.connect")}</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/tillgrassmann/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <i className="fab fa-instagram text-xl"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>{t("footer.rights")}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
