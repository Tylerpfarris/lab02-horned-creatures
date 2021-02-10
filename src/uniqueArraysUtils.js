import hornedCreatures from './data.js';

//creating unique arrays 

export let uniqueKeywords = [];
//mapping over the data arr
hornedCreatures.map(creature => {
    //if the new array doesnt include the creature keyword push it onto the array. if it does skip over it.
  if (!uniqueKeywords.includes(creature.keyword)) uniqueKeywords.push (creature.keyword)});

export let uniqueHorns = [];
hornedCreatures.map(creature => {
  if (!uniqueHorns.includes(creature.horns)) uniqueHorns.push (creature.horns)});