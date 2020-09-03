import React, { Component } from 'react';


class Welcome extends Component {
    render(){

        const {name, jantina } = this.props
        // return <h2>Welcome {this.props.name} ({this.props.jantina})</h2>
        return <h2>Welcome {name} ({jantina})</h2>
    }
}

export default Welcome