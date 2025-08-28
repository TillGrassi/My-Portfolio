import { useLanguage } from "@/contexts/LanguageContext";

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-warm-gray">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-deep-charcoal mb-6">
              {t("about.title")}
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>{t("about.bio1")}</p>
              <p>{t("about.bio2")}</p>
              <p>{t("about.bio3")}</p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center text-gray-600">
                <i className="fas fa-map-marker-alt mr-2"></i>
                <span>{t("about.country")}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <i className="fas fa-palette mr-2"></i>
                <span>{t("about.genre")}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <i className="fas fa-calendar mr-2"></i>
                <span>{t("about.since")}</span>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <img
              src="assets/Me.JPG"
              alt="Till Grassmann"
              className="w-full h-96 md:h-full object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
