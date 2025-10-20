import { useEffect, useState } from "react"

const Usestateffect = () => {
    const [inputval,setinputVal]=useState('InitialValue')

    useEffect(()=>{
 if(inputval==='InitialValue'){
    setinputVal('Good')

   }else{
    setinputVal('Not Good')
   }

    },[inputval])
  
  return (
    <div>
            <h2 style={{color:'green'}}>Use State & Effect Concept</h2>

        <h2>{inputval}</h2>
    </div>
  )
}

export default Usestateffect