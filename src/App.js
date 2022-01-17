import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
//import Dashboard from './code-splitting/components/Dashboard'
import Home from './code-splitting/components/Home'
//import Profile from './code-splitting/components/Profile'

const LazyProfile = React.lazy(() => import('./code-splitting/components/Profile'))
const LazyDashboard = React.lazy(() => import('./code-splitting/components/Dashboard'))


function App() {
    return (
        <Router>
        <div>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/profile'>Profile</Link>
                </li>
                <li>
                    <Link to='/dashboard'>DashBoard</Link>
                </li>
            </ul>
            
            <hr />
            
            <React.Suspense fallback='Loading...'>
            <Route exact path='/'>
                 <Home />
            </Route>
            <Route path='/profile'>
                 <LazyProfile /> 
            </Route>
            <Route path='/dashboard'> 
                <LazyDashboard />
            </Route>
            </React.Suspense>
            
        </div>
        </Router>
    )
}

export default App
