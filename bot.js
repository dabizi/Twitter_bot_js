console.log('The bot is starting');

var Twit = require('twit');

var config = require('./config');
//console.log(config);
var T = new Twit(config);

tweetIt();
// Interval for test : every 20 seconds
//setInterval(tweetIt, 1000*20);

// Interval for real, every 24h
setInterval(tweetIt, 1000*60*60*24);

function tweetIt(){

  var r = Math.floor(Math.random()*100);

  var tweet = {
    status: 'Hola ' + r + ' #test'
  }

  T.post('statuses/update', tweet, tweeted);

  function tweeted(err, data, response){
    if (err) {
      console.log("Something went wrong!");
    } else {
      console.log("It worked!")
    }
  }
}

/*
var params = {
q: 'banana since:2011-11-11',
count: 100
};

T.get('search/tweets', params, gotData);

function gotData(err, data, response) {
var tweets = data.statuses;
for (var i = 0; i < tweets.length; i++)
console.log(tweets[i].text)
};*/
