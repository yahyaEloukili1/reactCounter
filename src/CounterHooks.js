import React,{useState,useContext} from 'react'
import { ThemeContext } from "./App";
export default function CounterHooks(props) {
    const {initialCount} = props
    const [count,setCount] = useState(initialCount)
    const style = useContext(ThemeContext)
  const add = (amount)=>{
    setCount(prevCount=> prevCount + amount)
   
  }
    return (
        <>
            <button style={style} onClick={()=>add(-1)}>-</button>
            <span>{count}</span>
            <button style={style}  onClick={()=>add(+1)}>+</button>
         </>
    )
}
