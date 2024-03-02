function GenerateBeats(noOfBeatsPerMeasure){
            // generate array of beat type in measure
            beatArray = [];
            let beatCounter = 0.0
            while (beatCounter < noOfBeatsPerMeasure){
                let randomNumber = Math.floor(Math.random() * 10)
                if (randomNumber > 9){
                    beatCounter += 3.0
                }
                else{
                    let notetype = (Math.random() < 0.2 && randomNumber > 1) ? "t" : "n";
                    beatArray.push(randomNumber.toString + notetype)
                    beatCounter += 4 / exp(2, randomNumber)
                } 
            }
    
            if (beatCounter > numberOfBars){ // overflow
                lastBeat =  beatArray[-1]
                beatArray.pop()
                beatArray.push( noOfBeatsPerMeasure- beatCounter - lastBeat ) 
            }
    
            return beatArray
        
}