let word;

const words = ["Absence", "Acceptable", "Accidentally", "Accommodate", "Acquire", "Acknowledgment", "Acquaintance",
    "Across", "Address", "Advice", "Affect", "Aggressive", "Alcohol", "Allotted", "Altar", "Ambiguous",
    "Ambition", "Amicable", "Analyze", "Annihilate", "Apparent", "Appearance", "Argument", "Arithmetic",
    "Arrangement", "Assassination", "Assessment", "Assistance", "Association", "Asthma", "Attendance",
    "Audience", "Auxiliary", "Awkward", "Balloon", "Beautiful", "Beginning", "Believable", "Benefited",
    "Bizarre", "Boundaries", "Brethren", "Bureau", "Business", "Calendar", "Camouflage", "Cancellation",
    "Cemetery", "Changeable", "Chaos", "Character", "Chief", "Circumstance", "Clergy", "Collaborate",
    "Colleague", "Column", "Commitment", "Committee", "Comparable", "Compel", "Competence", "Completely",
    "Concede", "Conceivable", "Conscience", "Conscious", "Consequence", "Controversy", "Correspondence",
    "Courageous", "Criticism", "Dilemma", "Discipline", "Disastrous", "Discrepancy", "Dissipate",
    "Distinct", "Dominance", "Drunkenness", "Embarrass", "Environment", "Equipment", "Exaggerate",
    "Excellence", "Existence", "Experience", "Explicit", "Facade", "Fascinate", "Feasible", "February",
    "Fiery", "Fluorescent", "Foreign", "Forfeit", "Fragrance", "Fulfill", "Gauge", "Genius", "Government",
    "Grammar", "Grateful", "Guarantee", "Guidance", "Harass", "Height", "Heroes", "Hindrance", "Hindsight",
    "Hypocrisy", "Hygiene", "Ideology", "Illusion", "Imaginary", "Immediately", "Immense", "Impatient",
    "Incredible", "Independence", "Indispensable", "Innocence", "Intelligence", "Intense", "Interrupt",
    "Intimidate", "Judgment", "Juxtapose", "Kernel", "Knowledge", "Laboratory", "Leisure", "License",
    "Lightening", "Likelihood", "Lose", "Luscious", "Luxurious", "Maintenance", "Maneuver", "Manufacture",
    "Marginal", "Marvelous", "Mathematics", "Medieval", "Memorize", "Millennium", "Miniature",
    "Mischievous", "Misfortune", "Misspell", "Mortgage", "Narrative", "Necessary", "Negligence",
    "Neighbor", "Noticeable", "Nuisance", "Obedience", "Obstacle", "Occasionally", "Occurrence",
    "Omitting", "Opponent", "Opportunity", "Optimistic", "Organization", "Original", "Parallel",
    "Parliament", "Perceive", "Performance", "Perseverance", "Personnel", "Persuade", "Phenomenon",
    "Philosophy", "Physical", "Physician", "Plagiarize", "Pleasant", "Poignant", "Possess", "Potatoes",
    "Precede", "Preferred", "Preliminary", "Principal", "Privilege", "Proceed", "Profession",
    "Pronunciation", "Propaganda", "Psychological", "Publicly", "Questionnaire", "Queue", "Receipt",
    "Receive", "Recognize", "Recommend", "Referred", "Reference", "Relevant", "Repetition", "Resistance",
    "Responsibility", "Rhythm", "Sacrilegious", "Schedule", "Secretary", "Separate", "Separated",
    "Sergeant", "Severely", "Simultaneous", "Solitary", "Sovereign", "Strengthen", "Subconscious",
    "Substantial", "Succession", "Superintendent", "Supersede", "Surprise", "Surrounding", "Suspense",
    "Syllable", "Symbolize", "Synonym", "Technique", "Temperature", "Temporary", "Theoretically",
    "Threshold", "Tomorrow", "Tragedy", "Truly", "Twelfth", "Unanimous", "Unbelievable", "Unforeseen",
    "Uniformity", "Unnecessary", "Unpredictable", "Urgency", "Vacuum", "Valuable", "Vehicle", "Villain",
    "Voluntary", "Weather", "Weird", "Welfare", "Wherever", "Wholeheartedly", "Wholly", "Witness",
    "Yield", "Zealous"]; // Example words

//list usable sound effets
let songW;
let songL
const songsW =["Clap.mp3","Clap1.mp3","Clap2.mp3"];
const songsL=["Laugh.mp3","Laugh2.mp3","Laugh3.mp3","Laugh4.mp3","Laugh5.mp3","gun_shot.mp3"];

// Initialize points
let point1 = 0;
let point2 = 0;
// get DOM element
const pointsCor = document.getElementById("point1");
const pointsInc = document.getElementById("point2");

const sub = document.getElementById("sub");
const res = document.getElementById("res");

const inpu=document.getElementById("inp");

document.getElementById('btn').addEventListener('click', function () {
    let num = Math.floor(Math.random() * words.length); // Get a random index within the array length
    word = words[num];

    let voice = new SpeechSynthesisUtterance();
    voice.volume = 1;//0 to 1
    voice.rate = 0.6; //0.1 to 10
    voice.pitch = 1;//0 to 2
    voice.text = word;
    speechSynthesis.speak(voice);
});

inpu.addEventListener('keydown',function(event){
    if(event.key === 'Enter'){
        const inputValue= inpu.value;
        if(inpu.value.trim() === ""){
            let voice3 = new SpeechSynthesisUtterance();
            voice3.volume = 1;//0 to 1
            voice3.rate = 0.6; //0.1 to 10
            voice3.pitch = 1;//0 to 2
            voice3.text = "Dont waste my time you filthy animal";
            speechSynthesis.speak(voice3);
        }
        else if (document.getElementById('inp').value == word) {
            document.getElementById('test').textContent = "Great Job Correct Answer 😊";
            //Add Points to the Counter
            point1++;
            pointsCor.textContent = point1;
            
            let voice2 = new SpeechSynthesisUtterance();
            voice2.volume = 1;//0 to 1
            voice2.rate = 0.6; //0.1 to 10
            voice2.pitch = 1;//0 to 2
            voice2.text = "Great Job Correct Answer Oh Great one";
            speechSynthesis.speak(voice2);
            // PLay audio
            function myPlay() {
                let num1=Math.floor(Math.random()*songsW.length);
                songW=songsW[num1];
                var audio = new Audio(songW);
                audio.play();
            }
            myPlay();
    
            setTimeout(function () {
                //update text to original form
                document.getElementById('test').textContent = "Learn how to spell the most misspelt words"
            }, 2000);
    
        }
        else {
            document.getElementById('test').textContent = `Bad Job Wrong Answer 😭\n It was ${word}`;
            //Remove points to the counter
            point2++;
            pointsInc.textContent = point2;
            
            let voice1 = new SpeechSynthesisUtterance();
            voice1.volume = 1;//0 to 1
            voice1.rate = 0.9; //0.1 to 10
            voice1.pitch = 1;//0 to 2
            voice1.text = "OHHHH Bad Job Wrong Answer, Try again BITCH";
            speechSynthesis.speak(voice1);
    
            function myPlay() {
                let num2=Math.floor(Math.random()*songsL.length);
                songL=songsL[num2];
                var audio = new Audio(songL);
                audio.play();
            }
            myPlay();
    
            setTimeout(function () {
                //update text to original form
                document.getElementById('test').textContent = "Learn how to spell the most misspelt words"
            }, 3000);
        }
        document.getElementById('inp').value = ''
        
    }
    
});

//Reset Points function

res.addEventListener('click', function () {
    point1=0;
    point2=0;
    pointsCor.textContent = point1;
    pointsInc.textContent = point2;
});

document.getElementById('sub').addEventListener('click', function () {
    if (document.getElementById('inp').value == word) {
        document.getElementById('test').textContent = "Great Job Correct Answer 😊";
        //Add Points to the Counter
        point1++;
        pointsCor.textContent = point1;
        
        let voice2 = new SpeechSynthesisUtterance();
        voice2.volume = 1;//0 to 1
        voice2.rate = 0.6; //0.1 to 10
        voice2.pitch = 1;//0 to 2
        voice2.text = "Great Job Correct Answer Mr President";
        speechSynthesis.speak(voice2);
        // PLay audio
        function myPlay() {
            let num1=Math.floor(Math.random()*songsW.length);
            songW=songsW[num1];
            var audio = new Audio(songW);
            audio.play();
        }
        myPlay();

        setTimeout(function () {
            //update text to original form
            document.getElementById('test').textContent = "Learn how to spell the most misspelt words"
        }, 2000);

    }
    else {
        document.getElementById('test').textContent = `Bad Job Wrong Answer 😭\n It was ${word}`;
        //Remove points to the counter
        point2++;
        pointsInc.textContent = point2;
        
        let voice1 = new SpeechSynthesisUtterance();
        voice1.volume = 1;//0 to 1
        voice1.rate = 0.9; //0.1 to 10
        voice1.pitch = 1;//0 to 2
        voice1.text = "Bad Job Wrong Answer, Try again BITCH";
        speechSynthesis.speak(voice1);

        function myPlay() {
            let num2=Math.floor(Math.random()*songsL.length);
            songL=songsL[num2];
            var audio = new Audio(songL);
            audio.play();
        }
        myPlay();

        setTimeout(function () {
            //update text to original form
            document.getElementById('test').textContent = "Learn how to spell the most misspelt words"
        }, 3000);
    }
    document.getElementById('inp').value = ''
});

document.getElementById('speak').addEventListener('click', function () {
    let voice = new SpeechSynthesisUtterance();
    voice.volume = 1;//0 to 1
    voice.rate = 0.6; //0.1 to 10
    voice.pitch = 1;//0 to 2
    voice.text = word;
    speechSynthesis.speak(voice);
});

