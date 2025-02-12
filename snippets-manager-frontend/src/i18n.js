import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { translationsEs } from '@/translations/es-ES.js'
import { translationsEn } from '@/translations/en-US.js'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      "es-ES": {
        translation: translationsEs
      },
      "en-US": {
        translation: translationsEn
      },
    },
    lng: "es-ES"
  })
