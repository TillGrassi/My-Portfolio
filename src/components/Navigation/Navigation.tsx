import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

interface NavigationProps {
  showAdminAccess?: boolean;
}

export function Navigation({ showAdminAccess = false }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["gallery", "about", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-light-border">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <a
              href="#"
              className="font-serif text-2xl font-semibold text-deep-charcoal hover:text-gray-600 transition-colors"
            >
              Till Grassmann
            </a>
            <div className="hidden md:flex space-x-6">
              <a
                href="#gallery"
                className="text-gray-700 hover:text-deep-charcoal transition-colors font-medium"
              >
                {t("nav.gallery")}
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-deep-charcoal transition-colors font-medium"
              >
                {t("nav.about")}
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-deep-charcoal transition-colors font-medium"
              >
                {t("nav.contact")}
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {/* Language Toggle */}
            <div className="hidden md:flex items-center space-x-2 bg-gray-100 rounded-full p-1">
              <button
                onClick={() => setLanguage("de")}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  language === "de"
                    ? "bg-white text-deep-charcoal shadow-sm"
                    : "text-gray-600 hover:text-deep-charcoal"
                }`}
              >
                DE
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  language === "en"
                    ? "bg-white text-deep-charcoal shadow-sm"
                    : "text-gray-600 hover:text-deep-charcoal"
                }`}
              >
                EN
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700 hover:text-deep-charcoal"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <i className="fas fa-bars text-xl"></i>
            </button>

            {/* Admin Access */}
            {showAdminAccess && (
              <button
                className="text-sm text-gray-500 hover:text-deep-charcoal transition-colors"
                onClick={() => {
                  const event = new CustomEvent("openAdminPanel");
                  window.dispatchEvent(event);
                }}
              >
                <i className="fas fa-user-cog"></i>
              </button>
            )}
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-light-border mt-4">
            <div className="px-6 py-4 space-y-3">
              <a
                href="#gallery"
                className="block text-gray-700 hover:text-deep-charcoal transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t("nav.gallery")}
              </a>
              <a
                href="#about"
                className="block text-gray-700 hover:text-deep-charcoal transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t("nav.about")}
              </a>
              <a
                href="#contact"
                className="block text-gray-700 hover:text-deep-charcoal transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t("nav.contact")}
              </a>

              {/* Mobile Language Toggle */}
              <div className="pt-3 border-t border-gray-200">
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500">Sprache:</span>
                  <button
                    onClick={() => setLanguage("de")}
                    className={`px-2 py-1 rounded text-sm font-medium transition-colors ${
                      language === "de"
                        ? "bg-deep-charcoal text-white"
                        : "text-gray-600 hover:text-deep-charcoal"
                    }`}
                  >
                    DE
                  </button>
                  <button
                    onClick={() => setLanguage("en")}
                    className={`px-2 py-1 rounded text-sm font-medium transition-colors ${
                      language === "en"
                        ? "bg-deep-charcoal text-white"
                        : "text-gray-600 hover:text-deep-charcoal"
                    }`}
                  >
                    EN
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
