import React from 'react'

import App from './App'
import AppTest from './AppTest'
import AppTest2 from './AppTest2'
import Admin from './Admin'

import { 
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'
 

const Routes = props => (
    <Router>
        <Switch>
            <Route path='/admin' component={Admin} />
            <Route path='/test' component={AppTest} />
            <Route path='/test2' component={AppTest2} />
            <Route path='/' component={App} />
        </Switch>
    </Router>
)


export default Routes