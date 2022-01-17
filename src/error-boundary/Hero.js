import React from 'react'

function Hero({heroName}) {
    if(heroName === 'Joker'){
        throw new Error('Not A hero')
    }
    return (
        <div>
            {heroName}
        </div>
    )
}

export default Hero
// what we want to achieve is that if a prticaular components throes an error only that componet should fallback into
// the UI and the rests are unaffected