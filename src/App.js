import  Counter from "./Counter";
import  CounterHooks from "./CounterHooks";
import  React, {useState} from "react";

export const ThemeContext = React.createContext();
function App() {
  const [theme,setTheme] = useState('red')
  function changeColor() {
    setTheme(prevTheme=>{
      return prevTheme === 'red' ? 'blue' : 'red'
    })
  }
  return (
    <ThemeContext.Provider value={{backgroundColor: theme}}>
         <CounterHooks initialCount={0}/><br/>
         <Counter initialCount={0}/><br/>
         <button onClick={()=>{changeColor()}}>Toggle button</button>
    </ThemeContext.Provider>
   
  )
}

export default App;
