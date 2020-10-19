import React from 'react'

import Wrapper from './HomeSectionWrapper'
import BigPlus from '../Img/BigPlus'

const WordCloud = () => {
  return (
    <Wrapper className="[ bg-red ] [ has-bg has-bg--half has-bg--word-cloud ]">
      <div className="[ word-cloud ] [ grid grid-auto-rows-dense grid-cols-12 col-gap-12 ] [ relative ]">

        <span className="[ line ] [ row-start-1 col-start-5 ] [ absolute ]" style={{ top: '10%' }}></span>
        <BigPlus className="[ row-start-1 col-start-5 ] [ absolute top-25 ]" />
        <p className="[ word-cloud__text--massive ] [ row-start-2 row-end-3 col-start-1 md:col-start-2 col-end-7 ] [ mb-0 ] [ font-extrabold leading-none ]">SEO</p>
        <p className="[ word-cloud__text--xl ] [ row-start-2 col-start-2 md:col-start-4 ] [ self-end ] [ mb-0 ] [ text-white ] [ font-extrabold leading-none ]">copywriting</p>
        <p className="[ word-cloud__text--md rotate rotate--mob-none ] [ row-start-2 col-start-1 md:col-start-9 ] [ absolute top-0 md:top-25 ] [ text-white ] [ font-extrabold leading-none ]">strategy</p>
        <p className="[ word-cloud__text--lg ] [ row-start-3 row-end-4 col-start-1 md:col-start-7 ] [ mb-0 ] [ font-extrabold leading-none ]">eCommerce</p>
        <span className="[ line line--short line--thick ] [ row-start-4 col-start-2 ] [ hidden md:block ]" style={{ top: '10%' }}></span>
        <p className="[ word-cloud__text--sm ] [ row-start-4 col-start-4 md:col-start-6 md:col-span-12 ] [ text-white ] [ font-extrabold leading-none ]">web design</p>

      </div>
    </Wrapper>
  )
}

export default WordCloud
