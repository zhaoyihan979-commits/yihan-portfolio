import React from 'react'
import { site } from '../content/site.js'
import StarStub from './StarStub.jsx'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div>
          <p className="footer__wordmark display">{site.nameEn}</p>
          <p className="footer__meta">© {year} {site.nameZh} · 用产品和数据解决问题</p>
        </div>
        <StarStub className="footer__star" />
      </div>
    </footer>
  )
}
