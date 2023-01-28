import React, { Component } from 'react';
import './BlogCard.css';
import {Card, CardMedia, CardTitle} from 'material-ui/Card';

var styles = {
  title:{
    fontSize: "16px",
    lineHeight:"25px"
  },
  cardTitle:{
    padding:"10px"
  }
}

class BlogCard extends Component {
  render() {
    return (
      <Card className="Card">
        <CardTitle title={this.props.blog.title} className="CardTitle" style={styles.cardTitle} titleStyle={styles.title}/>
        <CardMedia>
            <img src={this.props.blog.imageSrc} role="presentation"/>
        </CardMedia>
      </Card>
    );
  }
}

export default BlogCard;
