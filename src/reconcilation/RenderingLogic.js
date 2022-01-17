import React, { useState } from 'react'

function RenderingLogic() {
    const [items, setItems] = useState([
       {name: 'AAA', id: 1},
       {name: 'BBB', id: 2}, 
       {name: 'CCC', id: 3} 
    ])
    return (
        <div>
            <ul>
                {items.map((item) => {
                  return  <li key={item.id}>{item.name}</li>
                })}
            </ul>
            <button onClick={() => setItems([{name: 'DDD'}, ...items])}>Add Items</button>
        </div>
    )
}

export default RenderingLogic
// intially we were not provided any key value to every element, so every element rendered.
// after we provided key value to every element then only new value will be rendered.
// this is the concept of reconcilation