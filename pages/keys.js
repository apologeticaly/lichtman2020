import React from 'react';
import Forecast from '../components/forecast.js'
import Head from 'next/head';
import Footer from '../components/footer.js'
import Navigation from '../components/navigation.js'
import Newsletter from '../components/newsletter.js'
import Link from 'next/link';
import {Navbar, Nav, Form} from 'react-bootstrap';

export default function Keys() {
    return(
        <div>
            <Head>
                <meta charSet="utf-8" />
                <title>Lichtman2020 | 13 Keys</title>
                <meta name="title" content="Lichtman2020 | 13 Keys"  />
                <meta name="description" content="Based on the 1981 book 'Keys to the White House' by Allan Lichtman, we use 13 indicators to forecast the presidential race in 2020."  data-react-helmet="true" /> 

                {/* <!-- Open Graph / Facebook --> */}
                <meta property="og:type" content="website" data-react-helmet="true" />
                <meta property="og:url" content="https://www.lichtman2020.com/keys/" data-react-helmet="true" />
                <meta property="og:title" content="Lichtman2020 | 13 Keys" data-react-helmet="true" />
                <meta property="og:description" content="Based on the 1981 'Keys to the White House' by Allan Lichtman, we use 13 indicators to forecast the presidential race in 2020."  data-react-helmet="true" />
                <meta property="og:image" content="http://www.lichtman2020.com/meta/meta-keys.png" data-react-helmet="true" />

                {/* <!-- Twitter --> */}
                <meta property="twitter:card" content="summary_large_image" data-react-helmet="true" />
                <meta property="twitter:site" content="@lichtman2020" data-react-helmet="true" />
                <meta property="twitter:url" content="https://www.lichtman2020.com/keys/" data-react-helmet="true" />
                <meta property="twitter:title" content="Lichtman2020 | 13 Keys" data-react-helmet="true" />
                <meta property="twitter:description" content="Based on the 1981 book 'Keys to the White House' by Allan Lichtman, we use 13 indicators to forecast the presidential race in 2020." data-react-helmet="true" />
                <meta property="twitter:image" content="http://www.lichtman2020.com/meta/meta-keys.png" data-react-helmet="true" />
                <link href="https://fonts.googleapis.com/css2?family=Hind+Vadodara&family=PT+Sans+Caption&family=PT+Sans:wght@700&family=Roboto+Mono:wght@400;500;700&display=swap" rel="stylesheet" />
            </Head>

            <div className="container container-small">

            <Navbar className="navbar navbar-light" expand="lg" id="navbar">
        <Navbar.Brand className="navbar-brand"><Link href="/"><a><img className="logo" src="/logo.svg"></img></a></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNavAltMarkup" />
        <Navbar.Collapse id="navbarNavAltMarkup">
            <Nav className="m-auto">
                <Link href='/chances'><a className="nav-link" id="nav-link">Chances</a></Link>
                <Link href='/keys'><a className="nav-link is-active" id="nav-link">13 Keys</a></Link>
                <Link href='/writings'><a className="nav-link" id="nav-link">Writings</a></Link>
                <Link href='/method'><a className="nav-link" id="nav-link">Method</a></Link>
                {/* <NavLink className="nav-link" id="nav-link" activeClassName='is-active' to='/about'>About</NavLink> */}
            </Nav>

            <Form>
                <a id="icon-link" href="https://www.facebook.com/sharer/sharer.php?u=http://www.lichtman2020.com/" target="_blank" rel="noopener noreferrer"><img id="icon" src="/icons/facebook.svg"/></a>
                <a id="icon-link" href="https://www.twitter.com/lichtman2020" target="_blank" rel="noopener noreferrer"><img id="icon" src="/icons/twitter.svg"/></a>
                {/* <a id="icon-link" href="https://www.github.com/apologeticaly/lichtman2020" target="_blank" rel="noopener noreferrer"><img id="icon" src="/icons/github.svg"/></a> */}
                <a id="icon-link" href="https://www.youtube.com/channel/UC8b0wJtvEf_beuc0K0WJ_IQ" target="_blank" rel="noopener noreferrer"><img id="icon" src="/icons/youtube.svg"/></a>
            </Form>
        </Navbar.Collapse>
        </Navbar>
    <div className="main">
    <div className="row">
        <div className="col-sm-7">
        <div className="section">
        <div id="label">
            <p id="micro">13 KEYS PREDICTION</p>
        </div>
        <div className="container">
            <div className="row probability">
                <div className="lichtman">
                    <p className = "lichtman-p">
Developed by Professor Allan Lichtman in 1981, The 13 Keys are statements that favor victory (in the popular vote count) for the incumbent party. When five or fewer statements are false, the incumbent party is predicted to win the popular vote; when six or more are false, the challenging party is predicted to win the popular vote. We have labeled how each key currently favors each party, with true represented by the GOP and false with the DNC logo respectively.</p>
                    <p className="lichtman-title">1) Party Mandate: <img className="party-logo" src="./img/dnc.svg"></img></p> <p className="lichtman-p">After the midterm elections, the incumbent party holds more seats in the U.S. House of Representatives than after the previous midterm elections.</p>
                    <p className="lichtman-title">2) Contest: <img className="party-logo" src="./img/gop.svg"></img></p> <p className="lichtman-p"> There is no serious contest for the incumbent party nomination.</p>
                    <p className="lichtman-title">3) Incumbency: <img className="party-logo" src="./img/gop.svg"></img></p> <p className="lichtman-p"> The incumbent party candidate is the sitting president.</p>
                    <p className="lichtman-title">4) Third party: <img className="party-logo" src="./img/gop.svg"></img></p> <p className="lichtman-p"> There is no significant third party or independent campaign.</p>
                    <p className="lichtman-title">5) Short-term economy: <img className="party-logo" src="./img/dnc.svg"></img></p> <p className="lichtman-p"> The economy is not in recession during the election campaign.</p>
                    <p className="lichtman-title">6) Long-term economy: <img className="party-logo" src="./img/dnc.svg"></img></p> <p className="lichtman-p">  Real per capita economic growth during the term equals or exceeds mean growth during the previous two terms.</p>
                    <p className="lichtman-title">7) Policy change: <img className="party-logo" src="./img/gop.svg"></img></p> <p className="lichtman-p"> The incumbent administration effects major changes in national policy.</p>
                    <p className="lichtman-title">8) Social unrest: <img className="party-logo" src="./img/dnc.svg"></img></p> <p className="lichtman-p"> There is no sustained social unrest during the term.</p>
                    <p className="lichtman-title">9) Scandal: <img className="party-logo" src="./img/dnc.svg"></img></p> <p className="lichtman-p"> The incumbent administration is untainted by major scandal.</p>
                    <p className="lichtman-title">10) Foreign/military failure: <img className="party-logo" src="./img/gop.svg"></img></p> <p className="lichtman-p"> The incumbent administration suffers no major failure in foreign or military affairs.</p>
                    <p className="lichtman-title">11) Foreign/military success: <img className="party-logo" src="./img/dnc.svg"></img></p> <p className="lichtman-p"> The incumbent administration achieves a major success in foreign or military affairs.</p>
                    <p className="lichtman-title">12) Incumbent charisma: <img className="party-logo" src="./img/gop.svg"></img></p> <p className="lichtman-p"> The incumbent party candidate is charismatic or a national hero.</p>
                    <p className="lichtman-title">13) Challenger charisma: <img className="party-logo" src="./img/gop.svg"></img></p> <p className="lichtman-p"> The challenging party candidate is not charismatic or a national hero.</p>

                </div>

                <div className="row-update">
                    <p id="micromicro">UPDATED MAR. 23RD 14:17PST</p>
                </div>
            </div>
        </div>
    </div>
            
        </div>


        <div className="col-sm-5">
            <div className="chart-main">
            <Forecast />

            </div>
            {/* <Chart /> */}
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