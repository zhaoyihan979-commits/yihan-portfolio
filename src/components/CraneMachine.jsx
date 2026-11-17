import React, { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import StarStub from './StarStub.jsx'

gsap.registerPlugin(ScrollTrigger)

function MachineSvg() {
  return (
    <svg viewBox="0 0 480 520" fill="none" aria-hidden="true">
      <rect x="40" y="26" width="400" height="74" rx="18" fill="#1B2A6B" />
      <text
        x="240"
        y="72"
        textAnchor="middle"
        fontFamily="Archivo Black, sans-serif"
        fontSize="34"
        fill="#FFD23F"
        letterSpacing="4"
      >
        YIHAN
      </text>
      <rect
        x="60"
        y="104"
        width="360"
        height="322"
        rx="22"
        fill="rgba(255,255,255,0.28)"
        stroke="#1B2A6B"
        strokeWidth="8"
      />
      <rect x="30" y="426" width="420" height="58" rx="18" fill="#1B2A6B" />
      <rect
        x="150"
        y="438"
        width="180"
        height="36"
        rx="12"
        fill="#FFD23F"
        stroke="#1B2A6B"
        strokeWidth="6"
      />
      {/* 控制台 */}
      <circle cx="100" cy="454" r="11" fill="#3FC1D3" stroke="#FFE58A" strokeWidth="4" />
      <rect x="330" y="442" width="44" height="28" rx="8" fill="#C7B7F0" stroke="#1B2A6B" strokeWidth="5" />
    </svg>
  )
}

function ClawSvg({ jawRef }) {
  return (
    <svg viewBox="0 0 120 200" fill="none" aria-hidden="true">
      <line x1="60" y1="0" x2="60" y2="56" stroke="#1B2A6B" strokeWidth="6" />
      <rect x="42" y="52" width="36" height="22" rx="9" fill="#1B2A6B" />
      <g ref={jawRef} className="claw-jaw" style={{ transformOrigin: '50% 74px' }}>
        <path d="M46 78 q-10 40 -3 72" stroke="#1B2A6B" strokeWidth="7" fill="none" strokeLinecap="round" />
        <path d="M60 78 v74" stroke="#1B2A6B" strokeWidth="7" fill="none" strokeLinecap="round" />
        <path d="M74 78 q10 40 3 72" stroke="#1B2A6B" strokeWidth="7" fill="none" strokeLinecap="round" />
      </g>
    </svg>
  )
}

export default function CraneMachine() {
  const sectionRef = useRef(null)
  const stageRef = useRef(null)
  const bgLayerRef = useRef(null)
  const rigRef = useRef(null)
  const clawRef = useRef(null)
  const starRef = useRef(null)
  const jawRef = useRef(null)
  const staticRef = useRef(false)

  useLayoutEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const section = sectionRef.current
    if (!section || reduce) {
      staticRef.current = true
      section?.classList.add('is-static')
      return
    }

    let mm
    try {
      mm = gsap.matchMedia()

      mm.add(
        { desktop: '(min-width: 761px)', mobile: '(max-width: 760px)' },
        (ctx) => {
          const { desktop } = ctx.conditions
          const stage = stageRef.current
          const H = stage ? stage.offsetHeight : 700
          const clawDescend = H * 0.36
          const starLift = H * 0.33
          const edgeX = desktop ? '56vw' : '34vw'
          const pinEnd = desktop ? '+=260%' : '+=150%'

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: section,
              start: 'top top',
              end: pinEnd,
              scrub: 0.6,
              pin: true,
              anticipatePin: 1,
            },
            defaults: { ease: 'none' },
          })

          // 1) 抓爪下降
          tl.fromTo(
            clawRef.current,
            { y: -H * 0.08 },
            { y: clawDescend, duration: 1 },
            0,
          )
          // 票根轻微摇晃
          tl.to(starRef.current, { rotation: 8, duration: 0.35 }, 0.25)
          tl.to(starRef.current, { rotation: -8, duration: 0.35 }, 0.6)
          tl.to(starRef.current, { rotation: 0, duration: 0.2 }, 0.95)
          // 2) 抓爪合拢
          tl.to(jawRef.current, { scaleY: 0.55, duration: 0.25 }, 1.05)
          // 3) 票根被提起
          tl.to(starRef.current, { y: -starLift, duration: 0.5 }, 1.15)
          tl.to(clawRef.current, { y: -H * 0.08, duration: 0.5 }, 1.15)
          // 小幅摆动
          tl.to(rigRef.current, { rotation: 6, duration: 0.35 }, 1.65)
          tl.to(rigRef.current, { rotation: -6, duration: 0.35 }, 2.0)
          tl.to(rigRef.current, { rotation: 0, duration: 0.3 }, 2.35)
          // 4) 移向画面边缘，背景由黄转蓝
          tl.to(rigRef.current, { x: edgeX, duration: 1.0 }, 2.4)
          tl.fromTo(
            bgLayerRef.current,
            { autoAlpha: 0 },
            { autoAlpha: 1, duration: 0.9 },
            2.3,
          )

          return () => {
            tl.scrollTrigger && tl.scrollTrigger.kill()
            tl.kill()
          }
        },
      )
    } catch (e) {
      // GSAP 加载/初始化失败：不 pin，内容照常可滚动浏览
      staticRef.current = true
      section.classList.add('is-static')
    }

    return () => {
      if (mm) mm.revert()
    }
  }, [])

  return (
    <section className="crane-scene" id="crane" ref={sectionRef}>
      <div className="crane-stage" ref={stageRef}>
        <div className="crane-bg" />
        <div className="crane-bg__layer" ref={bgLayerRef} style={{ opacity: 0 }} />

        <div className="crane-machine">
          <MachineSvg />
        </div>

        <div className="crane-rig" ref={rigRef}>
          <div className="crane-claw" ref={clawRef}>
            <ClawSvg jawRef={jawRef} />
          </div>
          <div className="crane-star" ref={starRef}>
            <StarStub />
          </div>
        </div>

        <div className="crane-foreground" />
        <div className="crane-hint" aria-hidden="true">
          向下滚动
          <span className="arr">↓</span>
        </div>
      </div>
    </section>
  )
}
