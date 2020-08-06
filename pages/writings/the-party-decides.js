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
                <title>The Party Decides And The Progressives Rethink</title>
                <meta name="title" content="The Party Decides And The Progressives Rethink" />
                {/* Open Graph / Facebook */}
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.lichtman2020.com/the-party-decides/"  />
                <meta property="og:title" content="The Party Decides And The Progressives Rethink" />
                <meta property="og:description" content="Despite their strongest showing to date, progressives have to settle when the party has chosen."  />
                <meta property="og:image" content="http://www.lichtman2020.com/meta/the-party-decides-meta.png"  />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image"  />
                <meta property="twitter:site" content="@lichtman2020"  />
                <meta property="twitter:url" content="https://www.lichtman2020.com/the-party-decides/" />
                <meta property="twitter:title" content="The Party Decides And The Progressives Rethink"  />
                <meta property="twitter:description" content="Despite their strongest showing to date, progressives have to settle when the party has chosen."  />
                <meta property="twitter:image" content="http://www.lichtman2020.com/meta/the-party-decides-meta.png" />
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
                <h1>The Party Decides And The Progressives Rethink</h1>
                <h4 id="h4">Despite their strongest showing, progressives have to settle.</h4>
                <p id="byline">By Staff</p>
            </div>

            <div className="writings">
            <div id="writings-img">
                <img src="/img/headline.png"></img>
                <p id="micro">CNN</p>
            </div>
            <p id="paragraph">Not even a century ago, voters didn’t get to pick their party's nominee. There were no primaries or caucuses, but rather a group of party insiders who would select the nominee at a convention. Mayors, Governors, Senators and Congressmen would all funnel into a convention center and pick the person they saw as fit to be the leader of their party. This nomination process was also where a lot of support was gained or lost for key pieces of legislation that would either end up in the party platform, or be held off until further opportunity arose for it. Some still see this nominating process as more effective in selecting the right person to run for president. If doctors vet doctors, and lawyers vet lawyers, why shouldn’t politicians vet politicians?<br></br><br></br>

Beginning in the 1960’s that process began to change. More states began to devise ways of democratically selecting their delegates to the national convention of their respective parties, and voters became more involved in their own party’s primary. For better or worse, it was now up to the voter to decide who they thought could not only win, but also appeal to a broad swath of Americans. Individuals began to follow the nominating process more closely, with the Democratic convention of 1968 being one of the most watched moments in American political TV history. This also broadened the political ideology of each party, with single-issue voters being courted by the changing platform of each party every four years.<br></br><br></br>

Through what the media would deem “important endorsements” , b-class politicians jumped up into the view of voters, albeit standing in the shadow of the candidate they endorsed. Although it was now voters going to the ballot box, they would still look to what was going on in their own state for guidance on who they thought would be best to nominate. Voters could now drop the piece of paper in, but the party was still deciding.<br></br><br></br>

Yet as with any theory, there are outliers that betray the norm. In 2016 the Republican establishment was so confident in the capabilities of their party leaders to stop Trump, they didn’t even recognize the problem until it had run them over. On the Democrat side things were handled a little differently. No sane individual who wanted a political future even considered running against who all saw as the incumbent. Coming in close second in 2008, Hillary Clinton was all but certain to glide to the nomination in July and on to the White House in November. Bernie Sanders lost that nomination battle, but gained crucial ground in the war for the party.<br></br><br></br>

Come January of 2017 Trump stood on the White House steps as President Obama took his last trip from his old home. The Republican party was reeling, and still is till today. Trump ran the White House for the first two years the same way he ran his campaign: in utter chaos and disdain for tradition, yet somehow it worked. The dream of a party deciding the nominee must be dead, a reality TV star was sitting in the Oval Office. In 2020, the story must be different.<br></br><br></br>

As the Trump Presidency ran its course, the Democratic party had choices to make. They could put their full support behind a candidate as they did last time, or they could be impartial and hope that the voters would pick whoever could beat Trump in 2020. People began their campaigns effectively the night of Clinton’s loss. This campaign would be the cake walk of a lifetime.<br></br><br></br>

And then the Democratic nominating process happened. With an unprecedented coalition arising at the absolute last second, a large chunk of the party coalesced behind one person without a tear cried for the three campaigns sacrificed. And someone spent $800 million dollars to make it happen. As of March 26th 2019, Joe Biden is the nominee.<br></br><br></br>

When Elizabeth Warren dropped out she noted that at the beginning of her campaign she was told there were two wings of the party, the progressive wing and the moderate wing. Bernie Sanders and Joe Biden were the incumbents of both respectively. Again, as of today, that appears to be crystal clear. Sanders spent the better part of three years building the progressive wing of the Democratic party, and digging deeper into his democratic socialist policies that deeply resonated with large parts of the party as a whole. People of all ages and races saw the benefits of the policies he was proposing, and when polled viewed him as their favorite and most likely to beat Trump.<br></br><br></br>

Yet the core of the Democratic base, as with all things politics, is older generations. Younger people and people of color don’t vote at the same rate that older white populations do. So, when confronted with the inevitability of a Sanders’ candidacy, the Party turned to older moderate voters and got the results they needed. Super Tuesday came and went, and with a little bit of manufacturing of consent, the nominating process was over.<br></br><br></br>


And since come December the voters have only two options, the Party has no regrets. One would be very hard pressed to find a younger person of color who is excited to vote for Trump. No matter how much the progressive wing may want to prevail, the core of voters is still moderate and still old. As strong as the progressives appeared at the onset of this campaign, the party stepped in at the 11th hour and proved definitively that the Party most definitely decides.<br></br><br></br>
</p>
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
                    <Link href="/writings/all-over-again" id="h1"><h3 id="h3"><a>How This Race Is Becoming 2016 All Over Again </a></h3></Link>
                    <p id="byline">By Staff</p>
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

export default Biden;