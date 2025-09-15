// next-i18next.config.js
module.exports = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "bn", "ar", "pt"], // English, Bangla, Arabic, Portuguese
  },
  reloadOnPrerender: process.env.NODE_ENV === "development",
};
