import type { NextPage } from 'next'
import Head from 'next/head'

import ArticleService from '../../services/article-service';
const articleService = new ArticleService();


const Page: NextPage = ( { articles, welcomeArticle} ) => {
  return (
    <div>
      <Head>
        <title>TELx Community</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="page-temp">
        <h1>Education</h1>
        
      </main>
      {
        articles.map((article, i) => ( <h2>{article.title}</h2> ))
      }
      <hr />
      <div dangerouslySetInnerHTML={{ __html: welcomeArticle.rawHtml }}></div>

    </div>
  )
}


// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps() {
  
  const articles = await articleService.fetchAll();
  const welcomeArticle = await articleService.fetchSingle(5);
  
  return {
    props: {
      articles,
      welcomeArticle
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  }
}


export default Page
