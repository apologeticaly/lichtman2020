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
                <title>How This Race Is Becoming 2016 All Over Again</title>
                <meta name="title" content="How This Race Is Becoming 2016 All Over Again" />
                <meta name="description" content="With enthusiasm for the Democratic candidate hovering dangerously low, Trump’s chances for a second term stay high."  data-react-helmet="true" /> 

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.lichtman2020.com/all-over-again/"  />
                <meta property="og:title" content="How This Race Is Becoming 2016 All Over Again" />
                <meta property="og:description" content="With enthusiasm for the Democratic candidate hovering dangerously low, Trump’s chances for a second term stay high."  />
                <meta property="og:image" content="http://www.lichtman2020.com/meta/all-over-again-meta.png"  />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image"  />
                <meta property="twitter:site" content="@lichtman2020"  />
                <meta property="twitter:url" content="https://www.lichtman2020.com/all-over-again/" />
                <meta property="twitter:title" content="How This Race Is Becoming 2016 All Over Again"  />
                <meta property="twitter:description" content="With enthusiasm for the Democratic candidate hovering dangerously low, Trump’s chances for a second term stay high."  />
                <meta property="twitter:image" content="http://www.lichtman2020.com/meta/all-over-again-meta.png" />
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
                <h1>How This Race Is Becoming 2016 All Over Again</h1>
                <h4 id="h4">With enthusiasm for the Democratic candidate hovering dangerously low, Trump’s chances for a second term stay high.</h4>
                <p id="byline">By Staff</p>
            </div>

            <div className="writings">
            <div id="writings-img">
                <img src="/img/story1.png"></img>
                <p id="micro">News Break</p>
            </div>
            <p id="paragraph">In the fall of 2016 there seemed an inevitability: Hillary Clinton would be elected the first woman president, and the Republicans would be left to collect the scattered coalitions of their party. Almost every major poll predicted a Clinton win, most by heavy margins. The Republican party had seemed to be fractured beyond repair, with Paul Ryan and other keystone figures distancing themselves from Trump. Yet, on election night that all changed. A coalition of voters turned on all forms of establishment and elected Trump to be the 45th President of the United States. And if nothing changes, it seems he has a good shot to winning another four years. <br></br><br></br>

One of Trump’s keys to success was taking over the Republican party, then completely discarding everything except that which favored him. Trump used increasingly unsavory rhetorical tactics throughout his primary to the point that at the end, the party didn’t only nominate him, the party was him. Jeb Bush, Chris Christie, Marco Rubio, Ted Cruz and Ben Carson all couldn’t stand up to the relentless bombardment from the Trump camp, falling off one right after the other. On the Democrat’s side Clinton saw this as an opportunity not only to win, but to send the Republican party packing with a wide ideological and policy gap between the shredded elements of the party that would take years to heal. Yet unlike Clinton, Trump was deemed an outsider, and his destruction of the Republican party was seen as merely “shaking things up” by the voters who saw his appeal. Clinton lacked the enthusiasm that Trump’s supporters had for their candidate, and played it too safe when battling a candidate so risky.<br></br><br></br>

These parallels play out today with the presidential race as it stands. The Democrats appear to have chosen another moderate as their candidate, sans any last minute shifts, and Trumpism is as rampant as ever. In a new ABC/Washington Post poll, 53% of Trump’s supporters are “very enthusiastic” about their candidate, while Biden only has 24%. In swing states such as Michigan and Pennsylvania, enthusiasm is what motivates people to vote, and what ultimately decides a winner. In that same poll, Trump trails Biden by only 2 points with them at 47% and 49% national support respectively. In March 2016 Clinton led that poll 50% to 41%. That lead didn’t hold for her at all.<br></br><br></br>

In 2016, each presidential debate gave Clinton a much needed boost in her enthusiasm, showcasing the stark contrast between her and Trump. Yet, those debates also hurt her. Trump used that national stage as a means to attack the establishment he railed so often against, and insisted that the debates, moderators, questions and even microphones were rigged against him. This resonated with his base, increasing their conviction that even if Trump did nothing differently, at least his rhetoric communicated their discontentment with how Washington had been run for the past three presidencies.<br></br><br></br>

For Biden, debates won’t be a plus, but rather a liability. Notorious of gaffs and misspoken embarrassments, Trump is all but certain to rip apart Biden with no thought to decorum of niceties. Unlike Sanders, Biden’s argument is one of character and tradition, rather than policy and ideals. With a lack of bold policy goals, Biden will be left to play a game of moral high ground, a position that Clinton tried to adopt in late October of 2016 and failed miserably. In the end, when people showed up to the ballot box, they didn’t even care what Trump said, they just knew it upset the political norms.<br></br><br></br>

In that same ABC/Washington Post poll, the numbers show that around 15% of Sanders voters plan to support Trump over Biden. Though dwarfed by the 32% of Clinton voters that supported McCain in 2008, this solid chunk of voters clearly dislike Biden and his policy choice so much that they would vote for Trump, the near antithesis of everything Sanders stands for. Trump’s ardent supporters believe that he is making changes and running his administration in a way that goes against the establishment and enrages the media class. On the other hand, Biden’s supporters seek a candidate to return the political landscape to normalcy, and slowly change the injustices caused by a sharp disparity in wealth and power. Those 15% of Sanders supporters wanted the status quo to change, so much so that they’ll vote for the candidate that doesn't even align with their views of the future.<br></br><br></br>

Unless Biden’s campaign is able to pivot to one of broad policy goals and unorthodox perspectives, he will fail to garner the excitement that the past four moderate candidates sorely lacked. Micheal Dukakis, Al Gore, John Kerry and Hillary Clinton all managed to stave off progressive opponents in their primary campaigns, but when it came to the general they all failed miserably. With the Democratic Convention delayed until August there is a lot of time for Biden to make this shift, but until then, the polling gap is sure to get narrower and narrower.</p>
            </div>
            
        </div>


        <div className="col-sm-5">
        <div id="label">
                <Forecast />
                {/* <div className="row story">
                <div className="col">
                    <p id="micro">2020 ELECTION</p>
                    <Link href="/writings/kamala-harris-vp" id="h1"><h3 id="h3"><a>Biden Selects Harris for Vice President </a></h3></Link>
                    <p id="byline">By Staff</p>
                </div>
                <div className="col">
                    <img src="/img/story.png"></img>
                </div>
            </div> */}
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