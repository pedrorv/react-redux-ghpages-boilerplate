import React, { Component } from 'react'
import { Link } from 'react-router'

class About extends Component {
    render() {
        return (
            <div>
                <p>About Component</p>
                <Link to={'/react-redux-ghpages-boilerplate/'}>Home</Link>
            </div>
        )
    }
}

export default About