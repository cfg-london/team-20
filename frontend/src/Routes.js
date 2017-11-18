import React from 'react'

import App from './App'
import AppTest from './AppTest'


import { 
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'
 

const Routes = props => (
    <Router>
        <Switch>
            <Route path='/admin' component={props => <p>lool</p>} />
            <Route path='/test' component={AppTest} />
            <Route path='/' component={App} />
        </Switch>
    </Router>
)


export default Routes