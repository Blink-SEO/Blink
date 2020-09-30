import React from 'react'
import Layout from "../components/layout"

export default () => (
  <Layout>
    <header>
      <h1 className="[ hero-title hero-title--post hero-title--wide ] [ mb-5 ] [ text-black text-4xl sm:text-5xl lg:text-6xl leading-tight ]">Thank you</h1>
    </header>

    <article className="[ flow ] [ relative ]">
      <section className="[ entry-content flow ] [ grid grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-6 md:col-gap-16 ]">
        <h2 className="[ lead ] [ col-start-1 col-end-6 lg:col-start-2 ]">hello world</h2>
        <div className="[ flow ] [ col-start-1 col-end-6 lg:col-start-2 ]">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia nihil, nisi dignissimos porro ratione delectus reprehenderit ducimus recusandae distinctio? Impedit at dolores quibusdam fugiat cupiditate! Excepturi maiores iure architecto totam.</p>
        </div>
      </section>
    </article>
  </Layout>
)
