import './App.css';
import React, { Component } from 'react';
import hornedCreatures from './data';
import HeaderComponent from './Header/headerComponent';
import ImageItem from './ImageItem/ImageItem.js';
import ImageList from './ImageList/ImageList.js';
import DropDown from './DropDown/DropDown.js';
import { uniqueKeywords, uniqueHorns} from './uniqueArraysUtils.js';
import {filteredHornedCreaturesFunc} from './ImageItem/ImageItemFilter.js';

export default class App extends Component {
  state = {
    url: '',
    title: '',
    description: '',
    keyword: '',
    horns: 0,
  }

  // handling the change events and setting the state based on the users selection
handleHornChange = (e) => {this.setState({horns: e.target.value})}
handleKeywordChange = (e) => {this.setState({keyword: e.target.value})}

  render() {
    const {
      keyword,
      horns
    } = this.state
//setting filteredHornedCreatures to the value of the filteredHornedCreaturesFunc which takes in the dataArr, the user selected state of keyword and horns
    const filteredHornedCreatures = filteredHornedCreaturesFunc(hornedCreatures, keyword, horns)

//setting creatureNodes = to the new filtered Image items.
    const creatureNodes = filteredHornedCreatures.map(hornedCreatures =>
      <ImageItem
        key={hornedCreatures.name}
        hornedCreatures={hornedCreatures} />)


    return ( 
      //returning the created  components
    <>  
      <HeaderComponent />
        <DropDown 
        currentValue={this.state.horns}
        handleChange={this.handleHornChange}
        options={uniqueHorns} />
        <DropDown 
        currentValue={this.state.keyword}
        handleChange={this.handleKeywordChange}
        options={uniqueKeywords} />
      <ImageList creatures={creatureNodes}/>
    </>
    )
  }
}
