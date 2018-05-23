import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import CreateNote from './CreateNote';
import Header from './Header';
// import NotesList from './NotesList';


class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
    };

    this.postNote = this.postNote.bind(this);
    this.getNotes = this.getNotes.bind(this);
    this.putNote = this.putNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);

  }

  postNote(note) {
    console.log('postNote ', note);

    axios.post('/api/notes', note).then(results => {
      this.setState({ 'notes': results.data });
    })
  }

  getNotes() {
    axios.get('/api/notes').then(results => {
      this.setState({ 'notes': results.data });
    })
  }

  putNote(noteP) {
    console.log('putNote ', noteP);
    axios.put(`/api/notes/${noteP.id}`,
      noteP
    ).then(results => {
      this.setState({ 'notes': results.data });
    })

    // These brackets were my problem.
    // axios.put(`/api/notes/${noteP.id}`,{
    //   noteP
    // })

  }

  deleteNote(note) {
    console.log('deleteNote ', note);
    axios.delete(`/api/notes/${note.id}`).then(results => {
      this.setState({ 'notes': results.data });
    })
  }


  render() {
    return (
      <section className="App" >
        <Header />
        <div id="main">

          <CreateNote
            delClick={this.deleteNote}
            putClick={this.putNote}
            getClick={this.getNotes}
            notes={this.state.notes}
            postClick={this.postNote}
            noteTitle={this.props.noteTitle}
            noteContent={this.props.noteContent}
          />
        </div>
        <footer></footer>
      </section>
    );
  }
}

export default App;
