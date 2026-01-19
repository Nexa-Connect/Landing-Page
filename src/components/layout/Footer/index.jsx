import { memo } from 'react'
import { useLanguage } from '@/contexts'
import { SOCIAL_LINKS } from '@/constants'
import { SocialIcon } from '@/components/ui'
import logoIcon from '/Logo_somente_icone.png'
import styles from './styles.module.css'

function Footer() {
  const currentYear = new Date().getFullYear()
  const { t } = useLanguage()

  const footerLinks = [
    { label: t.footer.links.about, href: '#sobre' },
    { label: t.footer.links.services, href: '#servicos' },
    { label: t.footer.links.contact, href: '#contato' },
  ]

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.brandSection}>
            <a href="#inicio" className={styles.logo}>
              <img src={logoIcon} alt="Nexa Connect" className={styles.logoIcon} />
              <span className={styles.logoText}>Nexa Connect</span>
            </a>
            <p className={styles.brandDescription}>
              {t.footer.description}
            </p>
          </div>

          <div className={styles.linksSection}>
            <h4 className={styles.linksTitle}>{t.footer.company}</h4>
            <ul className={styles.linksList}>
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className={styles.link}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            &copy; {currentYear} Nexa Connect. {t.footer.copyright}
          </p>
          <div className={styles.socialLinks}>
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className={styles.socialLink}
                aria-label={social.name}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SocialIcon type={social.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default memo(Footer)
