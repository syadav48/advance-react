import Plot from 'react-plotlyjs'
import React from 'react'

function Dashboard() {
    return (
        <div>
            <h1>Dashboard</h1>
            <Plot 
            data={[
                {
                    x: [1,2,3],
                    y: [2,6,3], 
                    type: 'scatter',
                    mode:'lines + marker',
                    marker: {color: 'red'}
                },
                { type: 'bar', x: [1, 2, 3], y: [2, 5, 3] }
            ]}
            layout={{ width: 320, height: 240, title: 'A fancy plot'}}
            />
        </div>
    )
}

export default Dashboard
