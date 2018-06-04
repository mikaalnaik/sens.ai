var fetch = require('node-fetch')
var express = require("express");
const bodyParser = require("body-parser");
let Twit = require('twit');


const app = express();
app.use(bodyParser.urlencoded({extended: true}));

const PORT = process.env.PORT || 3001;


// Twitter API
var T = new Twit({
consumer_key:         '',
consumer_secret:      '',
access_token:         '',
access_token_secret:  '',
timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
strictSSL:            true,     // optional - requires SSL certificates to be valid.
})



app.get("/api/hello", (req, res) => {

async function getPosts() {
  let reddit = await fetch('https://api.pushshift.io/reddit/search/comment?q=budweiser&limit=100')
  let resolvedReddit = await reddit.json()
  let mappedReddit = resolvedReddit.map(data => ({
    platform: 'Reddit',
    user: data.author,
    content: data.body,
    source: data.permalink,
    created_at: data.created_utc
  })
)
}
// console.log(mappedReddit);


  T.get('search/tweets', { q: 'iphone X -filter:retweets', lang: "en", count: 100 }, function(err, data, response) {
     tweetdata = data.statuses.map(status => ({
      platform: "Twitter",
      user: status.user.name,
      content: status.text,
      source: "nill",
      created_at: status.created_at
    }))
    // console.log(data);
    // console.log(JSON.stringify({tweetdata}, null, 2))
  })




    let posts = getPosts()
    //
    // res.send(computeData(posts))


  // Make the express server serve static assets (html, javascript, css) from the /public folder

  app.use(express.static('public'))
    .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));
