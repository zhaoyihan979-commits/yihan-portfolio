import React from 'react'
import { projects } from '../content/site.js'
import Ticket from './Ticket.jsx'

export default function Projects() {
  return (
    <section className="projects" id="works">
      <div className="wrap">
        <div className="projects__head">
          <p className="projects__label">Selected Works</p>
          <h2 className="projects__title display">作品</h2>
        </div>
        <div className="tickets">
          {projects.map((p, i) => (
            <Ticket key={p.slug} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
