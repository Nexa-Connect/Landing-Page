import { memo, useCallback } from 'react'
import { Form, Input, Button, message } from 'antd'
import { useLanguage } from '@/contexts'
import { CONTACT_INFO, SOCIAL_LINKS } from '@/constants'
import { ContactIcon, SocialIcon, SendIcon } from '@/components/ui'
import styles from './styles.module.css'

const { TextArea } = Input

function Contact() {
  const [form] = Form.useForm()
  const { t } = useLanguage()

  const onFinish = useCallback((values) => {
    console.log('Form values:', values)
    message.success('Message sent successfully!')
    form.resetFields()
  }, [form])

  const getInfoLabel = (type) => {
    const labels = {
      email: t.contact.info.email,
      phone: t.contact.info.phone,
      location: t.contact.info.location,
    }
    return labels[type] || type
  }

  return (
    <section id="contato" className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>{t.contact.label}</span>
          <h2 className={styles.title}>
            {t.contact.title}
            <span className={styles.highlight}>{t.contact.titleHighlight}</span>
          </h2>
          <p className={styles.subtitle}>
            {t.contact.subtitle}
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.infoSection}>
            <div className={styles.infoList}>
              {CONTACT_INFO.map((info, index) => (
                <div key={index} className={styles.infoItem} style={{ animationDelay: `${0.3 + index * 0.1}s` }}>
                  <ContactIcon type={info.type} className={styles.infoIcon} />
                  <div className={styles.infoContent}>
                    <span className={styles.infoLabel}>{getInfoLabel(info.type)}</span>
                    {info.href ? (
                      <a href={info.href} className={styles.infoValue}>{info.value}</a>
                    ) : (
                      <span className={styles.infoValue}>{info.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.socialSection}>
              <h4 className={styles.socialTitle}>{t.contact.social}</h4>
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

          <div className={styles.formSection}>
            <div className={styles.formCard}>
              <h3 className={styles.formTitle}>{t.contact.form.title}</h3>
              <Form form={form} layout="vertical" onFinish={onFinish} requiredMark={false}>
                <div className={styles.formRow}>
                  <Form.Item name="name" label={t.contact.form.name} rules={[{ required: true }]}>
                    <Input placeholder={t.contact.form.namePlaceholder} />
                  </Form.Item>
                  <Form.Item
                    name="email"
                    label={t.contact.form.email}
                    rules={[
                      { required: true },
                      { type: 'email' }
                    ]}
                  >
                    <Input placeholder={t.contact.form.emailPlaceholder} />
                  </Form.Item>
                </div>
                <Form.Item name="subject" label={t.contact.form.subject} rules={[{ required: true }]}>
                  <Input placeholder={t.contact.form.subjectPlaceholder} />
                </Form.Item>
                <Form.Item name="message" label={t.contact.form.message} rules={[{ required: true }]}>
                  <TextArea rows={4} placeholder={t.contact.form.messagePlaceholder} style={{ resize: 'none' }} />
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit" size="large" block>
                    <SendIcon /> {t.contact.form.submit}
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default memo(Contact)
