import { createContext, useContext, useState, ReactNode } from "react";

type Language = "de" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

const translations = {
  de: {
    // Navigation
    "nav.gallery": "Galerie",
    "nav.about": "Über mich",
    "nav.contact": "Kontakt",

    // Hero Section
    "hero.title": "Till Grassmann",
    "hero.subtitle":
      "Landschaftsmalerei, die die emotionale Essenz der Natur durch neo-impressionistische Pinselführung und lebendige Farben einfängt",
    "hero.cta": "Zur Galerie",

    // Gallery
    "gallery.title": "Galerie",
    "gallery.subtitle":
      "Navigieren Sie durch die Galerie mit den Pfeilen, um jedes Gemälde zu erleben, als würden Sie durch einen zeitgenössischen Kunstraum gehen",
    "gallery.available": "Verfügbar",
    "gallery.sold": "Verkauft",
    "gallery.notForSale": "Nicht verkäuflich",
    "gallery.noArtworks": "Momentan sind keine Kunstwerke verfügbar.",

    // Painting Modal
    "modal.year": "Jahr:",
    "modal.medium": "Medium:",
    "modal.dimensions": "Abmessungen:",
    "modal.status": "Status:",
    "modal.tags": "Tags:",
    "modal.interested": "Interesse an diesem Werk?",
    "modal.availableText":
      "Dieses Kunstwerk ist zum Kauf verfügbar. Kontaktieren Sie mich, um Preise, Versandoptionen und Zahlungsmodalitäten zu besprechen.",
    "modal.soldText":
      "Dieses Werk wurde an einen privaten Sammler verkauft. Jedoch habe ich möglicherweise ähnliche Werke verfügbar oder kann ein Auftragswerk erstellen.",
    "modal.inquirePurchase": "Kaufanfrage stellen",
    "modal.inquireSimilar": "Ähnliche Werke anfragen",
    "modal.notForSaleText": "Dieses Werk ist nicht verkäuflich",
    "modal.share": "Dieses Kunstwerk teilen:",

    // About Section
    "about.title": "Über den Künstler",
    "about.subtitle":
      "Eine Leidenschaft für Landschaften und den Ausdruck von Emotionen durch Farbe",
    "about.bio1":
      "Als Landschaftsmaler widme ich mich der Darstellung der emotionalen Tiefe und Schönheit der Natur. Meine Arbeiten entstehen durch eine Kombination aus direkter Beobachtung und emotionaler Interpretation, wobei ich neo-impressionistische Techniken verwende, um die Essenz jeder Landschaft einzufangen.",
    "about.bio2":
      "Jedes Gemälde erzählt eine Geschichte – von den ruhigen Momenten eines Sonnenuntergangs bis hin zur dramatischen Kraft eines Sturms über den Bergen. Ich arbeite hauptsächlich mit Acrylfarben auf Papier und Leinwand und lasse mich von den sich ständig verändernden Stimmungen der Natur inspirieren.",
    "about.bio3":
      "Meine Kunst lädt den Betrachter ein, einen Moment der Ruhe zu finden und sich mit den emotionalen Landschaften zu verbinden, die uns alle umgeben.",
    "about.country": "Kiel, Deutschland",
    "about.genre": "Landschaften & Neo-Impressionismus",
    "about.since": "Aktiv seit 2023",
    // Contact
    "contact.title": "Kontakt aufnehmen",
    "contact.subtitle":
      "Interesse an einem Werk oder einer Auftragsarbeit? Ich würde mich freuen, von Ihnen zu hören und zu besprechen, wie meine Kunst einen Platz in Ihrem Raum finden kann.",
    "contact.comingSoon": "Kontaktformular in Vorbereitung",
    "contact.comingSoonText":
      "Die Kontaktfunktion wird derzeit entwickelt. Bitte schauen Sie später wieder vorbei oder kontaktieren Sie mich über die sozialen Medien.",
    "contact.info": "Kontaktinformationen",
    "contact.followWork": "Meiner Arbeit folgen",

    // Footer
    "footer.description":
      "Landschaftsmaler, der die emotionale Essenz der Natur durch neo-impressionistische Pinselführung und lebendige Farben einfängt.",
    "footer.quickLinks": "Schnellzugriff",
    "footer.connect": "Vernetzen",
    "footer.rights": "© 2025 Till Graßmann. Alle Rechte vorbehalten.",
  },
  en: {
    // Navigation
    "nav.gallery": "Gallery",
    "nav.about": "About",
    "nav.contact": "Contact",

    // Hero Section
    "hero.title": "Till Grassmann",
    "hero.subtitle":
      "Landscape paintings that capture the emotional essence of nature through neo-impressionist brushwork and vibrant colors",
    "hero.cta": "View Gallery",

    // Gallery
    "gallery.title": "Gallery",
    "gallery.subtitle":
      "Navigate through the gallery using the arrows to experience each painting as if walking through a contemporary art space",
    "gallery.available": "Available",
    "gallery.sold": "Sold",
    "gallery.notForSale": "Not for Sale",
    "gallery.noArtworks": "No artworks available at the moment.",

    // Painting Modal
    "modal.year": "Year:",
    "modal.medium": "Medium:",
    "modal.dimensions": "Dimensions:",
    "modal.status": "Status:",
    "modal.tags": "Tags:",
    "modal.interested": "Interested in this piece?",
    "modal.availableText":
      "This artwork is available for purchase. Get in touch to discuss pricing, shipping options, and payment arrangements.",
    "modal.soldText":
      "This piece has been sold to a private collector. However, I may have similar works available or can create a commission piece.",
    "modal.inquirePurchase": "Inquire About Purchase",
    "modal.inquireSimilar": "Inquire About Similar Works",
    "modal.notForSaleText": "This piece is not for sale",
    "modal.share": "Share this artwork:",

    // About Section
    "about.title": "About the Artist",
    "about.subtitle":
      "A passion for landscapes and expressing emotion through color",
    "about.bio1":
      "As a landscape painter, I am dedicated to capturing the emotional depth and beauty of nature. My work emerges through a combination of direct observation and emotional interpretation, using neo-impressionist techniques to capture the essence of each landscape.",
    "about.bio2":
      "Each painting tells a story – from the quiet moments of a sunset to the dramatic power of a storm over the mountains. I work primarily with acrylics on paper and canvas, drawing inspiration from the ever-changing moods of nature.",
    "about.bio3":
      "My art invites the viewer to find a moment of peace and connect with the emotional landscapes that surround us all.",
    "about.country": "Kiel, Germany",
    "about.genre": "Landscape & Neo-Impressionism",
    "about.since": "Active since 2023",
    // Contact
    "contact.title": "Get in Touch",
    "contact.subtitle":
      "Interested in purchasing a piece or commissioning custom work? I'd love to hear from you and discuss how my art can find a place in your space.",
    "contact.comingSoon": "Contact Form Coming Soon",
    "contact.comingSoonText":
      "The contact functionality is currently being developed. Please check back later or reach out through social media.",
    "contact.info": "Contact Information",
    "contact.followWork": "Follow My Work",

    // Footer
    "footer.description":
      "Landscape painter capturing the emotional essence of nature through neo-impressionist brushwork and vibrant colors.",
    "footer.quickLinks": "Quick Links",
    "footer.connect": "Connect",
    "footer.rights": "© 2025 Till Graßmann. All rights reserved.",
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("de"); // German as default

  const t = (key: string): string => {
    return (
      translations[language][key as keyof (typeof translations)["de"]] || key
    );
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
