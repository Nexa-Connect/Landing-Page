import ptBR from './pt-BR'
import en from './en'
import es from './es'
import fr from './fr'
import de from './de'
import ja from './ja'
import zh from './zh'

export const locales = {
  'pt-BR': ptBR,
  'en': en,
  'es': es,
  'fr': fr,
  'de': de,
  'ja': ja,
  'zh': zh,
}

export const defaultLocale = 'pt-BR'

export const localeList = Object.values(locales).map(locale => ({
  code: locale.lang,
  name: locale.langName,
}))
