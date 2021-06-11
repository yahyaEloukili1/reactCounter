import React, { Component } from 'react'

export default class Counter extends Component {

    changeCount(amount){
        this.setState(prevState=>{
            return {count : prevState.count + amount}
        })
        this.setState(prevState=>{
            return {count : prevState.count + amount}
        })
       
    }
    render() {
        return (
            <>
                <button onClick={()=>this.changeCount(-1)}>-</button>
                <span>{this.state.count}</span>
                <button onClick={()=>this.changeCount(+1)}>+</button>
           </>
        )
    }
}
