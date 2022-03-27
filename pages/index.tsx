import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import CardPageButton from '../components/common/CardPageButton'
import TwitterMember from '../components/common/TwitterMember'

const twitterMembers = [
  { 
    name: 'Andrew Pinch', 
    handle: '@andrew_pinch', 
    image: 'https://pbs.twimg.com/profile_images/1450753252581167106/xPXNBxp7_400x400.jpg', 
    linkUrl: 'https://twitter.com/andrew_pinch' 
  },
  { 
    name: 'Serdar', 
    handle: '@creepindeath', 
    image: 'https://pbs.twimg.com/profile_images/1429711711154618370/9-_ipahf_400x400.jpg', 
    linkUrl: 'https://twitter.com/serdartepeyurt' 
  },
  { 
    name: 'Scott R', 
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

      <main>

        <section className="home-intro-and-twitter">
          <div className="page-layout-centered">
            <div className="page-layout-centered-inner">
              <div className="home-intro">
                <div className="home-intro-inner">
                  <h1>Welcome to the Community</h1>
                  <p>
                  TELx Community was created and is managed by volunteers with diverse backgrounds, who’ve come together to bring you educational materials on Decentralized Finance (DeFi) specifically as they relate to Telcoin’s TELx and their suite of decentralized user-owned financial products. <br/>
                  Here you’ll find resources to help you get started on your DeFi journey, analyze TELx’s suite of products, and tools to help you decide which pools/services are best for you.<br/>
                  The #TELFAM  is a community of TELx users supporting each other to take control of their crypto assets and put them to work so they can essentially pay themselves, and take control of their financial independance. #COYT (Come On You Telcoin)<br/>
                  Get started by clicking on one of the links below, or if you have any questions, don’t hesitate to reach out to us on Twitter.<br/>
                  To learn more about Telcoin and TELx, please head to their main sites:<br/>
                  https://telco.in/about-company<br/>
                  https://telx.network<br/>
                  Here you can stay up to date on all of Telcoin’s latest news releases:<br/>
                  https://telco.in/newsroom
                  </p>

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
              </div>  
            </div>
          </div>
          
          <div className="home-twitter">
            <h4>Twitter</h4>
          </div>  
        </section>

      </main>

    </div>
  )
}

export default Home
