//First, how does the game work?

//User is shown words one at a time. If you've seend the word, indicate so
//and if it's a new word, indicate new
//game keeps track of how many word you were able to rememeber and
//keeps score
//===================================================================================

const prompt = require("prompt-sync")(); // Didn't realize I needed to npm i the prompt-sync package
//===================================================================================
// 1. Create wordbank for game to pull from
// Randomly get a word from the bank
const generateRandomWord = () => {
    const wordBank =[
        "apple", "banana", "orange", "grape", "kiwi", "strawberry", "melon", "pineapple", "blueberry", "mango",
        "cat", "dog", "rabbit", "hamster", "fish", "bird", "turtle", "snake", "lizard", "frog",
        "car", "bicycle", "motorcycle", "truck", "bus", "train", "airplane", "boat", "submarine", "helicopter",
        "house", "apartment", "castle", "cabin", "tent", "igloo", "hut", "mansion", "palace", "treehouse",
        "book", "magazine", "newspaper", "notebook", "dictionary", "encyclopedia", "novel", "comic", "journal", "catalog",
        "computer", "phone", "tablet", "laptop", "keyboard", "mouse", "monitor", "printer", "router", "speaker",
        "table", "chair", "couch", "bed", "desk", "dresser", "nightstand", "bookshelf", "cabinet", "lamp"
    ]
    // console.log(wordBank.at(5))
    var rand = wordBank[Math.random() * wordBank.length>>0]; //Not sure how or why this fixed it but it did! Godbless stackoverflow T_T
    console.log(rand);
    return(rand);
}

// ==================================================================================


// // 2. Create game function

const game = () => {
    let score = 0; //init score
    let mistake = 0;
    let activeWord = "";
    let seenWords = [];

    while(mistake < 3){
        seenWords.push(generateRandomWord());
        console.log(seenWords)

        const haveSeen = prompt('Is this a new word?(y/n): ');
        mistake += 1;
        console.log(mistake)
    }

        
        
        
        
        
        
        // generate a random word
        //      ask user if they've seen it before
        //          if word is new, 
                //      add to array
    //                  give user points
                //      generate another random word
            //      if word isn't new,
            //          add mistake counter
            //          generate another random word
            //      if mistake counter < 3 --- keep playing
            //
    //entering the wrong selection more than three times returns false --- init a variable for counter

    // used words need to be added to a list/array and game also needs to eval if word in list 
}


const input = prompt("Press ENTER to begin...");
    if(input == false){
        const isReady = prompt("Welcome to the word memorization game. You will be shown a word one at a time. \nIf you've seen the word before, **do something**. If you haven't seen it before, **do something else**. \nDo you undertand?(y/n): ");
        if (isReady === 'y' || isReady === 'Y'){
            console.log("Okay! Here we go...");
            game();
        } else{
            console.log("Goodbye.");
        }
    }


// "Welcome to the word memorization game. You will be shown a word one at a time. If you've seen the word before, press 'J' on the your keyboard. If you haven't seen it before, press 'K'. \nPlease input something or im gonna kms: ");

// //     console.log('this is where the logic goes');
// // } else{
// //     console.log("Have a good one!");
// //     break;
// // }
// // } else{
// // console.log("That's not the enter button pal.");
// // continue;
// // }
// // }

// while true run this:
//      first - if user wants to play the game, press spacebar
//          if spacebar is pressed, continue to the rest of the code otherwise remain where you are. 


// KEYBOARD EVENTS CRASHCOURSE:

// input.addEventListener('keydown', isReady); // press any key to begin
//
//
//
// ==================================================================================

// 3. Create a way for the game to keep score
