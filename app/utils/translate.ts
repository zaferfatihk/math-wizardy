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

export function translateWithInt(key: string, values?: { [key: string]: number }, locale: string = 'en'): string {  
  let translatedValue = translate(key, locale);
  if (values) {

    Object.keys(values).forEach((key) => {
      translatedValue = translatedValue.replace(`{${key}}`, values[key]);
    });
  }
  return translatedValue;
}

export function translateWithInput(key: string, values?: { [key: string]: string }, locale: string = 'en'): string {  
  let translatedValue = translate(key, locale);
  if (values) {

    Object.keys(values).forEach((key) => {
      translatedValue = translatedValue.replace(`{${key}}`, values[key]);
    });
  }
  return translatedValue;
}
