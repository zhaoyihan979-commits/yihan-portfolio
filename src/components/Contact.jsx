import React from 'react'
import { site } from '../content/site.js'

const ITEMS = [
  { key: 'email', label: '邮箱', icon: '@' },
  { key: 'resume', label: '简历', icon: 'PDF' },
  { key: 'github', label: 'GitHub', icon: 'GH' },
  { key: 'linkedin', label: 'LinkedIn', icon: 'in' },
  { key: 'wechat', label: '微信', icon: 'WX' },
]

function hrefFor(key, value) {
  if (key === 'email') {
    return value.startsWith('mailto:') ? value : `mailto:${value}`
  }
  return value
}

export default function Contact() {
  const c = site.contact || {}
  const items = ITEMS.filter((it) => c[it.key])

  return (
    <section className="contact section" id="contact">
      <div className="wrap">
        <h2 className="contact__title display">联系</h2>
        <p className="contact__intro">
          想聊聊项目、实习机会或合作，欢迎通过下面的方式找到我。
        </p>
        {items.length > 0 ? (
          <div className="contact__list">
            {items.map((it) => (
              <a
                key={it.key}
                className="contact__item"
                href={hrefFor(it.key, c[it.key])}
                target="_blank"
                rel="noreferrer"
              >
                <span className="ic">{it.icon}</span>
                <span>{it.label}</span>
              </a>
            ))}
          </div>
        ) : (
          <p className="contact__note">{c.note || '联系方式待补充。'}</p>
        )}
      </div>
    </section>
  )
}
