export const locales = ["id", "en", "zh", "fr", "es", "ru", "ar"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "id";

export const localeNames: Record<Locale, string> = {
  id: "Bahasa Indonesia",
  en: "English",
  zh: "中文",
  fr: "Français",
  es: "Español",
  ru: "Русский",
  ar: "العربية",
};
