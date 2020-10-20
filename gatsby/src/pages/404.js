import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout';
import Title from '../components/template-parts/PageTitle'

export default () => (
    <Layout>
        <article className='grid grid-flow-row sm:grid-flow-col sm:grid-cols-2 gap-16 min-h-screen mx-auto'>
        <div className='border-l-2 border-dark-yellow pl-8 mb-8'>
          <Title textColor="text-white" title="Oops, that's a 404" />
          <section>
            <h2 class="text-3xl mb-4">That means this page can't be found</h2>
            <p><Link to='/'>Take me back to the homepage</Link></p>
          </section>
        </div>
      </article>
    </Layout>
)