function generatePattern(riffLength) {
    let generatedPatterArray = [0];
    let newNumber = 0;
    for (let i = 0; i < riffLength; i++){
        let randomPattern = (Math.floor(Math.random()* 10) > 1) ? 1 : 0 ; // 10% chance of being random (0)
        generatedPatterArray.push(randomPattern * (Math.floor(Math.random()* newNumber + 2)));
        newNumber = Math.max(generatedPatterArray.slice(-1), newNumber);
    }
    return generatedPatterArray.slice(1,);
}


console.log(generatePattern(10));