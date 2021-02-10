import React, { Component } from 'react'


export default class ImageList extends Component {
    render() {
        return (
            <ul>
                {this.props.creatures}
            </ul>
        )
    }
}
