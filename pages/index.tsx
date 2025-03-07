import type { NextPage } from 'next'
import Head from 'next/head'
import TwitterMember from '../components/common/TwitterMember'
import TwitterTimeline from '../components/common/TwitterTimeline'
import LinkItem from '../components/common/LinkItem'
import AnalyticsSnapshot from '../components/analytics/analyticsSnapshot'

const twitterMembers = [
  { 
    name: 'Andrew (Canada)', 
    handle: '@andrew_pinch', 
    image: 'https://pbs.twimg.com/profile_images/1888469922101043200/8lB6LRIa_400x400.jpg', 
    linkUrl: 'https://twitter.com/andrew_pinch' 
  },
  { 
    name: 'Serdar (Turkey)', 
    handle: '@serdartepeyurt', 
    image: 'https://pbs.twimg.com/profile_images/1429711711154618370/9-_ipahf_400x400.jpg', 
    linkUrl: 'https://twitter.com/serdartepeyurt' 
  },
  { 
    name: 'Scott (USA)', 
    handle: '@DJPressha', 
    image: 'https://pbs.twimg.com/profile_images/1500611722763251715/NxStaKq1_400x400.jpg', 
    linkUrl: 'https://twitter.com/DJPressha' 
  },
  // { 
  //   name: 'Josh Worley', 
  //   handle: '@joshworley_io', 
  //   image: 'https://pbs.twimg.com/profile_images/1503875418427994113/53nkYIMp_400x400.jpg',
  //   linkUrl: 'https://twitter.com/joshworley_io'
  // },
]

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>TELx Community</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main id="page-home" className="page">

        <div className="home-hero">

          <div className="home-hero-inner">

            <div className="home-hero-titles">
              <h1>TELx Community</h1>
              <h2>Commuity-led Education and Analytics for TELx</h2>
            </div>

            <div className='home-hero-ctas'>
              <LinkItem 
                linkUrl='/education'
                linkText='View the Education Guide'
                external={false}
                newWindow={false}
                className='button white'
              />
              <LinkItem 
                linkUrl='/analytics'
                linkText='View TELx Analytics'
                external={false}
                newWindow={false}
                className='button white'
              />
            </div>

            <AnalyticsSnapshot />

          </div>
        </div>

        <section className="home-intro-and-twitter">
          <div className="home-intro">
            <div className="home-intro-inner">
              <h2>
                About TELx Community
              </h2>
              <p>TELx Community was created and is managed by volunteers with diverse backgrounds, who’ve come together to bring you educational materials on Decentralized Finance (DeFi) specifically as they relate to Telcoin’s TELx and their suite of decentralized user-owned financial products. </p>
                <p>Here you’ll find resources to help you get started on your DeFi journey, analyze TELx’s suite of products, and tools to help you decide which pools/services are best for you.</p>
                <p>The #TELFAM  is a community of TELx users supporting each other to take control of their crypto assets and put them to work so they can essentially pay themselves, and take control of their financial independance. #COYT (Come On You Telcoin)</p>
                <p>Get started by clicking on one of the links below, or if you have any questions, don’t hesitate to reach out to us on Twitter.</p>
                <p>To learn more about Telcoin and TELx, please head to their main sites:</p>
                <p><a href="https://telco.in/about-company">https://telco.in/about-company</a></p>
                <p><a href="https://telx.network">https://telx.network</a></p>
                <p>Here you can stay up to date on all of Telcoin’s latest news releases: <a href="https://telco.in/newsroom">https://telco.in/newsroom</a></p>
            </div>
          </div>  
          
          <div className="home-twitter">
            <TwitterTimeline />
          </div>  
        </section>

        <section className="home-created-by">
          <div className="home-created-by-inner">
            <h3>Created by #telfam Community Members</h3>
            <div className="twitter-members">
              {
                  twitterMembers.map((tm, i) => {
                    const { linkUrl, name, handle, image } = tm;
                    return (
                      <div key={`${name}-${i}`}>
                        <TwitterMember 
                          linkUrl={linkUrl}
                          name={name}
                          handle={handle}
                          image={image}
                        />
                      </div>
                    )
                  })
                }
              </div>
          </div>
        </section>

      </main>

    </div>
  )
}


export default Home
