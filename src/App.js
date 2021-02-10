import './App.css';
import React, { Component } from 'react';
import hornedCreatures from './data';
import HeaderComponent from './Header/headerComponent';
import ImageItem from './ImageItem/ImageItem.js';
import ImageList from './ImageList/ImageList.js';

let uniqueKeywords = [];
hornedCreatures.map(creature => {
  if (!uniqueKeywords.includes(creature.keyword)) uniqueKeywords.push (creature.keyword)});
let uniqueHorns = [];
hornedCreatures.map(creature => {
  if (!uniqueHorns.includes(creature.horns)) uniqueHorns.push (creature.horns)});

console.log(uniqueKeywords)


export default class App extends Component {
  state = {
    url: '',
    title: '',
    description: '',
    keyword: '',
    horns: 0,
  }

  

handleHornChange = (e) => {this.setState({horns: e.target.value})}
  render() {
    const filteredHornedCreatures = hornedCreatures.filter((hornedCreature) => {
      if (!this.state.horns && !this.state.keyword) return true;
      if (hornedCreature.horns === Number(this.state.horns) || hornedCreature.keyword === this.state.keyword) return true;
      return false;
    });
    
    
    const creatureNodes = filteredHornedCreatures.map(hornedCreatures =>
      <ImageItem
        key={hornedCreatures.name}
        hornedCreatures={hornedCreatures} />)

    return ( 
    <>  
      <HeaderComponent />
        <form>
            number of horns:
            <select value={this.state.horns}
            onChange={(e) => {this.setState({horns: e.target.value})}}>
              {uniqueHorns.map(hornedCreature =>
            <option value={hornedCreature}>{hornedCreature}</option>)}
            </select>
            what type of creature:
            <select value={this.state.keyword}
            onChange={(e) => {this.setState({keyword: e.target.value})}}>
              { uniqueKeywords.map(hornedCreature => 
            <option value={hornedCreature}>{hornedCreature}</option>)}
            </select>
        </form>
      <ImageList creatures={creatureNodes}/>

    </>
    )
  }
}
