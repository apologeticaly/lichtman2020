import React from 'react';
import Navigation from '../../components/navigation.js'
import Footer from '../../components/footer.js';
import Forecast from '../../components/forecast.js';
import Head from 'next/head';
import Link from 'next/link';
import {Navbar, Nav, Form} from 'react-bootstrap';

class Biden extends React.Component {
    render(){
    return(
        <div>
            <Head>
                <meta charSet="utf-8" />
                <title>Biden Selects Harris for VP</title>
                <meta name="title" content="Biden Selects Harris for VP" />
                <meta name="description" content="After months of vetting and meeting with contenders, Biden has settled on Kamala Harris to be his VP."  data-react-helmet="true" /> 

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.lichtman2020.com/kamala-harris-vp/"  />
                <meta property="og:title" content="Biden Selects Harris for VP" />
                <meta property="og:description" content="After months of vetting and meeting with contenders, Biden has settled on Kamala Harris to be his VP."  />
                <meta property="og:image" content="http://www.lichtman2020.com/meta/kamala-harris-vp.png"  />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image"  />
                <meta property="twitter:site" content="@lichtman2020"  />
                <meta property="twitter:url" content="https://www.lichtman2020.com/kamala-harris-vp/" />
                <meta property="twitter:title" content="Biden Selects Harris for VP"  />
                <meta property="twitter:description" content="After months of vetting and meeting with contenders, Biden has settled on Kamala Harris to be his VP."  />
                <meta property="twitter:image" content="http://www.lichtman2020.com/meta/kamala-harris-vp.png" />
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
            <div className="writings-headline">
                <p id="micro">2020 ELECTION</p>
                <h1>Biden Selects Harris for Vice President</h1>
                <h4 id="h4">After months of vetting and meeting with contenders, Biden has settled on Kamala Harris to be his VP.</h4>
                <p id="byline">By Staff</p>
            </div>

            <div className="writings">
            <div id="writings-img">
                <img src="/img/story.jpg"></img>
                <p id="micro">CNN / Time Warner</p>
            </div>
            <p id="paragraph">According to sources within the Biden campaign, as well as a breach of a press embargo, Kamala Harris has been selected to be Joe Biden’s running mate in 2020. The story broke when Politico accidentally released a piece meant for publication on Saturday. In previous interviews, Biden has indicated he would announce his VP selection on August 1st, and in addition to a quote attributed to Biden, Politico confirmed the selection date as well. <br></br><br></br></p>
            
            <img src="/img/kamalaharris.png"></img>
            <p class="mt-2" id="micro">A now deleted graphic published by Politico <br></br></p>

<p id="paragraph" class="mt-5"> As noted in the above piece, the selection comes two weeks before the Democratic National Convention to be held in Milwaukee, Wisconsin. Trump carried the state in 2016, to the dismay of democrats who believed Clinton had locked in the suburban ‘rust belt’ vote. In addition to the strategic location of Wisconsin, the agenda for the convention is set to have speakers from several other battleground states such as Michigan and Ohio, two other states that were crucial to Trump’s 2016 upset victory.<br></br><br></br>

Though more progressive members of the democratic party thought a selection such as Elizabeth Warren would appeal to disenfranchised workers in the rust belt left jobless by COVID-19 and outsourcing of labor, Biden in the end selected Harris in part due to her past experience as a prosecutor in light of the recent civil disobedience across the country.<br></br><br></br>
As shown in our <a href="https://lichtman2020.com/chances" target="_blank">recent forecast update</a>, Joe Biden stands an extremely chance of being election president in November, with a Trump victory quickly becoming impossible. With his poll and approval rating number tanking every week, Trump needs a big turn if he wishes to repeat his 2016 success. All that’s left is three Presidential and one Vice Presidential debate, as well as another long 97 days until election. Definitely enough time to deal himself a new set of cards to play with.</p>
            </div>
            
        </div>


        <div className="col-sm-5">
        <div id="label">
                <Forecast />
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

export default Biden;