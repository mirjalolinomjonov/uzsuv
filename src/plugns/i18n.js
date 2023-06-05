import { createI18n } from "vue-i18n";
import en from "@/language/en.json";
import ru from "@/language/ru.json";
import uz from "@/language/uz.json";

const locale = localStorage.getItem("locale") || "uz";

const i18n = createI18n({
  locale: locale,
  fallbackLocale: "uz",
  silentFallbackWarn: true,
  messages: {
    en,
    ru,
    uz,
  },
});
export default i18n;