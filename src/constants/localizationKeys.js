// Define your locale keys
export const LOCALE_KEYS = {
  WELCOME: "WELCOME",
  LANGUAGE: "LANGUAGE",
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT"
  // add more keys as needed
};

// Helper function (no type safety in JS)
export const t = (key, values = {}) => {
  // In actual usage, replace with next-intl's useTranslations()
  // For now, just return the key
  return key;
};
