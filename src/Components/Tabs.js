import React, { useState } from "react";
import {Button} from 'react-bootstrap'
function Tabs() {
const [tab,setTab]=useState(1);

const HandleClick =(value)=>{
setTab(value);
}

  return (
    <div>
      <h1>tabs and navs</h1>
      {tab > 1 ? <button>hiu</button> : null}
        <Button onClick={() => HandleClick(1)} className={tab === `tab1` ? `btn btn-danger` : ``}>page1</Button>
        <Button onClick={() => HandleClick(2)} className={tab === `tab2` ? `btn btn-danger` : ``}>page2</Button>
        <Button onClick={() => HandleClick(3)} className={tab === `tab3` ? `btn btn-danger` : ``}>{tab === 3 ? "submit":  "next"}</Button>

    {tab === 'tab1' &&  
    <div>
            <h1>PAGE 1
            </h1>
    </div> }
    {tab === 'tab2' &&
     <div>
    <h1>PAGE 2</h1>
    </div> }
    {tab === 'tab3'  && 
    <div>  
    <h1>PAGE 3</h1>

    </div> }


    </div>
  );
}

export default Tabs;