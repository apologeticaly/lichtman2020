import React from 'react';
import Footer from '../components/footer.js';
import Head from 'next/head';
import Link from 'next/link';
import {Navbar, Nav, Form} from 'react-bootstrap';

export default function Method() {

    return (
        <div>
            <Head>
                <meta charSet="utf-8" />
                <title>Lichtman2020 | Method</title>
                <meta name="title" content="Lichtman2020 | Method"  />
                <meta name="description" content="Using weighted polling averages and the book ’13 Keys to the White House’, we've created probabilistic election forecasts for the 2020 US Presidential Election." data-react-helmet="true" /> 

                {/* <!-- Open Graph / Facebook --> */}
                <meta property="og:type" content="website" data-react-helmet="true" />
                <meta property="og:url" content="https://www.lichtman2020.com/method" data-react-helmet="true" />
                <meta property="og:title" content="Lichtman2020 | Method" data-react-helmet="true" />
                <meta property="og:description" content="Using weighted polling averages and the book ’13 Keys to the White House’, we've created probabilistic election forecasts for the 2020 US Presidential Election."  data-react-helmet="true" />
                <meta property="og:image" content="http://www.lichtman2020.com/meta.png" data-react-helmet="true" />

                {/* <!-- Twitter --> */}
                <meta property="twitter:card" content="summary_large_image" data-react-helmet="true" />
                <meta property="twitter:site" content="@lichtman2020" data-react-helmet="true" />
                <meta property="twitter:url" content="https://www.lichtman2020.com/method" data-react-helmet="true" />
                <meta property="twitter:title" content="Lichtman2020 | Method" data-react-helmet="true" />
                <meta property="twitter:description" content="Using weighted polling averages and the book ’13 Keys to the White House’, we've created probabilistic election forecasts for the 2020 US Presidential Election." data-react-helmet="true" />
                <meta property="twitter:image" content="http://www.lichtman2020.com/meta.png" data-react-helmet="true" />
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
                <Link href='/writings'><a className="nav-link" id="nav-link">Writings</a></Link>
                <Link href='/method'><a className="nav-link is-active" id="nav-link">Method</a></Link>
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
            <div className="col-md-6 mb-5">
                    <div id="label">
                        <p id="micro">FORECASTING</p>
                    </div>
                    <div className="method-description">
                        <p id="description">Our model is probabilistic. This means the numbers outputted claim to know the likelihood of that event occurring. For example, as of writing this, <a id="reference" href="/chances">the model</a> predicts that there is a 0.93% chance that a third party candidate wins New Mexico. It is a possibility, but not probable. What is much more probable is the  claim of Trump winning the state 47% of the time, which means, if you ran the state election 100 times, Trump would win 47 of those times. In no way does the model claim with absolute certainty, which is why even in liberal strong holds such as California, Trump still has a ~30% chance of winning. The model uses <a id="reference" href='/keys'>The 13 Keys</a>, currently national and state polls, as well as a proprietary weighting method to compute the probability of each candidate winning that respective state.</p>
                    </div>
            </div>
            <div className="col-md-6 mb-5">
                <div id="label">
                    <p id="micro">13 KEYS</p>
                </div>
                <div className="method-description">
                        <p id="description">Developed by Professor Allan Lichtman in 1981, <a id="reference" href="/keys">The 13 Keys</a> are statements that favor victory (in the popular vote count) for the incumbent party. When five or fewer statements are false, the incumbent party is predicted to win the popular vote; when six or more are false, the challenging party is predicted to win the popular vote. Something to take particular note of is that this model is used to predict the popular vote of the entire country rather than the race for electoral college votes in each state. In <a id="reference" href="/chances">our forecast</a> we use a modified version of the keys to apply a slight weight to polling averages, that within a reasonable margin of error would give a real world representation of Professor Lichtman’s model.</p>
                    </div>                
            </div>
        </div>
        <div className="row">
        <div className="col mb-3">
                <div id="label">
                    <p id="micro">WRITINGS</p>
                </div>
                <div className="method-description">
                        <p id="description">Almost all publications will have a certain amount of bias that is unavoidable as people, not machines write the news we read. In terms of the articles that are published on this site, those that are opinionated will be clearly labeled as such. Currently, Muhammed Constantino is the only writer for this site. You can view his political compass <a id="reference" href="https://www.politicalcompass.org/yourpoliticalcompass?ec=-8.38&soc=-4.1" target="blank" rel="noopener">here</a> and make your own inferences based on that information. If at any point it seems that there is a lack of truthfulness in the reporting, or at some point false information was shared, please let us know on <a id="reference" href="https://twitter.com/lichtman2020" target="_blank" rel="noopener">twitter</a>.</p>
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