function generatePattern() {
    let repeatLength = Math.floor(Math.random() * 15);
    let generatedPattern = [];
    for (let i = 0; i < repeatLength; i++){
        generatedPattern.push(Math.floor(Math.random()*repeatLength));
    }
    return generatedPattern;
}