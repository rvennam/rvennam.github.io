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

          </div>
          <p className="aboutme">Solutions-driven engineer with 11+ years of expertise in Kubernetes, Istio Service Mesh, API gateways, and cloud-native technologies, specializing in designing and deploying large-scale, resilient, distributed architectures. Proven ability to lead technical sales engagements, deliver tailored solutions to complex customer challenges, and collaborate with cross-functional teams to drive innovative product development and customer success. Extensive experience in architecting and optimizing API gateway solutions to enable secure, scalable, and efficient service integrations. Skilled in aligning technical capabilities with business objectives, defining product strategies, and driving the adoption of cloud-native technologies. Passionate advocate for CNCF projects and industry innovation, leveraging thought leadership and speaking engagements to accelerate cloud-native adoption and influence technology trends.</p>

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
