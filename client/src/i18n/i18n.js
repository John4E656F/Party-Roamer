import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import HttpBackend from "i18next-http-backend";
import LanguageDetector from 'i18next-browser-languagedetector'

import en from './locales/en.json'
import fr from './locales/fr.json'
import nl from './locales/nl.json'

const apiKey = "";
const loadPath = ``;
  


//UNUSED
i18n
    .use(HttpBackend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        // ns: ['en', 'fr', 'nl'],
        // defaultNS: ['en', 'fr', 'nl'],
        // backend: {
        //     loadPath: loadPath
        // },
        lng: 'en',
        debug: true,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
        resources: {
            en: {
                translation: en,
            },
            fr: {
                translation: fr,
            },
            nl: {
                translation: nl,
            },
    },
})

export default i18n


// export const translate = (key: string, language: string): string => {
//     let langData: { [key: string]: string } = {};
  
//     if(language === 'EN') {
//       langData = en;
//     }else if(language === 'FR') {
//       langData = fr;
//     }else if(language === 'NE') {
//       langData = ne;
//     }
  
//     return langData[key];
//   }