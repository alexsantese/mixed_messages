// Arrays that the function will pull from

const quotes = ['The greatest glory in living lies not in never falling, but in rising everytime we fall. -Nelson Mandela'
, 'If life were predictable, it would cease to be life, and be without flavor. -Eleanor Roosevelt'
, 'Always remember that you are absolutely unique, just like everyone else. -Margaret Mead'
, 'Life is never fair, and perhaps it is a good thing for most of us that it is not. -Oscar Wilde'
, 'You only live once, but if you do it right, once is enough. -Mae West'];

const fortune = ["All signs say that you will discover the facts surrounding an event from when you were younger, and it will make you rethink things. Don't let this opportunity pass you by."
, "If you feel you have time to spare, then maybe give someone you love a word of encouragement. This will let settle down, and you'll understand who you really are."
, "This week you should do some volunteer work. If you can answers to questions long held will become more clear."
, "Seek out a distant but cherished family member to give you unexpectedly sage advice."
, "Soon you will discover something you never knew you deserved, and it will become important to you once again. Make this day your own."
, "No doubt, you will discover something important, and it will take on a new meaning to you. Why not get started with the rest of your life today."
, "If you think you might be ready for a major commitment, then you just might be ready. Hesitate if you must, but know that there's nothing wrong with making a bad decision, once in a while."
];

const rlmQuotes = ["I got to live long enough for Julia Roberts to be horrified by me."
, "The 9/11 moon-landings were an outside job."
, "Market research suggests high-fives appeal to all demographics."
, "Jimmy Fallon? The only thing he should host is a parasite."
, "Its strange to have a movie that has last 10 minutes playing a footage of 9/11"
, "Now, back to 9/11"
, "Yeah, this is Don Wilson! I own Iowa's largest wildlife preserve!"
, "Oh yeah, I fuckin' love Star Wars ..."
];

// Random selector function
const randomizer = arr => {
  let randNum = Math.floor(Math.random() * arr.length);
  return arr[randNum];
};

// Function that prints the combined message to the console
const printMessage = () => {
  console.log(`Your inspirational quote for the day is: ${randomizer(quotes)}. 
  I checked the crystal ball, and your fortune is: ${randomizer(fortune)}. 
  Finally, here's a bit of RedLetterMedia for you: ${randomizer(rlmQuotes)}.`)
};

printMessage()