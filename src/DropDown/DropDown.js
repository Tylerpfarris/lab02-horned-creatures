import React, { Component } from 'react'

export default class DropDown extends Component {
    render() {
        return (
            <select
            value={this.props.currentValue}
            onChange={this.props.handleChange}>
                {this.props.options.map(
                    hornedCreature => 
                    <option value={hornedCreature}> {hornedCreature} </option>)}</select>
        )   
    }
}
