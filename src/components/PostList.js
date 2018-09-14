import React, { Component } from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';
import DeleteForeverTwoTone from '@material-ui/icons/DeleteForeverTwoTone';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  deletePost = name => {
    this.props.deletePost(name);
  };

  render() {
    return this.props.posts.map(post => {
      return (
        <div
          key={post.name}
          style={{ width: '100%', maxWidth: '350px', margin: 'auto' }}
        >
          <List component="nav">
            <ListItem>
              <ListItemText primary={post.name} />
              <ListItemText primary={post.email} />
              <ListItemIcon>
                <DeleteForeverTwoTone
                  onClick={() => this.deletePost(post.name)}
                />
              </ListItemIcon>
            </ListItem>
          </List>
        </div>
      );
    });
  }
}

function mapStateToProps({ posts }) {
  return { posts };
}

export default connect(
  mapStateToProps,
  actions
)(PostList);
