import React, { useState } from "react";
import ReactTooltip from "react-tooltip";
import Map from "./map.js";


function RenderMap() {
  const [content, setContent] = useState("");
    return (
      <div>
        <div id="label">
          <p id="micro">FORECASTED WINS BY STATE (hover for more info)</p>
        </div>
        <Map setTooltipContent={setContent} />
        <ReactTooltip className="tooltip" border={true} borderColor={'#222222'} textColor={'#222222'} backgroundColor={'#EDEDED'} arrowColor={'#EDEDED'} type={'success'} html={true} effect={'float'} multiline={true}>{content}</ReactTooltip>

        {/* <div className="row-update">
          <p id="micromicro">UPDATED MAR. 11TH 15:03PST</p>
        </div> */}
      </div>
    );
}


export default RenderMap;