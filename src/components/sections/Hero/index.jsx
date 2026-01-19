import { memo } from 'react'
import { Button } from 'antd'
import { useLanguage } from '@/contexts'
import { ArrowRightIcon } from '@/components/ui'
import styles from './styles.module.css'

function Hero() {
  const { t } = useLanguage()

  return (
    <section id="inicio" className={styles.hero}>
      <div className={styles.backgroundElements}>
        <div className={styles.gradientOrb1} />
        <div className={styles.gradientOrb2} />
        <div className={styles.gridPattern} />
        <NetworkAnimation />
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            {t.hero.badge}
          </div>

          <h1 className={styles.title}>
            {t.hero.title1}
            <br />
            <span className={styles.highlight}>{t.hero.title2}</span>
          </h1>

          <p className={styles.subtitle}>
            {t.hero.subtitle}
          </p>

          <div className={styles.actions}>
            <Button type="primary" size="large" href="#contato">
              {t.hero.cta}
              <ArrowRightIcon />
            </Button>
            <Button size="large" href="#servicos">
              {t.hero.services}
            </Button>
          </div>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <div className={styles.scrollMouse}>
          <div className={styles.scrollWheel} />
        </div>
      </div>
    </section>
  )
}

const NetworkAnimation = memo(function NetworkAnimation() {
  return (
    <svg className={styles.networkSvg} viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#61199E" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#61199E" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <g className={styles.networkNodes}>
        <circle cx="650" cy="120" r="6" fill="#61199E" className={styles.node} />
        <circle cx="720" cy="200" r="4" fill="#61199E" className={styles.node} style={{ animationDelay: '0.5s' }} />
        <circle cx="600" cy="250" r="5" fill="#61199E" className={styles.node} style={{ animationDelay: '1s' }} />
        <circle cx="680" cy="320" r="7" fill="#61199E" className={styles.node} style={{ animationDelay: '1.5s' }} />
        <circle cx="750" cy="380" r="4" fill="#61199E" className={styles.node} style={{ animationDelay: '2s' }} />
        <circle cx="580" cy="400" r="5" fill="#61199E" className={styles.node} style={{ animationDelay: '2.5s' }} />
        <circle cx="700" cy="480" r="6" fill="#61199E" className={styles.node} style={{ animationDelay: '3s' }} />
      </g>
      <g stroke="url(#lineGradient)" strokeWidth="1" fill="none" className={styles.lines}>
        <line x1="650" y1="120" x2="720" y2="200" />
        <line x1="720" y1="200" x2="600" y2="250" />
        <line x1="600" y1="250" x2="680" y2="320" />
        <line x1="680" y1="320" x2="750" y2="380" />
        <line x1="680" y1="320" x2="580" y2="400" />
        <line x1="580" y1="400" x2="700" y2="480" />
        <line x1="650" y1="120" x2="600" y2="250" />
        <line x1="720" y1="200" x2="680" y2="320" />
      </g>
    </svg>
  )
})

export default memo(Hero)
