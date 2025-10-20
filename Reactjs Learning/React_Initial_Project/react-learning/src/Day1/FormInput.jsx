import { useState } from "react"

const FormInput = () => {

    const [userName,setname]=useState('')
    const [newval,setVal]=useState('')
    const chnageValue=(event)=>{
        setname(event.target.value)
    }
    const clickVal=(e)=>{
        e.preventDefault()
        setVal(userName)
    }
  return (
    <form >
         <div>
            <h1 style={{color:"green"}}>Form Concepts</h1>
        <h1>Hello,{newval}</h1>
       Enter: <input type="text" placeholder="Enter input Value"  onChange={chnageValue} />
       <button onClick={clickVal}>Click</button>
    </div>
    </form>
   
  )
}

export default FormInput