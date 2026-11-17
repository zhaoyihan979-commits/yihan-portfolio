import React, { useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { projects } from '../content/site.js'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import { RETURN_KEY } from './Home.jsx'

export default function ProjectDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const idx = projects.findIndex((p) => p.slug === slug)
  const project = projects[idx]
  const next = projects[(idx + 1) % projects.length]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!project) {
    return (
      <div className="detail">
        <Nav />
        <section className="detail__hero">
          <div className="wrap" style={{ paddingTop: 60 }}>
            <p style={{ fontSize: 20, marginBottom: 16 }}>未找到该项目。</p>
            <Link to="/" className="btn-solid">
              ← 返回首页
            </Link>
          </div>
        </section>
      </div>
    )
  }

  const back = () => {
    sessionStorage.setItem(RETURN_KEY, 'works')
    navigate('/', { state: { scrollTo: 'works' } })
  }

  const goNext = () => {
    sessionStorage.setItem(RETURN_KEY, 'works')
    navigate(`/project/${next.slug}`)
  }

  return (
    <div className="detail">
      <Nav />
      <header className={`detail__hero detail__hero--${project.theme}`}>
        <div className="wrap">
          <button className="detail__back" type="button" onClick={back}>
            ← 返回作品
          </button>
          <span className="detail__tag">{project.tag}</span>
          <h1 className="detail__title display">{project.name}</h1>
          <p className="detail__subtitle">{project.subtitle}</p>
        </div>
      </header>

      <div className="detail__body">
        <div className="detail__cols">
          <div className="detail__section">
            <h2>
              <span className="no">01</span>要解决的问题
            </h2>
            <p>{project.problem}</p>
          </div>

          <div className="detail__section">
            <h2>
              <span className="no">02</span>我怎么做
            </h2>
            <ul>
              {project.approach.map((a, i) => (
                <li key={i}>{a}</li>
              ))}
            </ul>
          </div>

          <div className="detail__section">
            <h2>
              <span className="no">03</span>做出了什么
            </h2>
            {project.result ? (
              <p>{project.result}</p>
            ) : (
              <span className="pending">结果数据待补充</span>
            )}
          </div>
        </div>

        <div className="detail__next">
          <button className="btn-solid" type="button" onClick={back}>
            ← 返回作品区
          </button>
          <button className="btn-solid" type="button" onClick={goNext}>
            下一张：{next.name} →
          </button>
        </div>
      </div>

      <Footer />
    </div>
  )
}
