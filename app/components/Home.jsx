import React, { Component } from 'react'
import { Link } from 'react-router'

class Home extends Component {
    render() {
        return (
            <div>
                <p>Home Component</p>
                <Link to={'/react-redux-ghpages-boilerplate/about'}>About</Link>
            </div>
        )
    }
}

export default Home