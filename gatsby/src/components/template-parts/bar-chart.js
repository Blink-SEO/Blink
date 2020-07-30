import React, { useEffect } from 'react'
import { gsap } from 'gsap'

import BarChartSVG from '../../assets/svgs/bar-chart.inline.svg'

const BarChart = () => {

  useEffect(() => {
    const tl = gsap.timeline()
    const duration = 1.3
    const initialPosition = 1000
    const offset = `>-${duration}`

    tl
    .fromTo('#mask7', {attr: {y: initialPosition}}, {attr:{y: 556}, duration: duration})
    .fromTo("#mask2", {attr: {y: -initialPosition}}, {attr: {y: 612}, duration: duration}, offset)
    .fromTo('#mask6', {attr: {y: initialPosition}}, {attr:{y: 311}, duration: duration})
    .fromTo("#mask3", {attr: {y: -initialPosition}}, {attr: {y: 605}, duration: duration}, offset)
    .fromTo('#mask5', {attr: {y: initialPosition}}, {attr:{y: 270}, duration: duration})
    .fromTo("#mask1", {attr: {y: -initialPosition}}, {attr: {y: 621}, duration: duration}, offset)
    .fromTo('#mask4', {attr: {y: initialPosition}}, {attr:{y: 0}, duration: duration})
    .fromTo("#mask0", {attr: {y: -initialPosition}}, {attr: {y: 591}, duration: duration}, offset)
  })

  return <BarChartSVG id='barChart' className='w-full-1-5'  />
}

export default BarChart
