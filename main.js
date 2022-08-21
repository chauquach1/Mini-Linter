/*
Step 1

Below, there is a string called story. We want to gather some information about the individual words
and sentences in the string. Let’s split the string into individual words and save
them in a new array called storyWords
*/


var story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

var overusedWords = ['really', 'very', 'basically'];

var unnecessaryWords = ['extremely', 'literally', 'actually' ];

var storyWords = story.split(' ');

let wordCount = storyWords.length;


/*
 Step 2: Log how many words there are in this story to the console.
*/

console.log (wordCount);


/* Step 3
There is an array of words that are unnecessary. Iterate over your 
array to filter out these words. Save the 
remaining words in an array called betterWords. 
There are several ways that you could achieve this.
*/
var betterWords = [];

storyWords.forEach(function (word){
    if (!unnecessaryWords.includes(word)) {
        betterWords.push(word);
    }
});

/*
Step 4
There is an array of words called overusedWords. These 
are words overused in this story. You want to let the 
user of your program know how many times they have used 
these overused words. There are two ways to achieve this. 
Try it on your own first.
*/

let rCount = 0;
let vCount = 0;
let bCount = 0;

storyWords.forEach(function (word){
    if (word.includes('really')) {
        rCount++;
    }; 

    if (word.includes('very')) {
        vCount++;
    }; 
    
    if (word.includes('basically')) {
        bCount++;
    };
});

console.log(rCount);
console.log(vCount);
console.log(bCount);

/*
Step 5
Now, count how many sentences are in the paragraph.

This may seem tricky, but remember that all of the sentences in 
this paragraph end with a period (.) or an exclamation mark (!). 
You could iterate over the array and add 1 to a sentence counter 
variable for each word that has a period or exclamation mark as 
its final character.
*/

let sentences = 0

storyWords.forEach(function (word){
    if (word.includes('.') || word.includes('!')){
        sentences++;
    }
})

console.log(sentences);

/*
Step 6
Log these items to the console:

The word count
The sentence count
The number of times each overused word appears

You could choose to simply log them one by one or, for
a challenge, create a function that logs all of them
with some formatting.
*/

console.log(`Your word count is ${wordCount}. Your sentence count is ${sentences}. You used "really" ${rCount} times. You used "very" ${vCount} times. You used "basically" ${bCount} time.`)

/*
Step 7
Now, log the betterWords array to the console as a single string.
*/

console.log(betterWords.join(' '));

/*
Step 8
Congratulations! You’ve improved the original paragraph and given the user some important information about his or her work. Think about ways in which you can extend this project, potentially by using other JavaScript knowledge you have.

Here are some ideas:

For the overused words, remove it every other time it appears.

Write a function that finds the word that appears the greatest 
number of times.

Replaced overused words with something else.
*/
