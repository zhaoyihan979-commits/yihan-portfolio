import React, { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { site } from '../content/site.js'
import StarStub from './StarStub.jsx'

export default function Hero({ onCta }) {
  const titleRef = useRef(null)

  useLayoutEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const el = titleRef.current
    const chars = el ? el.querySelectorAll('.char') : []

    if (reduce || !chars.length) return

    try {
      gsap.fromTo(
        chars,
        { y: 42, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: 'power3.out',
          stagger: 0.09,
          delay: 0.1,
          clearProps: 'transform',
        },
      )
    } catch (e) {
      // 动画失败时内容保持可见
    }
  }, [])

  return (
    <section className="hero" id="top">
      <div className="wrap">
        <h1 className="hero__title display" ref={titleRef} aria-label={site.nameEn}>
          {site.nameEn.split('').map((c, i) => (
            <span className="char" key={i} aria-hidden="true">
              {c}
            </span>
          ))}
        </h1>
        <p className="hero__intro">{site.heroIntro}</p>
        <button className="hero__cta" type="button" onClick={onCta}>
          查看作品 <span className="arr">↓</span>
        </button>
      </div>
      <StarStub className="hero__star" />
    </section>
  )
}
