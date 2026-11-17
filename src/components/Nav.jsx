import React from 'react'
import { useNavigate, useLocation, Link } from 'react-router-dom'
import { site } from '../content/site.js'

function scrollToId(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Nav() {
  const navigate = useNavigate()
  const location = useLocation()

  const go = (id) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: id } })
    } else {
      scrollToId(id)
    }
  }

  return (
    <header className="nav">
      <Link to="/" className="nav__brand" aria-label="返回首页">
        {site.nameZh}
      </Link>
      <nav className="nav__links" aria-label="主导航">
        {site.nav.map((item) => (
          <button
            key={item.id}
            type="button"
            className="nav__link"
            onClick={() => go(item.id)}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </header>
  )
}
