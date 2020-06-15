import React, {useEffect, useState } from "react";
import {csv} from 'd3-fetch';
import { scaleQuantile } from 'd3-scale';

import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Annotation

} from "react-simple-maps";

import allStates from './allstates.json';

import usJson from "./us-states.json";

import results from './results.json';


const colorScale = scaleQuantile()
  .domain([1, 6])
  .range([
    "#3981F5",
    "#80b0ff",
    "#c9deff",
    "#ffbaba",
    "#ff7878",
    "#F53939"
  ]);


// const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";
const geoUrl = usJson;

const offsets = {
  VT: [60, -6],
  NH: [34, 2],
  MA: [30, -4],
  RI: [28, 2],
  CT: [35, 10],
  NJ: [34, 1],
  DE: [33, 0],
  MD: [47, 10],
  DC: [49, 21]
};

const customcentroid = {
 AL: [-86.82951667656675, 32.77872381086298],
 AK: [-152.27712983466768, 63.95283374010853],
 AZ: [-111.65907386717012, 34.27954616157869],
 AR: [-92.44397566144278, 34.90007955426431],
 CA: [-119.97542967404276, 37.192328763885534],
 CO: [-105.54838669217943, 39.00033767863601],
 CT: [-72.72852034610304, 41.621585144689455],
 DE: [-75.49635230460956, 38.980881183592345],
 DC: [-77.01628201839391, 38.90471315409664],
 FL: [-81.76549, 28.540520],
 GA: [-83.4360971900023, 32.63743141568397],
 HI: [-157.545996, 19.933758],
 ID: [-114.750574, 43.959347],
 IL: [-89.19410712604817, 40.040493903418266],
 IN: [-86.27620995923026, 39.89850005579289],
 IA: [-93.49856315333705, 42.084955175632324],
 KS: [-98.38801817699817, 38.5153946839818],
 KY: [-84.70263036406949, 37.53563146192817],
 LA: [-92.542049, 31.3321125],
 ME: [-69.23745010059875, 45.35712179192128],
 ME_1: [-70.1012591351326, 43.877122106102206],
 ME_2: [-69.12696552095228, 45.54057403602999],
 MD: [-76.77248104380304, 39.0464527987855],
 MA: [-71.83986658888549, 42.26927299787255],
 MI: [-84.689933, 43.348175],
 MN: [-94.30945418650823, 46.29282429572769],
 MS: [-89.66575424756269, 32.7360681087157],
 MO: [-92.486770, 38.244718],
 MT: [-109.63568539954, 47.06178826867986],
 NE: [-99.79483485346351, 41.5378041397679],
 NE_1: [-96.82882143041431, 41.37536386332788],
 NE_2: [-96.15977397186823, 41.22932319847171],
 NE_3: [-100.21667394653097, 41.55541868818257],
 NV: [-116.62974453949286, 39.33083932978382],
 NH: [-71.5816932180075, 43.6759773088042],
 NJ: [-74.66391522958729, 40.18843033082872],
 NM: [-106.11310722777743, 34.411199647861686],
 NY: [-75.4969949200502, 42.94463340557543],
 NC: [-79.33354383429777, 35.55324868864029],
 ND: [-100.47082959311987, 47.48654392917769],
 OH: [-82.7925623346822, 40.29219131824739],
 OK: [-97.4903873276241, 35.59899723831486],
 OR: [-120.56104246014782, 43.93655861273591],
 PA: [-77.79903989892512, 40.88741776542494],
 RI: [-71.57088501907754, 41.69113022896118],
 SC: [-80.88878737606157, 33.90240176589465],
 SD: [-100.23018062342638, 44.46590455628661],
 TN: [-86.35269070473663, 35.85900065716897],
 TX: [-99.33229202125209, 31.476487555084656],
 UT: [-111.66900514114417, 39.31153754242605],
 VT: [-72.66290228155916, 44.06902265000701],
 VA:[-78.80080472616575, 37.52453990366745],
 WA: [-120.45274947933596, 47.38828678201149],
 WV: [-80.62684531215886, 38.637070193019795],
 WI: [-89.9965947011777, 44.622773931895686],
 WY: [-107.55184827380538, 43.00034082787584],
}

const Map = ({ setTooltipContent }) => {
	const data = results;
    
      return (
        <ComposableMap data-tip="" projection="geoAlbersUsa">
          <Geographies geography={geoUrl}>
            {({ geographies }) => (
              <>
                {geographies.map(geo => {
                    const cur = data.find(s => s.id === geo.id);
                    return (
                      <Geography
                        key={geo.rsmKey}
                        stroke="#000000"
                        strokeWidth="1.25px"
                        geography={geo}
                        onMouseEnter={() => {
                            if (cur.winner === 'D') {
                              setTooltipContent(` <div><p style="margin-bottom: 0.25rem;" id="state-tooltip">${cur.name}</p> Democrats: ${cur.democrat} <br> Republicans: ${cur.republican} <br> Third Party: ${cur.third} <br> <p style="margin-top: 0.25rem;" id="state-tooltip-bottom-d">${cur.margin}</p></div>`);
                            }

                            else {
                              setTooltipContent(` <div><p style="margin-bottom: 0.25rem;" id="state-tooltip">${cur.name}</p> Republicans: ${cur.republican} <br> Democrats: ${cur.democrat} <br> Third Party: ${cur.third} <br> <p style="margin-top: 0.25rem;" id="state-tooltip-bottom-r">${cur.margin}</p></div>`);
                            }
                        }}
                        onMouseLeave={() => {
                            setTooltipContent("");
                        }}
                        fill={colorScale(cur ? cur.party : "#fff")}
                      />
                    );
                
                })}
                {geographies.map(geo => {
                  const mycentroid = (customcentroid[geo.id]);
                  const cur = allStates.find(s => s.id === geo.id);
                  return (
                    <g key={geo.rsmKey + "-name"}>
                      {cur &&
                        mycentroid[0] > -160 &&
                        mycentroid[0] < -67 &&
                        (Object.keys(offsets).indexOf(cur.id) === -1 ? (
                          <Marker coordinates={mycentroid}>
                            <text y="3" fontWeight={600} fontSize={14} textAnchor="middle">
                              {cur.id}
                            </text>
                          </Marker>
                        ) : (
                          <Annotation
                            subject={mycentroid}
                            dx={offsets[cur.id][0]-10}
                            dy={offsets[cur.id][1]}
                          >
                            <text x={4} fontSize={14} fontWeight={600} alignmentBaseline="middle">
                              {cur.id}
                            </text>
                          </Annotation>
                        ))}
                    </g>
                  );
                })}
              </>
            )}
          </Geographies>
        </ComposableMap>
      );
};


export default Map;