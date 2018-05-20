import React, { Component } from 'react';
import axios from 'axios';
import logo from './SomNote.png';
import './App.css';
import CreateNote from './CreateNote';
import NotesList from './NotesList';


class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: []
    };
    this.getNotes = this.getNotes.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
    this.editNote = this.editNote.bind(this);
  }

  postNote() {
    let thisDay = this.getDate()
    axios.post('/api/notes', {
      title: this.state.title,
      content: this.state.content,
      date: thisDay
  }).then(results => {
      this.setState({ 'notes': results.data });
    })
  }
  
  getNotes() {
    axios.get('/api/notes').then(results => {
      this.setState({ 'notes': results.data });
    })
  }

  editNote(stuff) {
    console.log(stuff);

  }

  deleteNote() {
    axios.delete('/api/notes/:id').then(results => {
      this.setState({ 'notes': results.data });
    })
  }
  
//   getDate() {
//     let today = new Date();
//     let date = (today.getMonth() + 1) + '/' + today.getDate() + '/' + today.getFullYear();
//     let txtDate = date.toString(); // This may not be needed. date may already be a string.
//     return txtDate
// }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Notes-Pro</h1>
        </header>
        <div>
          <NotesList delClick={this.deleteNote}
            getClick={this.getNotes}
            notes={this.state.notes}
          />
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
