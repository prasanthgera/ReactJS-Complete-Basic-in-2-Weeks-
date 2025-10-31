import React from 'react'
import { useSelector } from 'react-redux';

const Display = () => {
      const count = useSelector((state) => state.counter.value);   

  return (
    <div>display{count}</div>
  )
}

export default Display