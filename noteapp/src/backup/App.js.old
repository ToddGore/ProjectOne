import React, { Component } from 'react';
import logo from './SomNote.png';
import './App.css';
import CreateNote from './CreateNote';
import NotesList from './NotesList';


class App extends Component {
  constructor() {
    super();
    // this.state = {
    //   notes: []
    // };
  }

  // deleteNote() {
  //   axios.delete('/api/notes/:id').then(results => {
  //     this.setState({ 'notes': results.data });
  //   })
  // }




  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Notes-Pro</h1>
        </header>
        <div>
          <NotesList />
          <div className="toolBar"></div>
          <CreateNote />
        </div>
        {/* <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
      </div>
    );
  }
}

export default App;
