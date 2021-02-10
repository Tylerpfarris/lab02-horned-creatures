import React, { Component } from 'react'

export default class FormComponent extends Component {
    render() {
        const creatureKeywords = this.props.hornedCreatures.map(hornedCreature => 
            <option value={hornedCreature.keyword}>{hornedCreature.keyword}</option>
        )
        return (
            <select
            onChange={(e) => {this.setState({keyword: e.target.value})}}>{creatureKeywords}</select>
        )   
    }
}
