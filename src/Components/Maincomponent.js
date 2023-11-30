import React from 'react'
import './GlobalVarisbles';

function Maincomponent() {
  return (
    <div style={{border:"solid" ,borderColor:"black", borderWidth:"2px", margin:"5px" ,padding:"30px", marginTop:"20%", marginLeft:"2px" , alignContent:"center",alignItems:"center" }}> 
        {global.appname}
      <button >click me</button>
    </div>
  )
}

export default Maincomponent
