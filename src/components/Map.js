import React from "react";
import USAMap from "react-usa-map";
import { parseFile } from "./util";

function Map() {
  /* mandatory */
  const mapHandler = (event) => {
    alert(event.target.dataset.name);
  };

  /* optional customization of filling per state and calling custom callbacks per state */
  const statesCustomConfig = () => {
    return {
      NJ: {
        fill: "navy",
        clickHandler: (event) => parseFile(1976),
      },
      NY: {
        fill: "#CC0000",
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
