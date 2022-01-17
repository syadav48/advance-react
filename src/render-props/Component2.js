import React from 'react'
import ClickCounter2 from './ClickCounter2'
import Counter from './Counter'
import HoverCounter2 from './HoverCounter2.'


function Component2() {
    return (
        <div>
            <Counter render={(count, incrementCount) => (
                <ClickCounter2 count={count} incrementCount={incrementCount} />
            )}/>
            <Counter render={(count, incrementCount) => (
                <HoverCounter2 count={count} incrementCount={incrementCount} />
            )}/>


           { /* <ClickCounter2 />
            <HoverCounter2 />
           <User render={(isLoggedIn) => isLoggedIn ? 'Suryoday' : 'Guest'}/> */}
        </div>
    )
}

export default Component2
