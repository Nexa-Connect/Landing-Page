import { memo, useState, useRef, useEffect } from 'react'
import { useLanguage } from '@/contexts'
import { localeList } from '@/locales'
import FlagIcon from './FlagIcon'
import styles from './LanguageSelector.module.css'

function LanguageSelector() {
  const { currentLang, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  const currentLocale = localeList.find(l => l.code === currentLang) || localeList[0]

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSelect = (code) => {
    setLanguage(code)
    setIsOpen(false)
  }

  return (
    <div className={styles.selector} ref={dropdownRef}>
      <button
        className={styles.trigger}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <FlagIcon code={currentLang} className={styles.flag} />
        <span className={styles.code}>{currentLocale.code.split('-')[0].toUpperCase()}</span>
        <svg className={`${styles.arrow} ${isOpen ? styles.arrowOpen : ''}`} viewBox="0 0 12 12" fill="none">
          <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {isOpen && (
        <ul className={styles.dropdown} role="listbox">
          {localeList.map((locale) => (
            <li key={locale.code}>
              <button
                className={`${styles.option} ${locale.code === currentLang ? styles.optionActive : ''}`}
                onClick={() => handleSelect(locale.code)}
                role="option"
                aria-selected={locale.code === currentLang}
              >
                <FlagIcon code={locale.code} className={styles.flag} />
                <span className={styles.name}>{locale.name}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default memo(LanguageSelector)
