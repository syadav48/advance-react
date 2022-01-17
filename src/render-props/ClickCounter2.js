import React from 'react'

class ClickCounter2 extends React.Component {
    
    render() {
        const {count, incrementCount} = this.props
        return (
            <button onClick={incrementCount}>
                Click {count} times
            </button>
        )
    }
}

export default ClickCounter2
