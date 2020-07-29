import React, { useLayoutEffect } from 'react'
import { TimelineLite } from "gsap/dist/gsap";

import BarChartSVG from '../../assets/svgs/bar-chart.inline.svg'

const BarChart = () => {

  useLayoutEffect(() => {
    const tl = new TimelineLite()
    const offset = '>-1'

    tl
      .fromTo("#h", {y: 650}, {y: 0, duration: 1})
      .fromTo("#c", {y: -1800}, {y: 0, duration: 1}, offset)
      .fromTo("#g", {y: 650}, {y: 0, duration: 1})
      .fromTo("#d", {y: -1800}, {y: 0, duration: 1}, offset)
      .fromTo("#f", {y: 650}, {y: 0, duration: 1})
      .fromTo("#b", {y: -1800}, {y: 0, duration: 1}, offset)
      .fromTo("#e", {y: 650}, {y: 0, duration: 1})
      .fromTo("#a", {y: -1800}, {y: 0, duration: 1}, offset);
  })

  return (
    <div className='overflow-visible' style={{height: '80%'}}>
      <BarChartSVG className='w-full-1-5'  />
    </div>
  )
}

export default BarChart
