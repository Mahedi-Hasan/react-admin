import React, { Component } from 'react'
import Navbar from '../navbar/navbar';
import User from '../users/user';
export default class Layout extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <User title="My Name is ..."/>
            </div>
        )
    }
}
