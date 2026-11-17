import React from 'react'
import { Link } from 'react-router-dom'
import CoverIcon from './CoverIcon.jsx'

export default function Ticket({ project, index }) {
  return (
    <div className="ticket-wrap">
      <Link
        to={`/project/${project.slug}`}
        className={`ticket ticket--${project.theme}`}
        aria-label={`查看作品：${project.name}（${project.subtitle}）`}
        onClick={() => sessionStorage.setItem('yihan-return', 'works')}
      >
        <div className="ticket__top">
          <span className="ticket__no">No.{String(index + 1).padStart(2, '0')}</span>
          <span className="ticket__tag">{project.tag}</span>
        </div>
        <div className="ticket__cover">
          <CoverIcon type={project.cover} />
        </div>
        <div className="ticket__title">
          <h3 className="ticket__name">{project.name}</h3>
          <p className="ticket__subtitle">{project.subtitle}</p>
          <p className="ticket__blurb">{project.blurb}</p>
        </div>
        <div className="ticket__foot">
          <span className="ticket__open">点击查看 →</span>
        </div>
      </Link>
    </div>
  )
}
