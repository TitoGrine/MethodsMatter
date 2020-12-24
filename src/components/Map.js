import React from "react";
import USAMap from "react-usa-map";
import { parseFile } from "../util/util";

function Map() {
  /* mandatory */
  const mapHandler = (event) => {
    alert(event.target.dataset.name);
  };

  /* optional customization of filling per state and calling custom callbacks per state */
  const statesCustomConfig = () => {
    return {
      NJ: {
        fill: "#1405BD",
        clickHandler: (event) => parseFile(2016),
      },
      NY: {
        fill: "#ff0803",
      },
    };
  };

  return (
    <div className="map">
      <USAMap customize={statesCustomConfig()} onClick={mapHandler} />
    </div>
  );
}

export default Map;
