import React, { Component } from 'react';
import Header from './Header';
import CreateForm from './CreateForm';
import PostList from './PostList';
import CssBaseLine from '@material-ui/core/CssBaseline';

class App extends Component {
  render() {
    return (
      <CssBaseLine>
        <Header />
        <CreateForm />
        <PostList />
      </CssBaseLine>
    );
  }
}

export default App;
