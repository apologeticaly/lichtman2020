import React from 'react';
import Link from 'next/link';

function MiniLichtman () {
    return(
<div className="section">
        <div id="label">
            <p id="micro">13 KEYS PREDICTION</p>
        </div>
        <div className="container">
            <div className="row probability">
                    <div className="col-md-5 p-0">
                        <div className="row-candidate-label-1">
                            <p id="micro">Democratic Candidate</p>
                        </div>

                        <div className="row-candidate-2">
                            <img className="candidate" src="./img/dnc.svg"></img>
                            <div className="lichtman-mini">
                                <Link href="/keys"><h1 id="h1">6 of 13</h1></Link>
                            </div>
                        </div>

                        <div className="row-candidate-label">
                            <p id="micro">Republican Candidate</p>
                        </div>

                        <div className="row-candidate-2">
                            <img className="candidate" src="./img/gop.svg"></img>
                            <div className="lichtman-mini">
                            <Link href="/keys"><h1 id="h1">7 of 13</h1></Link>   
                            </div>
                        </div>
                        <div className="row-update">
                    <p id="micromicro">UPDATED AUG. 6TH 10:00PST</p>
                </div>
                </div>

                <div className="col-md-7 lichtman">
                    <p id="description">In his book, The Keys to the White House, Professor Allan Lichtman came up with 13 ‘keys’ that would predict how the American people pick their next president. The model has predicted every election correctly since its inception.</p>
                    <a href="/keys">
                        <div className="button">
                            <p>VIEW THE 13 KEYS</p>
                        </div>
                    </a>
                </div>

            </div>
        </div>
    </div>
    );
    }
export default MiniLichtman;