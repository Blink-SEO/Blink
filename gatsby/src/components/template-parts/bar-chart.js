import React from 'react'
import anime from 'animejs'

import BarChartSVG from '../../assets/svgs/bar-chart.inline.svg'

const BarChart = () => {

  const tl = anime.timeline({
    easing: "easeInOutCubic",
    duration: 1500,
  })
  const offset = '-=100'

  // IDs are clippaths within the imported svg
  tl.add({
    targets: "#barClipYellowThree",
    translateY: [350, 0],
  })
  .add({
    targets: "#barClipYellowTwo",
    translateY: [450, 0],
  }, offset)
  .add({
    targets: "#barClipYellowOne",
    translateY: [550, 0],
  }, offset)
  .add({
    targets: "#barClipRed",
    translateY: [650, 0],
  }, offset)
  .add({
    targets: "#SVGID_2_",
    translateX: [-1600, 0],
  })

  return (
    <div className='overflow-visible'>
      <BarChartSVG className='w-full-1-5' />
    </div>
  )
}

export default BarChart
