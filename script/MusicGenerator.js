

class MusicGenerator {

    constructor(bpm, noOfBeatsPerMeasure){
        this.bpm = bpm;
        this.numberOfBars = noOfBeatsPerMeasure;
        this.start = true;
        this.savedRiffs = {}; // {pattern number : [sequence of (notes, beats)]}
        this.keyScale = ["C", "major"]; // note, scale type
        this.pattern = (Math.floor(Math.random() * 20) < 1)? none: generatePattern(); // none means generate randomly
        this.patternTracker = 0;
    }   
    /* ----------------------------------
        generate the next bar/ 'riff'
    ----------------------------------*/
    nextBar(patternIndex){ 

        if (patternIndex==0){ // generate random bar
            return this.generateBar();
        }
        if (this.pattern == none || len(this.pattern) < patternIndex ){
            let newBar = this.generateBar();
            this.pattern[patternIndex] = newBar;
            return newBar;
        } 
        // retrieve saved pattern
        return this.pattern[patternIndex];

    }

    stopMusic(){=
        this.start = false;
    }

    generateBar(){
        notesArray = [];
        beatsArray = GenerateBeats(this.numberOfBars);
        // generate array of next notes
        let newBar = [];
        for (let i=0; i < len(beatsArray); i++){
            let tempChord = [];
            // generate chords 80%
            let noteAmt = (Math.floor(Math.random() * 20) < 16)? 1 : Math.floor(Math.random() * 3);
            for (let i = 0; i < noteAmt; i++){
                // [direction, interval] to move note
                // TODO: Create Chords
                
            }

                    
        }
        // return generated notes [(note, beat)]
        return [([58, 56], "1m")]
        //TODO: map time in seconds to Tone.JS beats
    }

}
s