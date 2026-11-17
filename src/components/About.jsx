import React from 'react'
import { site } from '../content/site.js'
import StarStub from './StarStub.jsx'

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="wrap about__grid">
        <div>
          <p className="about__label">About</p>
          <h2 className="about__title display">关于我</h2>
          <p className="about__text">{site.about}</p>
        </div>
        <div className="about__art">
          <StarStub className="star" />
        </div>
      </div>
    </section>
  )
}
