//First, how does the game work?

//User is shown words one at a time. If you've seend the word, indicate so
//and if it's a new word, indicate new
//game keeps track of how many word you were able to rememeber and
//keeps score

// 1. Create wordbank for game to pull from
const wordBank =[
    "apple", "banana", "orange", "grape", "kiwi", "strawberry", "melon", "pineapple", "blueberry", "mango",
    "cat", "dog", "rabbit", "hamster", "fish", "bird", "turtle", "snake", "lizard", "frog",
    "car", "bicycle", "motorcycle", "truck", "bus", "train", "airplane", "boat", "submarine", "helicopter",
    "house", "apartment", "castle", "cabin", "tent", "igloo", "hut", "mansion", "palace", "treehouse",
    "book", "magazine", "newspaper", "notebook", "dictionary", "encyclopedia", "novel", "comic", "journal", "catalog",
    "computer", "phone", "tablet", "laptop", "keyboard", "mouse", "monitor", "printer", "router", "speaker",
    "table", "chair", "couch", "bed", "desk", "dresser", "nightstand", "bookshelf", "cabinet", "lamp"
];

// Randomly get a word from the bank

const generateRandomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
console.log(randomWord)

document.addEventListener('keydown', function(event) {
    if (event.keyCode === 32) {
        const randomWord = generateRandomWord(); 
        console.log(randomWord);
    }
});


// 2. Create game function
// 3. Create a way for the game to keep score
