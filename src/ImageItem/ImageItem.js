import React, { Component } from 'react'



export default class ImageItem extends Component {
    render() {
        return (
            <li className="creature">
                <p className="animalName">{this.props.hornedCreatures.keyword}</p>
                <img src={this.props.hornedCreatures.url} alt={this.props.hornedCreatures.keyword}/>
            </li>
        )
    }
}
