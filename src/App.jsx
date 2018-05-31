import React, {Component} from 'react';
import NavBar from  './navbar.js'
import Search from './search.jsx'
import RedditFeed from './RedditFeed.jsx'
import './App.css';

class App extends Component {


  /* example async / await way of fetching continuously
  async fetchPosts(numPosts = 100) {
    const posts = [];
    while (posts.length < numPosts) {
      const data = await fetch('...reddit url...');
      const filteredData = data.filter();
      posts.append(filteredData);
    }
  }
  */

searchSubmission = query => {
  console.log(query);
  fetch(`https://www.reddit.com/search.json?q=${query}&limit=100`)
  .then(data => data.json())
  .then(data => {
    this.setState(data)
    console.log(this.state.data)
  })

}



  render() {
    return (
<div>
    <div>  <NavBar/>  </div>
    <div> <Search query={this.searchSubmission}/> </div>
      <div className="App"> </div>
      <div> <RedditFeed /> </div>
    </div>
    );
  }
}

export default App;
