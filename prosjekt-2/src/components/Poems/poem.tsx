import React, { Component } from 'react';
import axios from 'axios';

export default class Poem extends Component {
  state = {
    poems: [],
  };
  getpoem() {
    try {
      axios
        .get('https://poetrydb.org/author,title/Shakespeare;Sonnet')
        .then((res) => {
          let poems = res.data;
          this.setState({ poems });
        });
    } catch (err) {
      console.error(err.message);
    }
  }
  render() {
    return (
      <ul>
        {this.state.poems.map((poems) => (
          <li>{poems}</li>
        ))}
      </ul>
    );
  }
}
