import React from 'react'
import ErrorBoundary from './error-boundary/Error-Boundary'
import Hero from './error-boundary/Hero'


function Main() {
    return (
        <div>
            <ErrorBoundary>
            <Hero heroName='BAtMan'/>
            </ErrorBoundary>
            <ErrorBoundary>
            <Hero heroName='SuperMAn'/>
            </ErrorBoundary>
            <ErrorBoundary>
            <Hero heroName='Joker' />
            </ErrorBoundary> 
        </div>
    )
}

export default Main
