// https://github.com/ttezel/twit
// you can find how to use this code by looking at the link above

// var Twit = require('twit');
//
// var T = new Twit({
//   consumer_key:         '...',
//   consumer_secret:      '...',
//   access_token:         '...',
//   access_token_secret:  '...',
//   timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
//   strictSSL:            true,     // optional - requires SSL certificates to be valid.
// })
//
// T.get('search/tweets', { q: 'iphone X -filter:retweets', lang: "en", count: 100 }, function(err, data, response) {
//   var tweets = data.statuses.map(status => ({
//     platform: "Twitter",
//     user: status.user.name,
//     content: status.text,
//     source: "nill",
//     created_at: status.created_at
//   }))
//   // console.log(data);
//   console.log(JSON.stringify({tweets}, null, 2))
// })
