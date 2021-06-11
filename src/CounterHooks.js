import React,{useState} from 'react'

export default function CounterHooks(props) {
    const {initialCount} = props
    const [count,setCount] = useState(initialCount)
  const add =(amount)=>{
    setCount(prevCount=> prevCount + amount)
   
  }
    return (
        <>
            <button onClick={()=>add(-1)}>-</button>
            <span>{count}</span>
            <button  onClick={()=>add(+1)}>+</button>
         </>
    )
}
