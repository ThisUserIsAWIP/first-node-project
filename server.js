const fs = require('fs');
const path = require('path');

let chirpArray = [
    {
        name: "Bob",
        chirp: "Good morning guys! What's up?",
    },
    {
        name: "Steve",
        chirp: "I have this awful crick in my neck.",
    },
    {
        name: "Jim",
        chirp: "That's the third time this week you've said that Steve, buy a new pillow.",
    },
    {
        name: "Steve",
        chirp: "But I like my current pillow! I've had it for years.",
    },
    {
        name: "Bob",
        chirp: "That's gross Steve, buy a new pillow.",
    },
    {
        name: "Jim",
        chirp: "Yeah man they're like five bucks, anything that's five bucks isn't made for years!",
    },
];

let chirpPath = path.join(__dirname, "./chirps/chirps.json");

fs.writeFile(chirpPath, JSON.stringify(chirpArray, null, 2), (err) => {
    if (err) console.log(`Something happened writing file: ${err}`);

    console.log('Woohoo!');
});

fs.readFile(chirpPath, (err, data) => {
    if (err) console.log(`Something happened reading file: ${err}`);

    if (data) console.log(JSON.parse(data));
})
