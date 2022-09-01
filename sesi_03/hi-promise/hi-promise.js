import fetch from 'node-fetch';
//kode untuk menampilkan minimal 50 tweet yang di star dan di retweet
/*fetch('https://api.faketweet.com/tweets').then(response=>{
    return response.json()
}).then(tweets => {
    return tweets.filter(tweet =>{
        return tweet.stars > 50;
    })
}).then(tweets =>{
    return tweets.filter(tweet =>{
        return tweet.rts > 50;
    })
}).catch(err =>{
    console.error(error);
});*/

//dengan menggunakan implicit return arrow function

fetch('https://fake-tweets-api.herokuapp.com/posts')
.then(response => response.json())
/*.then(tweets => tweets.filter(tweet=>tweet.stars>50))
.then(tweets => tweets.filter(tweet => tweet.rts >50)) */
.then(tweets => {
    let sizeTweet = tweets.length
    console.log("panjang data = " + sizeTweet + "\n")
    console.log(tweets)
})
.catch(err=>{
    console.error(error);
});

//new promise

