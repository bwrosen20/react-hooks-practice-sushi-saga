import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer({sushiList, advanceBelt, handleEatSushi}) {



  return (
   <div className="belt">
      {sushiList.map((sushi)=>(
        <Sushi key={sushi.id} sushi={sushi} setEaten={handleEatSushi}/>))}
      <MoreButton advanceBelt={advanceBelt}/>
    </div>
  );
}

export default SushiContainer;
