const wordSearch = (letters, word) => { 
    if (letters.length === 0) {return undefined}
    const verticalJoin = letters[0].map((ls, index) => {
        let verticalWord = ""
        for (let i = 0; i < letters.length; i++) {
            verticalWord += letters[i][index]
        } 
        return verticalWord;
    });
    for (let wordVertical of verticalJoin) {
        if (wordVertical.includes(word)) 
        return true
    }
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (let wordHorizontal of horizontalJoin) {
        if (wordHorizontal.includes(word)) 
        return true
    }
    //create new words using the index of the first array
    return false
}



module.exports = wordSearch

// console.log(
//     wordSearch(
//         [], "ho"
//     )
// )