

class MusicGenerator {

    constructor(bpm, noOfBeatsPerMeasure){
        this.bpm = bpm;
        this.numberOfBars = noOfBeatsPerMeasure;
        this.start = true;
        this.savedRiffs = {}; // {pattern number : [sequence of (MusicNote notes, int beats)]}
        this.keyScale = ["C", "major"]; // note, scale type
        this.pattern = (Math.floor(Math.random() * 20) < 1)? none: generatePattern(); // none means generate randomly
        this.patternTracker = 0; // index for pattern
        this.octave = 4 // Octave of Current Riff
        this.lastTone = 0 // Tone played last in the scale
    }   
    /* ----------------------------------
        generate the next bar/ 'riff'
    ----------------------------------*/
    nextBar(patternIndex){ 

        if (patternIndex==0 || this.pattern == none ){ // generate random bar
            return this.generateBar();
        }
        if ( len(this.pattern) < patternIndex - 1 ){
            let newBar = this.generateBar();
            this.pattern.push(newBar);
            return newBar;
        } 
        // retrieve saved pattern
        return this.savedRiffs[patternIndex -2];

    }

    stopMusic(){
        this.start = false;
    }

    generateBar(previousNote){ // previousNote = (previousTone, previousOctave)
        notesArray = [];
        beatsArray = GenerateBeats(this.numberOfBars);
        // generate array of next notes
        let newBar = [];
        for (let i=0; i < len(beatsArray); i++){
            let tempChord = [];
            // generate chords 80%
            let noteAmt = (Math.floor(Math.random() * 20) < 16)? 1 : Math.floor(Math.random() * 3);
            for (let i = 0; i < noteAmt; i++){
                // [direction, interval] to move note ( change octave ?)
                // TODO: Create Chords
                
            }

                    
        }
        // return generated notes [(note, beat)]
        return [([58, 56], "1m")]
        //TODO: map time in seconds to Tone.JS beats
    }

}
s