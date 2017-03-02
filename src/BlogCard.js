import React, { Component } from 'react';
import './BlogCard.css';
import {Card, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

var styles = {
  cardTitle:{
    fontSize: "18px",
    lineHeight:"25px"
  }
}

class BlogCard extends Component {
  render() {
    return (
      <Card className="Card">
        <CardTitle title={this.props.blog.title} className="CardTitle" titleStyle={styles.cardTitle}/>
        <CardMedia>
            <img src={this.props.blog.imageSrc} />
        </CardMedia>
      </Card>
    );
  }
}

export default BlogCard;
