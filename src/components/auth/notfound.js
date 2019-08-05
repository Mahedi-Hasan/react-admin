import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class Notfound extends Component {
    render() {
        return (
            <div>
                <p className="red-text">Sorrry not found...</p>
                {/* <Link to={'/dashboard'} className="dark-grey-text font-weight-bold ml-1">Dashboard</Link> */}
                
            </div>
        )
    }
}
export default Notfound;