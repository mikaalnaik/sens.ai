import React, {Component} from 'react';
import NavBar from  './navbar.js'
import Search from './search.jsx'
import PieExample from './RedditFeed'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchSubmit : false
    }
    }

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
  fetch(`https://api.pushshift.io/reddit/search/comment?q=${query}&limit=100`)
  .then(data => data.json())
  .then(data => {
    let author = data.author;
    let body = data.body;
    let date = data.created_utc;
    let source = 'reddit'
    console.log('Data', data)
    console.log('Author', data.author)
    console.log('Date', data.created_utc)
    this.setState({searchSubmit : true})
    console.log(this.state);
  })
}

  render() {
    return (
<div>
    <div>  <NavBar/>  </div>
    <div> <Search query={this.searchSubmission}/> </div>
      <div className="App"> </div>
      <div className='pie'> <PieExample searched={this.state.searchSubmit}/> </div>
    </div>
    );
  }
}

export default App;
