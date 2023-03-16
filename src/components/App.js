import React, {useEffect,useState} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {

  const [sushiList,setSushiList]=useState([])
  const [beltPos,setBeltPos]=useState(0)
  const [money,setMoney]=useState(100)
  const numberOfSushis=4;

  useEffect(()=>{
    fetch(API)
      .then((r)=>r.json())
      .then((json)=>setSushiList(json))
  },[])

  function advanceBelt(){
    setBeltPos((beltPos+numberOfSushis)%100)
  }

  function handleEatSushi(selectedSushi){
   
   if (money>=selectedSushi.price)
   
    {setSushiList(sushiList.map(sushi=>sushi.id===selectedSushi.id?{...sushi,eaten:true}:sushi))
    setMoney(prev=>prev-selectedSushi.price)
  }
  }


  return (
    <div className="app">
      <SushiContainer sushiList={sushiList.slice(beltPos,beltPos+numberOfSushis)} advanceBelt={advanceBelt} handleEatSushi={handleEatSushi}/>
      <Table plates={sushiList.filter((sushi)=>sushi.eaten===true)} money={money}/>
    </div>
  );
}

export default App;
