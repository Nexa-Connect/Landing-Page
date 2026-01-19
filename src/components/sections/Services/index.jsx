import { memo } from 'react'
import { Card } from 'antd'
import { useLanguage } from '@/contexts'
import { ServiceIcon, ArrowRightIcon } from '@/components/ui'
import styles from './styles.module.css'

const SERVICE_ICONS = ['ai', 'robot', 'automation', 'code', 'mobile', 'cloud']

function Services() {
  const { t } = useLanguage()

  return (
    <section id="servicos" className={styles.services}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>{t.services.label}</span>
          <h2 className={styles.title}>
            {t.services.title}
            <span className={styles.highlight}>{t.services.titleHighlight}</span>
          </h2>
          <p className={styles.subtitle}>
            {t.services.subtitle}
          </p>
        </div>

        <div className={styles.grid}>
          {t.services.items.map((service, index) => (
            <Card
              key={index}
              className={styles.card}
              bordered={false}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ServiceIcon type={SERVICE_ICONS[index]} className={styles.cardIcon} />
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>
              <div className={styles.cardLink}>
                {t.services.learnMore}
                <ArrowRightIcon />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default memo(Services)
