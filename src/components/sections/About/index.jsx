import { memo } from 'react'
import { Button } from 'antd'
import { useLanguage } from '@/contexts'
import styles from './styles.module.css'

function About() {
  const { t } = useLanguage()

  return (
    <section id="sobre" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.content}>
            <span className={styles.label}>{t.about.label}</span>
            <h2 className={styles.title}>
              {t.about.title}
              <span className={styles.highlight}>{t.about.titleHighlight}</span>
            </h2>
            <p className={styles.description}>
              {t.about.description1}
            </p>
            <p className={styles.description}>
              {t.about.description2}
            </p>

            <Button type="primary" size="large" href="#contato">
              {t.about.cta}
            </Button>
        </div>
      </div>
    </section>
  )
}

export default memo(About)
