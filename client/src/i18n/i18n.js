import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import HttpBackend from "i18next-http-backend";
import LanguageDetector from 'i18next-browser-languagedetector'
import Cache from 'i18next-localstorage-cache'

import en from './locales/en.json'
import fr from './locales/fr.json'
import nl from './locales/nl.json'


//UNUSED
i18n
    .use(Cache)
    .use(HttpBackend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
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
        whitelist: ['en', 'fr', 'nl'],
        detection: {
            order: ['path'],
            lookupFromPathIndex: 0,
            checkWhitelist: true
          },
        cache: {
            enabled: true,
            expirationTime: 7*24*60*60*1000,
            versions: { 
                ne: 'v1',
                fr: 'v1',
                nl: 'v1'
            }
        },
    })

export default i18n
