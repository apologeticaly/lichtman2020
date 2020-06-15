import React from 'react';
import MiniMap from '../maps/minimap.js';

const Forecast = () => {
    return (
        <div className="section">
            
        <div id="label">
        <p id="micro">FORECAST CHANCES</p>
    </div>
<div className="container">
    <div className="row probability">
        <div className="col">
                <div>
                    <div id="overlay">
                        <a href="/chances">
                        <div className="button">
                            <p>VIEW FULL FORECAST</p>
                        </div>
                        </a>
                    </div>

                    <div id="underlay">
                        <MiniMap />
                    </div>
                </div>
                <div className="row">


                <div className="row-candidate-label-1">
                        <p id="micro">Fmr. VP Joe Biden</p>
                    </div>

                    <div className="row-candidate-2">
                        <img className="candidate" src="../biden.png"></img>
                        <div className="dem-chances">
                            <h1 id="forecast-h1">298</h1>
                        </div>
                    </div>

                    <div className="row-candidate-label">
                    <p id="micro">President Donald Trump</p>
                    </div>

                    <div className="row-candidate-2">
                        <img className="candidate" src="../trump.png"></img>
                        <div className="rep-chances">
                            <h1 id="forecast-h1">240</h1>      
                        </div>
                    </div>

                    <div className="row-update">
                        <p id="micromicro">UPDATED JUN. 14TH 00:30PST</p>
                    </div>
                </div>

                </div>
                


                </div>
    </div>
</div>
);}

export default Forecast;