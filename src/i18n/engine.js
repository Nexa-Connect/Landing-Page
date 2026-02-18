import { locales, defaultLocale, localeList } from './locales/index.js'

let currentLang = defaultLocale
let currentTranslations = locales[defaultLocale]

function detectLanguage() {
  if (typeof window === 'undefined') return defaultLocale

  const saved = localStorage.getItem('nexa-lang')
  if (saved && locales[saved]) return saved

  const browserLang = navigator.language
  if (locales[browserLang]) return browserLang

  const shortLang = browserLang.split('-')[0]
  const match = Object.keys(locales).find(key => key.startsWith(shortLang))
  if (match) return match

  return defaultLocale
}

function getNestedValue(obj, path) {
  return path.split('.').reduce((acc, key) => acc?.[key], obj)
}

function translateDOM() {
  // Translate text content
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n')
    const value = getNestedValue(currentTranslations, key)
    if (value != null) el.textContent = value
  })

  // Translate placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder')
    const value = getNestedValue(currentTranslations, key)
    if (value != null) el.setAttribute('placeholder', value)
  })

  // Translate aria-labels
  document.querySelectorAll('[data-i18n-label]').forEach(el => {
    const key = el.getAttribute('data-i18n-label')
    const value = getNestedValue(currentTranslations, key)
    if (value != null) el.setAttribute('aria-label', value)
  })

  // Translate service items (array-based)
  document.querySelectorAll('[data-i18n-service]').forEach(el => {
    const index = parseInt(el.getAttribute('data-i18n-service'), 10)
    const item = currentTranslations.services?.items?.[index]
    if (!item) return

    const titleEl = el.querySelector('[data-i18n-key="title"]')
    const descEl = el.querySelector('[data-i18n-key="description"]')
    if (titleEl) titleEl.textContent = item.title
    if (descEl) descEl.textContent = item.description
  })

  // Update html lang attribute
  document.documentElement.lang = currentTranslations.lang || currentLang
}

function updateLanguageSelector() {
  // Update displayed language code
  const codeEl = document.getElementById('lang-current-code')
  if (codeEl) {
    codeEl.textContent = currentLang === 'pt-BR' ? 'PT' : currentLang.toUpperCase()
  }

  // Show/hide correct flag in trigger
  document.querySelectorAll('[data-flag-trigger]').forEach(el => {
    el.style.display = el.getAttribute('data-flag-trigger') === currentLang ? 'block' : 'none'
  })

  // Update active state in dropdown
  document.querySelectorAll('[data-lang-option]').forEach(el => {
    const isActive = el.getAttribute('data-lang-option') === currentLang
    el.classList.toggle('bg-navy-50', isActive)
    el.classList.toggle('font-medium', isActive)
  })
}

window.setLanguage = function(lang) {
  if (!locales[lang]) return
  currentLang = lang
  currentTranslations = locales[lang]
  localStorage.setItem('nexa-lang', lang)
  translateDOM()
  updateLanguageSelector()
}

window.getCurrentTranslations = function() {
  return currentTranslations
}

window.getCurrentLang = function() {
  return currentLang
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  currentLang = detectLanguage()
  currentTranslations = locales[currentLang]
  localStorage.setItem('nexa-lang', currentLang)

  // Only translate if not default language (pt-BR is already in HTML)
  if (currentLang !== defaultLocale) {
    translateDOM()
  }
  updateLanguageSelector()
})
