import React, { useEffect, useState } from 'react'

const Functional = () => {
    const [useStates,setusestate]=useState('Initial Functional Value');
    const dd  =()=>{
      useStates==='Initial Functional Value' ? setusestate('Update Initial Functional Value'):''
    }
    const [sec,setSec]=useState(0)
    const [min,setmin]=useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setSec((prevSec) => {
        if (prevSec === 10) {
          setmin((prevMin) => prevMin  +1 );
          return 0;
        } else {
          return prevSec + 1;
        }
      });
    }, 1000);

    return () => timer
  }, []);
  return (

 

      <div>
          <hr />
          functional
          <h2>
              {useStates}
          </h2>
          <h3>Min={min} : Sec={sec}</h3>
          <button onClick={dd}>update</button>

      </div>
  )
}

export default Functional