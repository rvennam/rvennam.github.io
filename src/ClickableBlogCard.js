import React, { Component } from 'react';
import BlogCard from './BlogCard.js'
import './BlogCard.css';

class ClickableBlogCard extends Component {
  render() {
    return (
      <a className="ClickableBlogCard" href={this.props.blog.url} target="_blank" >
        <BlogCard key={this.props.blog.title} blog={this.props.blog}/>
      </a>
    );
  }
}

export default ClickableBlogCard;
