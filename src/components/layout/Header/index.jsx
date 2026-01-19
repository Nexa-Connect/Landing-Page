import { memo, useState, useCallback } from 'react'
import { Button, Drawer } from 'antd'
import { useScrolled } from '@/hooks'
import { useLanguage } from '@/contexts'
import { MenuIcon, CloseIcon, LanguageSelector } from '@/components/ui'
import logoIcon from '/Logo_somente_icone.png'
import styles from './styles.module.css'

function Header() {
  const scrolled = useScrolled(50)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { t } = useLanguage()

  const openMenu = useCallback(() => setMobileMenuOpen(true), [])
  const closeMenu = useCallback(() => setMobileMenuOpen(false), [])

  const navItems = [
    { label: t.nav.home, href: '#inicio' },
    { label: t.nav.services, href: '#servicos' },
    { label: t.nav.about, href: '#sobre' },
    { label: t.nav.contact, href: '#contato' },
  ]

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <a href="#inicio" className={styles.logo}>
          <img src={logoIcon} alt="Nexa Connect" className={styles.logoIcon} />
        </a>

        <nav className={styles.nav}>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className={styles.navLink}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <LanguageSelector />
          <Button type="primary" href="#contato">
            {t.nav.contact}
          </Button>
        </div>

        <div className={styles.mobileActions}>
          <LanguageSelector />
          <button
            className={styles.mobileMenuButton}
            onClick={openMenu}
            aria-label="Open menu"
          >
            <MenuIcon />
          </button>
        </div>

        <Drawer
          placement="right"
          onClose={closeMenu}
          open={mobileMenuOpen}
          width={280}
          closeIcon={<CloseIcon />}
          styles={{ body: { padding: 0 } }}
        >
          <nav className={styles.mobileNav}>
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={styles.mobileNavLink}
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
            <Button type="primary" block href="#contato" onClick={closeMenu}>
              {t.nav.contact}
            </Button>
          </nav>
        </Drawer>
      </div>
    </header>
  )
}

export default memo(Header)
