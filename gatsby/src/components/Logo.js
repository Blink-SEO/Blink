import React from 'react'

const Logo = ({ color }) => {
  return (
    <svg width="143" height="60">
      <g fill="none" fill-rule="evenodd">
        <path
          d="M35.892 36.344c0-4.173-2.735-6.919-6.51-6.919-3.773 0-6.673 2.746-6.673 6.92 0 4.227 2.9 7.028 6.674 7.028 3.774 0 6.509-2.8 6.509-7.029m8.642.055c0 8.511-6.017 14.772-13.565 14.772-3.446 0-6.126-1.318-8.04-3.35v2.58h-8.753V10.317h8.752v14.662c1.915-2.087 4.595-3.35 8.041-3.35 7.548 0 13.565 6.26 13.565 14.771"
          fill="#231F20"
        />
        <mask id="b" fill="#fff">
          <path id="a" d="M0 59.762h142.65V0H0z" />
        </mask>
        <path
          fill="#231F20"
          mask="url(#b)"
          d="M46.177 50.402h8.751V10.316h-8.751zM59.736 50.402h8.752V22.397h-8.752zM99.722 34.093v16.309H90.97V35.85c0-3.679-1.532-6.095-4.978-6.095-3.391 0-5.415 2.69-5.415 6.974v13.673h-8.752V22.397h8.752v2.91c1.86-2.141 4.65-3.679 8.26-3.679 7.439 0 10.885 5.052 10.885 12.465M114.163 40.682l-2.68 3.075v6.645h-8.752V10.316h8.752v22.35l8.37-10.27h10.064l-10.338 11.972 11.268 16.034H121z"
        />
        <path
          fill={color === 'bg-white' ? '#231F20' : '#FEFEFE'}
          mask="url(#b)"
          d="M5.034 4.753v50.42h9.67v4.589H0V.098h14.705v4.655zM137.617 55.01V4.587h-9.67V0h14.704v59.664h-14.705V55.01z"
        />
        <path
          d="M59.064 13.981c0-2.868 2.315-5.193 5.172-5.193 2.858 0 5.174 2.325 5.174 5.193 0 2.868-2.316 5.193-5.174 5.193-2.857 0-5.172-2.325-5.172-5.193"
          fill="#231F20"
          mask="url(#b)"
        />
      </g>
    </svg>
  )
}
export default Logo
