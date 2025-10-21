import { useEffect, useState } from "react"

const Usestateffect = () => {
    const [inputval,setinputVal]=useState([])

  useEffect(() => {
   
    fetch("https://jsonplaceholder.typicode.com/users").then((e)=>e.json()).then((res)=>setinputVal(res)).catch((re)=>re)
    

  }, [])
  
  return (
    <div>
            <h2 style={{color:'green'}}>Use State & Effect Concept</h2>
{inputval.map((res)=>(
        <p>{res.name}</p>

))}
    </div>
  )
}

export default Usestateffect