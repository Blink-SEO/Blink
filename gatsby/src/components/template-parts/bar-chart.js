import React, { useEffect } from 'react'
import { TimelineLite } from "gsap/dist/gsap";

import BarChartSVG from '../../assets/svgs/bar-chart.inline.svg'

const BarChart = () => {
  const tl = new TimelineLite()
  const offset = '>-1'

  useEffect(() => {
    tl
      .fromTo("#barClipYellowThree", {y: 650}, {y: 0, duration: 1})
      .fromTo("#shadowThree", {y: -1800}, {y: 0, duration: 1}, offset)
      .fromTo("#barClipYellowTwo", {y: 650}, {y: 0, duration: 1})
      .fromTo("#shadowFour", {y: -1800}, {y: 0, duration: 1}, offset)
      .fromTo("#barClipYellowOne", {y: 650}, {y: 0, duration: 1})
      .fromTo("#shadowTwo", {y: -1800}, {y: 0, duration: 1}, offset)
      .fromTo("#barClipRed", {y: 650}, {y: 0, duration: 1})
      .fromTo("#shadowOne", {y: -1800}, {y: 0, duration: 1}, offset);
  })

  return (
    <div className='overflow-visible' style={{height: '80%'}}>
      <BarChartSVG className='w-full-1-5'  />
    </div>
  )
}

export default BarChart
