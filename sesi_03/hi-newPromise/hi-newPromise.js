setTimeout(() => {
    console.log("Tick");
}, 1000);

const doSomething = function(){
    return new Promise((resolve, reject) =>{

    })
};

let doIt = doSomething()
doIt.then(respone =>{

})
doIt.catch(error => {

})

const setTimeoutPromise = (duration) =>
    new Promise(resolve, reject =>{
        setTimeout(resolve, duration);
    });
setTimeoutPromise(1000).then(()=>
console.log("tick"));

//Async / Await
fetch('https://api.faketweet.com/tweets')
.then(response => response.json())
.then(tweets => tweets.filter(tweet => tweet.star > 50))
.then(tweets => tweets.filter(tweet => tweet.rts > 50))

.catch(err =>{
    console.error(error);
});

//cara 2
const response = await
fetch('https://api.faketweet.com/tweets')

const tweets = await response.json()

let tweets2 = tweets2.filter(tweet => tweet.stars > 50);

tweets = tweets.filter(tweet => tweet.rts > 50)

console.log(tweets);

//cara 3
const fetchTweets = async () => {
    const response = await
    fetch('https://api.faketweet.com/tweets');

    const tweets = await response.json();

    let tweets2 = tweets2.filter(tweet => tweet.stars > 50);

    tweets = tweets.filter(tweet => tweet.rts > 50)

    console.log(tweets);
}

fetchTweets();

//cara 4
(async () => {
    const response = await
    fetch('https://api.faketweet.com/tweets');

    let tweets = await response.json();

    let tweets2 = tweets2.filter(tweet => tweet.stars > 50);

    tweets = tweets.filter(tweet => tweet.rts > 50)

    console.log(tweets.length);
})();