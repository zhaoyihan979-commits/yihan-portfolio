import React from 'react'

/** 三张票券封面上的原创小图标，纯矢量，不依赖外部图片。 */
export default function CoverIcon({ type }) {
  if (type === 'headphone') {
    return (
      <svg viewBox="0 0 120 100" fill="none" aria-hidden="true">
        <path
          d="M18 46 V38 a42 42 0 0 1 84 0 V46"
          stroke="#1B2A6B"
          strokeWidth="7"
          strokeLinecap="round"
        />
        <rect x="10" y="42" width="22" height="40" rx="10" fill="#FFD23F" stroke="#1B2A6B" strokeWidth="6" />
        <rect x="88" y="42" width="22" height="40" rx="10" fill="#FFD23F" stroke="#1B2A6B" strokeWidth="6" />
        <rect x="46" y="18" width="28" height="30" rx="9" fill="#FFE58A" stroke="#1B2A6B" strokeWidth="5" />
        <path d="M50 44 v10" stroke="#1B2A6B" strokeWidth="4" strokeLinecap="round" />
      </svg>
    )
  }

  if (type === 'cat') {
    return (
      <svg viewBox="0 0 120 100" fill="none" aria-hidden="true">
        <path
          d="M60 26 L78 48 L112 52 L84 68 L92 100 L60 84 L28 100 L36 68 L8 52 L42 48 Z"
          fill="#FFD23F"
          stroke="#1B2A6B"
          strokeWidth="6"
          strokeLinejoin="round"
        />
        <circle cx="52" cy="60" r="4" fill="#1B2A6B" />
        <circle cx="70" cy="60" r="4" fill="#1B2A6B" />
        <path d="M56 72 Q61 76 66 72" stroke="#1B2A6B" strokeWidth="3.5" strokeLinecap="round" fill="none" />
        <path d="M30 40 q-8 -2 -8 4 M90 40 q8 -2 8 4" stroke="#1B2A6B" strokeWidth="3.5" strokeLinecap="round" fill="none" />
      </svg>
    )
  }

  // route
  return (
    <svg viewBox="0 0 120 100" fill="none" aria-hidden="true">
      <path
        d="M14 80 L14 26 M14 26 h24 M38 26 v22 h40 M78 48 v-8 h22"
        stroke="#1B2A6B"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="14" cy="80" r="7" fill="#1B2A6B" />
      <circle cx="100" cy="40" r="7" fill="#1B2A6B" />
      <circle cx="14" cy="26" r="9" fill="#FFD23F" stroke="#1B2A6B" strokeWidth="5" />
      <circle cx="60" cy="48" r="9" fill="#FFE58A" stroke="#1B2A6B" strokeWidth="5" />
      <rect x="44" y="80" width="32" height="18" rx="6" fill="#C7B7F0" stroke="#1B2A6B" strokeWidth="5" />
      <path d="M52 88 h16" stroke="#1B2A6B" strokeWidth="3.5" strokeLinecap="round" />
    </svg>
  )
}
