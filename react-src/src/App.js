import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import BlogCard from './BlogCard.js'
import ClickableBlogCard from './ClickableBlogCard.js'
var data = require('./blogData.json');
var Slider = require('react-slick');

export class App extends Component {

  selectBlog(blog){
    var bc;
    blog.url ?
    bc = (<ClickableBlogCard key={blog.title} blog={blog}/>)
    :
    bc = (<BlogCard key={blog.title} blog={blog}/>)
    return bc;
  }
  render() {
    var settings = {
      dots: true,
      arrows: false,
      infinite: true,
      speed: 500,
      autoplay: true,
    };

    return (
      <MuiThemeProvider >
        <div className="App">
          {/* <Slider {...settings}>
            {data.banner.map((imgSrc) => <div className="bannerContainer" key={imgSrc}>
              <img className="bannerImg" src={imgSrc} role="presentation" />
            </div>)
            }
          </Slider> */}
          <div className="bannerContainer">
            <img className="bannerImg" src="rvennam_banner2.jpg" role="presentation" />
          </div>
          <div className="App-header">
            <h1>Ram Vennam</h1>
            <h3>Developer Advocate</h3>
          </div>

          <div className="CardContainer">
          {data.blogs.map(this.selectBlog)}
        </div>
        <footer>
          <div className="mui-container mui--text-center">
            written with react.js and material-ui
          </div>
        </footer>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
