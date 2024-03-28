//using class we must import 2 functions
import React, { Component } from 'react'

class Hope extends Component {
    render(){
        return <h1>Hope {this.props.name} a.k.a {this.props.heroName} is fine</h1>
    }
}

export default Hope;