import React from 'react'
import Layout from "../components/layout"
import { Link } from 'gatsby'

export default () => (
  <Layout>
    <article className='grid grid-flow-row sm:grid-flow-col sm:grid-cols-2 gap-16 min-h-screen mx-auto'>
      <div className='border-l-2 border-dark-yellow pl-8 mb-8'>
        <h1 className='hero-title hero-title--post text-white text-4xl sm:text-5xl lg:text-6xl leading-none mb-5'>Thank you</h1>
        <section>
          <h2 class="text-3xl mb-4">Someone will be in touch shortly</h2>
          <p><Link to='/'>Take me back to the homepage</Link></p>
        </section>
      </div>
    </article>
  </Layout>
)
