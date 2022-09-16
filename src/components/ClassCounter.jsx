import React from 'react';


class ClassCounter extends React.Component {
    constructor( props ){
        super( props )
        this.state = {
            count: 0,
        }
        this.increment = this.increment.bind(this)
        
    }
    
    increment() {
        console.log('+ :>> ', this);
        // this.setCount({count: this.state.count + 1 })
        console.log('+ :>> ');
    }
    
    decrement() {
        this.setCount({count: this.state.count - 1 })
        console.log('- :>> ');
    }
    render() {
        return (
            <div>
                <h1>{ this.state.count }</h1>
                <button onClick = { this.increment }>increment</button>
                <button onClick = { this.decrement }>decrement</button>
            </div>
        )
    }

}

export default ClassCounter
