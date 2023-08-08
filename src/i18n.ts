///@ts-ignore
import { createI18n } from 'vue-i18n'

import en from './locales/en.json'
import fa from './locales/fa.json'

const i18n = createI18n({
    legacy: false,
    locale: import.meta.env.VITE_I18N_LOCALE || 'en',
    fallbackLocale: import.meta.env.VITE_I18N_FALLBACK_LOCALE || 'es',
    messages: {
        en,

        fa
    }
})

export default i18n