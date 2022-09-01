//IIFE
import fetch from 'node-fetch';

(async () => {
    const response = await
    fetch('https://fake-tweets-api.herokuapp.com/posts')

    let tweets = await response.json()

    let tweets2 = tweets.filter(tweet => tweet.stars > 50)

    tweets2 = tweets.filter(tweet => tweet.rts > 50)

    console.log(tweets.length)
})();