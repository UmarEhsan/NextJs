
import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout.js'
import utilStyles from '../../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>


      <section className={utilStyles.headingMd}>
        <p>I’m a full-stack JavaScript engineer, front-end focused, having almost half a decade of experience working on the web. I have experience working in startups. I am a fan of startup culture where everyone has a voice and gets to wear different hats every day. I enjoy having a variety of tasks and responsibilities and being able to jump from frontend to backend or DevOps when needed.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  )
}