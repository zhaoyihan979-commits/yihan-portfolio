import React from 'react'

/**
 * 星形票根 —— 全站唯一的原创角色。
 * 轮廓、颜色、表情固定不变，只通过外部 transform 做位置/旋转动画，
 * 保证每个场景里都是同一个角色。
 */
export default function StarStub({ className = '', style = {} }) {
  return (
    <svg
      className={className}
      style={style}
      viewBox="0 0 200 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="星形票根角色"
    >
      {/* 星形身体 */}
      <path
        d="M100 12 L121.2 70.9 L183.7 72.8 L134.2 111.1 L151.7 171.2 L100 136 L48.3 171.2 L65.8 111.1 L16.3 72.8 L78.8 70.9 Z"
        fill="#FFD23F"
        stroke="#1B2A6B"
        strokeWidth="6"
        strokeLinejoin="round"
      />
      {/* 底部票根（可撕下的小票） */}
      <rect
        x="62"
        y="150"
        width="76"
        height="52"
        rx="10"
        fill="#FFE58A"
        stroke="#1B2A6B"
        strokeWidth="5"
      />
      {/* 撕票虚线 */}
      <line
        x1="60"
        y1="150"
        x2="140"
        y2="150"
        stroke="#1B2A6B"
        strokeWidth="4"
        strokeDasharray="2 7"
        strokeLinecap="round"
      />
      {/* 表情：眼睛 */}
      <circle cx="82" cy="92" r="7" fill="#1B2A6B" />
      <circle cx="118" cy="92" r="7" fill="#1B2A6B" />
      {/* 微笑 */}
      <path
        d="M82 108 Q100 124 118 108"
        stroke="#1B2A6B"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />
      {/* 腮红 */}
      <circle cx="66" cy="108" r="6" fill="#F4A0A0" opacity="0.7" />
      <circle cx="134" cy="108" r="6" fill="#F4A0A0" opacity="0.7" />
      {/* 票根上的小圆点 */}
      <circle cx="100" cy="176" r="4" fill="#1B2A6B" />
    </svg>
  )
}
