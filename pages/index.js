import React from 'react';
import Navigation from '../components/navigation.js';
import Newsletter from '../components/newsletter.js';
import MiniLichtman from '../components/minilichtman.js';
import Footer from '../components/footer.js';
import Forecast from '../components/forecast.js';
import Head from 'next/head';
import Link from 'next/link';

export default function Index() {
    return (
        <div>
            <Head>
                <title>Lichtman2020 | Home</title>
                <meta name="title" content="Lichtman2020 | Home"  />
                <meta name="description" content="Using weighted polling averages and the book ’Keys to the White House’, we've created probabilistic election forecasts for the 2020 US Presidential Election."  data-react-helmet="true" /> 

                {/* <!-- Open Graph / Facebook --> */}
                <meta property="og:type" content="website" data-react-helmet="true" />
                <meta property="og:url" content="https://www.lichtman2020.com/" data-react-helmet="true" />
                <meta property="og:title" content="Lichtman2020 | Election forecasting" data-react-helmet="true" />
                <meta property="og:description" content="Using weighted polling averages, and the book ’Keys to the White House’ we've created probabilistic election forecasts for the 2020 US Presidential Election."  data-react-helmet="true" />
                <meta property="og:image" content="http://www.lichtman2020.com/meta.png" data-react-helmet="true" />

                {/* <!-- Twitter --> */}
                <meta property="twitter:card" content="summary_large_image" data-react-helmet="true" />
                <meta property="twitter:site" content="@lichtman2020" data-react-helmet="true" />
                <meta property="twitter:url" content="https://www.lichtman2020.com/" data-react-helmet="true" />
                <meta property="twitter:title" content="Lichtman2020 | Election forecasting" data-react-helmet="true" />
                <meta property="twitter:description" content="Using weighted polling averages, and the book ’Keys to the White House’ we've created probabilistic election forecasts for the 2020 US Presidential Election." data-react-helmet="true" />
                <meta property="twitter:image" content="http://www.lichtman2020.com/meta.png" data-react-helmet="true" />
                <script data-ad-client="ca-pub-5615429032974385" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
                <script async src="https://www.googletagmanager.com/gtag/js?id=UA-162117202-1"></script>
                <link href="https://fonts.googleapis.com/css2?family=Hind+Vadodara&family=PT+Sans+Caption&family=PT+Sans:wght@700&family=Roboto+Mono:wght@400;500;700&display=swap" rel="stylesheet" />
            </Head>

            <div className="container container-small">

            <Navigation />
    <div className="main">
    <div className="row">
        <div className="col-sm-5">
            {/* <div className="headline">
                <img src="/img/story.jpg"></img>
                <p id="micro">2020 ELECTION</p>
                <Link href="/writings/kamala-harris-vp"><h1 id="h1">Biden Selects Harris for Vice President</h1></Link>
                <p id="byline">By Staff</p>
            </div> */}
            <div className="headline">
                <img src="/img/story1.png"></img>
                <p id="micro">2020 ELECTION</p>
                <Link href="/writings/all-over-again"><h1 id="h1">How This Race Is Becoming 2016 All Over Again</h1></Link>
                <p id="byline">By Staff</p>
            </div>
            <div className="row story">
                <div className="col">
                    <p id="micro">2020 ELECTION</p>
                    <Link href="/writings/the-party-decides" id="h1"><h3 id="h3"><a>The Party Decides And The Progressives Rethink</a></h3></Link>
                    <p id="byline">By Staff</p>
                </div>
                <div className="col">
                    <img src="/img/headline.png"></img>
                </div>
            </div>
{/* 
            <div className="row story">
                <div className="col">
                    <p id="micro">2020 ELECTION</p>
                    <Link href="/writings/all-over-again"><h3 id="h3"><a>How This Race Is Becoming 2016 All Over Again</a></h3></Link>
                    <p id="byline">By Staff</p>
                </div>
                <div className="col">
                    <img src="/img/story1.png"></img>
                </div>
            </div> */}
            
        </div>


        <div className="col-sm-7">
            <div className="chart-main">
            <Forecast />

            </div>
            {/* <Chart /> */}
            <MiniLichtman />
            <Newsletter /> 
        </div>
      </div>
    </div>

    </div>
    <div>
    <Footer />
    </div>
    </div>
    );
}