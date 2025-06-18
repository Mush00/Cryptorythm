// i18n.js

export const translations = {
  en: {
    welcome: "Welcome to Cryptorythm",
    connect: "Connect Wallet",
    vote: "Vote",
    mint: "Mint NFT"
  },
  es: {
    welcome: "Bienvenido a Cryptorythm",
    connect: "Conectar Billetera",
    vote: "Votar",
    mint: "Crear NFT"
  }
};

/**
 * Returns a translated string based on language code and key.
 * @param {string} lang - Language code (e.g., "en", "es").
 * @param {string} key - Translation key (e.g., "welcome").
 * @returns {string}
 */
export function t(lang, key) {
  return translations[lang]?.[key] || translations["en"][key] || key;
}
