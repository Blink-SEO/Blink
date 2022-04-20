import React from 'react'

import ConvertKitFrom from '../template-parts/ConvertKitForm'
import Wrapper from './HomeSectionWrapper'

const Ebook = ({ content, formIntro, cta }) => (
  <Wrapper className="[ bg-teal ]">
    <div className="[ grid grid-cols-8 col-gap-10 lg:row-gap-16 ] [ relative ]">
      <h2 className="[ row-start-1 col-start-1 col-end-7 ]">
        Free data analysis
      </h2>
      <span
        className="[ h2 rotate rotate--center rotate--long-text rotate--mob-none ] [ row-start-2 ] [ lg:absolute ] [ lg:text-10xl ]"
        style={{ margin: '0' }}
      >
        Workhops
      </span>

      <div
        className="[ row-start-3 md:row-start-3 lg:row-start-2 col-start-1 col-end-9 lg:col-start-2 md:col-end-5 ] [ text-2xl text-white ] [ mt-3 ]"
        dangerouslySetInnerHTML={{ __html: content }}
      />

      <div className="[ row-start-4 md:row-start-3 lg:row-start-2 col-start-1 col-end-9 md:col-start-5 lg:col-end-8 ] [ text-xl text-white ]">
        <div
          className="flow pb-3"
          dangerouslySetInnerHTML={{ __html: formIntro }}
        />
        {/* <ConvertKitFrom /> */}

        {cta?.title ? (
          <a
            href={cta?.url ? cta.url : '#'}
            target={cta?.target ? cta.target : null}
            class="bg-black text-white no-underline py-3 px-10"
          >
            {cta.title}
          </a>
        ) : null}
      </div>
    </div>
  </Wrapper>
)

export default Ebook
