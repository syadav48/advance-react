import React, { Component } from 'react'

 class HoverCounter2 extends Component {
  
    render() {
        const {count, incrementCount} = this.props
        return (
            <button onMouseOver={incrementCount}>
                Hover {count} times
            </button>
        )
    }
}

export default HoverCounter2
