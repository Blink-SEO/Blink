import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import Title from '../components/template-parts/PageTitle'

const Success = () => (
  <Layout>
    <article className="grid grid-flow-row sm:grid-flow-col sm:grid-cols-2 gap-16 min-h-screen mx-auto">
      <div className="border-l-2 border-dark-yellow pl-8 mb-8">
        <Title
          titleClass="hero-title--post"
          textColor="text-white"
          title="Thank you"
        />

        <section>
          <h2 class="text-3xl mb-4">Someone will be in touch shortly</h2>
          <p>
            <Link to="/">Take me back to the homepage</Link>
          </p>
        </section>
      </div>
    </article>
  </Layout>
)

export default Success
