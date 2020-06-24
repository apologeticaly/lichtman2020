import React from 'react';
import Pastforecast from '../components/pastforecast.js';
import Link from 'next/link';
import Footer from '../components/footer.js';
import StateTable from '../maps/statetable.js';
import Head from 'next/head';
import RenderMap from '../maps/rendermap.js';
import {Navbar, Nav, Form} from 'react-bootstrap';

const Chances = () => {
    return(
        <div>
            <Head>
                <meta charSet="utf-8" />
                <title>Lichtman2020 | Chances</title>
                <meta name="title" content="Lichtman2020 | Chances"  />
                <meta name="description" content="Using weighted polling averages and the book ’13 Keys to the White House’, we've created probabilistic election forecasts for the 2020 US Presidential Election." data-react-helmet="true" /> 

                {/* <!-- Open Graph / Facebook --> */}
                <meta property="og:type" content="website" data-react-helmet="true" />
                <meta property="og:url" content="https://www.lichtman2020.com/chances" data-react-helmet="true" />
                <meta property="og:title" content="Lichtman2020 | Chances" data-react-helmet="true" />
                <meta property="og:description" content="Using weighted polling averages and the book ’13 Keys to the White House’, we've created probabilistic election forecasts for the 2020 US Presidential Election."  data-react-helmet="true" />
                <meta property="og:image" content="http://www.lichtman2020.com/meta/meta-chances.png" data-react-helmet="true" />

                {/* <!-- Twitter --> */}
                <meta property="twitter:card" content="summary_large_image" data-react-helmet="true" />
                <meta property="twitter:site" content="@lichtman2020" data-react-helmet="true" />
                <meta property="twitter:url" content="https://www.lichtman2020.com/chances" data-react-helmet="true" />
                <meta property="twitter:title" content="Lichtman2020 | Chances" data-react-helmet="true" />
                <meta property="twitter:description" content="Using weighted polling averages and the book ’13 Keys to the White House’, we've created probabilistic election forecasts for the 2020 US Presidential Election." data-react-helmet="true" />
                <meta property="twitter:image" content="http://www.lichtman2020.com/meta/meta-chances.png" data-react-helmet="true" />
                <link href="https://fonts.googleapis.com/css2?family=Hind+Vadodara&family=PT+Sans+Caption&family=PT+Sans:wght@700&family=Roboto+Mono:wght@400;500;700&display=swap" rel="stylesheet" />
            </Head>
        <div className="container container-small">
        <div>
        <Navbar className="navbar navbar-light" expand="lg" id="navbar">
        <Navbar.Brand className="navbar-brand"><Link href="/"><a><img className="logo" src="/logo.svg"></img></a></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNavAltMarkup" />
        <Navbar.Collapse id="navbarNavAltMarkup">
            <Nav className="m-auto">
                <Link href='/chances'><a className="nav-link is-active" id="nav-link">Chances</a></Link>
                <Link href='/keys'><a className="nav-link" id="nav-link">13 Keys</a></Link>
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
        </div>
    <div className="main">
        <div className="row">
            <div className="col-md-9">
                <RenderMap />
            </div>
            
            <div className="col-md-3">
            <div className="section">
                <div id="label">
                <p id="micro">FORECAST CHANCES</p>
                </div>
            <div className="container">
                <div className="row probability">

                <div className="row-candidate-label-1">
                        <p id="micro">Fmr. VP Joe Biden</p>
                    </div>

                    <div className="row-candidate-2">
                        <img className="candidate" src="../biden.png"></img>
                        <div className="dem-chances">
                            <h1 id="forecast-h1">357</h1>
                        </div>
                    </div>

                    <div className="row-candidate-label">
                    <p id="micro">President Donald Trump</p>
                    </div>

                    <div className="row-candidate-2">
                        <img className="candidate" src="../trump.png"></img>
                        <div className="rep-chances">
                            <h1 id="forecast-h1">181</h1>      
                        </div>
                    </div>

                    <div className="row-update">
                        <p id="micromicro">UPDATED JUN. 24TH 11:30PST</p>
                    </div>
                </div>

            
                <div className="row">
                    <div className="chances-description">
                    <p id="description" className="mt-1">This forecast model inputs three parameters for each competition: an average of state and national polls, a proprietary index which weighs those polls on accuracy, and finally an additional weight based on the current standing of the 13 Keys.</p>
                    </div>
                </div>
                </div>
                </div>
            </div>
        </div>

        <div className="row">
            <Pastforecast />
        </div>

        <div className="row">
            <StateTable />
        </div>

        </div>
    </div>

    <div>
        <Footer />
    </div>
    </div>
    );
}

export default Chances;