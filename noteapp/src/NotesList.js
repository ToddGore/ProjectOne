import React from 'react';
import './NotesList.css';
import axios from 'axios';



class NotesList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: []
        };
        this.getNotes = this.getNotes.bind(this);
        this.deleteNote = this.deleteNote.bind(this);
        this.editNote = this.editNote.bind(this);

    }

    // componentDidMount() {
    //     axios.get('/api/notes').then(results => {
    //         this.setState({ 'notes': results.data });
    //     })
    // }

    getNotes() {
        axios.get('/api/notes').then(results => {
            this.setState({ 'notes': results.data });
        })
    }

    deleteNote() {
        axios.delete('/api/notes/:id').then(results => {
            this.setState({ 'notes': results.data });
        })
    }

    editNote() {

    }

    render() {
        let notesToDisplay = this.state.notes.map((element, index) => {
            return (
                <div key={index} id="left-sidebar-elements">
                    <h3 >{element.title}</h3>
                    <p>{element.content}</p>
                    <span id="left-sidebar-button">
                        <input type="button" value="EDIT"
                            onClick={this.editNote}></input>
                        <input type="button" value="DEL"
                            onClick={this.deleteNote}></input>
                    </span>
                    <hr className="lowerHr" />
                </div >
            )
        })

        return (

            <div className="sidebar-left" >
                <h2>Notes List</h2>
                <button className='btn-get' onClick={this.getNotes}>Get Notes</button>
                <hr />

                {notesToDisplay}
            </div>
        )
    }
}

export default NotesList;