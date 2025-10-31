import React from 'react'
import { useState } from 'react'

const ChildComponent = () => {
    const [datas,setDatas]=useState('')
   const handleData=()=>{
    setDatas('Gera Prasanth')
    }
  return (
    <div>ChildComponent :{datas}
    <button  onClick={handleData}>Change</button>
            <hr />

    </div>
  )
}

export default ChildComponent