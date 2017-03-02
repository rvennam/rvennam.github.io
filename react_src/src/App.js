import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import BlogCard from './BlogCard.js'
import ClickableBlogCard from './ClickableBlogCard.js'
var blogData = require('./blogData.json');

class App extends Component {

  selectBlog(blog){
    var bc;
    blog.url ?
    bc = (<ClickableBlogCard key={blog.title} blog={blog}/>)
    :
    bc = (<BlogCard key={blog.title} blog={blog}/>)
    return bc;
  }
  render() {

    return (
      <MuiThemeProvider >
        <div className="App">
          <div className="App-header">
            <h1>Ram Vennam</h1>
            <h3>Bluemix Developer Advocate</h3>
          </div>
          <div className="CardContainer">
          {blogData.map(this.selectBlog)}
        </div>
        <footer>
          <div class="mui-container mui--text-center">
            written with react.js and material-ui
          </div>
        </footer>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
