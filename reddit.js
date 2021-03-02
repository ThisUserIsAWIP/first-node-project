let rp = require('request-promise');
const fs = require('fs');
const path = require('path');

let popularArray = []

let popularArticlePath = path.join(__dirname, "./popular-articles.json");

rp('https://www.reddit.com/r/popular.json')
    .then(res => JSON.parse(res).data.children)
    .then(res => {
        popularArray = res.map(post => {
            return {
                title: post.data.title,
                author: post.data.author,
                url: post.data.url
            }
        })
    }).then(() => {
        fs.writeFile(popularArticlePath, JSON.stringify(popularArray), (err) => {
            if (err) console.log(`Something Happened writing file: ${err}`)

            console.log('Hoowoo!');
        })
    }).then(() => {
        fs.readFile(popularArticlePath, (err, data) => {
            if (err) console.log(`Something happened reading file: ${err}`);

            if (data) console.log(JSON.parse(data));
        })
    })





