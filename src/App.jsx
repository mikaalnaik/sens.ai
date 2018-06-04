import React, {Component} from 'react';
import NavBar from  './navbar.js'
import Search from './search.jsx'
import PieExample from './RedditFeed'
import './App.css';
// let twitterKeys = require('../config.js');
let Twit = require('twit');
require('dotenv').config()
// var Tweet = twitterKeys.T;




class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchSubmit : false,
      response : ''
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

  componentDidMount(){
    this.callApi()
    .then(res => {
      this.setState({ response: res.express })
      console.log(res);
    })
    .catch(err => console.log(err));
}

callApi = async () => {
  const response = await fetch('/api/hello');
  const body = await response.json();

  if (response.status !== 200) throw Error(body.message);

  return body;
};


  searchSubmission = query => {
      this.setState({searchSubmit : true})
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
