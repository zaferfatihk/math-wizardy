import en from '../locales/en.json'

const locales = {
  en: en,
}

export function translate(key: string, locale: string = 'en'): string {
  const keys = key.split('.')
  let value = locales[locale]

  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k]
    } else {
      return key // Return the key if translation is not found
    }
  }

  return value as string
}

