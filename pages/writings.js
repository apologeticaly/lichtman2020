import React from 'react';
import Navigation from '../components/navigation.js'
import Footer from '../components/footer.js';
// import Chart from './Chart';
// import Forecast from './Forecast';
// import Newsletter from './Newsletter';
// import Lichtman from './Lichtman';
import Head from 'next/head';
import Link from 'next/link';
import {Navbar, Nav, Form} from 'react-bootstrap';

class Writings extends React.Component {

    render () {
    return (
        <div>
            <Head>
                <meta charSet="utf-8" />
                <title>Lichtman2020 | Writings</title>
                <meta name="title" content="Lichtman2020 | Writings"  />
                <meta name="description" content="Latest news, opinion pieces and articles complementing our election forecasting coverage."  data-react-helmet="true" /> 

                {/* <!-- Open Graph / Facebook --> */}
                <meta property="og:type" content="website" data-react-helmet="true" />
                <meta property="og:url" content="https://www.lichtman2020.com/writings/" data-react-helmet="true" />
                <meta property="og:title" content="Lichtman2020 | Writings" data-react-helmet="true" />
                <meta property="og:description" content="Latest news, opinion pieces and articles complementing our election forecasting coverage."  data-react-helmet="true" />
                <meta property="og:image" content="http://www.lichtman2020.com/meta/meta-writings.png" data-react-helmet="true" />

                {/* <!-- Twitter --> */}
                <meta property="twitter:card" content="summary_large_image" data-react-helmet="true" />
                <meta property="twitter:site" content="@lichtman2020" data-react-helmet="true" />
                <meta property="twitter:url" content="https://www.lichtman2020.com/writings/" data-react-helmet="true" />
                <meta property="twitter:title" content="Lichtman2020 | Writings" data-react-helmet="true" />
                <meta property="twitter:description" content="Latest news, opinion pieces and articles complementing our election forecasting coverage." data-react-helmet="true" />
                <meta property="twitter:image" content="http://www.lichtman2020.com/meta/meta-writings.png" data-react-helmet="true" />
                <link href="https://fonts.googleapis.com/css2?family=Hind+Vadodara&family=PT+Sans+Caption&family=PT+Sans:wght@700&family=Roboto+Mono:wght@400;500;700&display=swap" rel="stylesheet" />
            </Head>
        <div className="container container-small">
        <Navbar className="navbar navbar-light" expand="lg" id="navbar">
        <Navbar.Brand className="navbar-brand"><Link href="/"><a><img className="logo" src="/logo.svg"></img></a></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNavAltMarkup" />
        <Navbar.Collapse id="navbarNavAltMarkup">
            <Nav className="m-auto">
                <Link href='/chances'><a className="nav-link" id="nav-link">Chances</a></Link>
                <Link href='/keys'><a className="nav-link" id="nav-link">13 Keys</a></Link>
                <Link href='/writings'><a className="nav-link is-active" id="nav-link">Writings</a></Link>
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
            <div className="headline">
                <img src="/img/headline.png"></img>
                <p id="micro">2020 ELECTION</p>
                <Link href="/writings/the-party-decides"><h1 id="h1"><a>The Party Decides And The Progressives Rethink</a></h1></Link>
                <p id="byline">By M. Constantino</p>
                <p id="paragraph">When Elizabeth Warren dropped out she noted that at the beginning of her campaign she was told there were two wings of the party, the progressive wing and the moderate wing. Bernie Sanders and Joe Biden were the incumbents of both respectively....</p>
            </div>
            
        </div>


        <div className="col-sm-5">
            <div className="chart-main">
            <div className="row story">
                <div className="col">
                    <p id="micro">2020 ELECTION</p>
                    <Link href="/writings/all-over-again"><h3 id="h3"><a>How This Race Is Becoming 2016 All Over Again </a></h3></Link>
                    <p id="byline">By M. Constantino</p>
                </div>
                <div className="col">
                    <img src="/img/story1.png"></img>
                </div>
            </div>

            </div>
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
}

export default Writings;