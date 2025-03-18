import React, { useState } from 'react'

function useCounter(initialValue = 1)  {
      const [data, setData] = useState(initialValue);

      const increment = () => setData((prev)=>prev+1); 
      const decrement = () => setData((prev)=>prev-1); 
      const reset = () => setData(initialValue); 

      return { data, increment , decrement, reset }
}

const CustomHook = () => {
  const {data, increment , decrement, reset } = useCounter(5);
  return (
    <div>
        <p>data : {data}</p>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={reset}>reset</button>
    </div>
  )
}

export default CustomHook;