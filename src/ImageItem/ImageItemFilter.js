


// a function that takes in an array, keyword, and number(horns) and returns a filtered array 
export function filteredHornedCreaturesFunc(arr, keyword, horns) { return arr.filter((hornedCreature) => {
        if (!horns && !keyword) return true;
        if (hornedCreature.horns === Number(horns) && hornedCreature.keyword === keyword) return true;
        return false;
    })

};