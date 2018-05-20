import React from 'react';
import './NotesList.css';
import axios from 'axios';



class NotesList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: []
        };
    }



    render() {
        let notesToDisplay = this.props.notes.map((element, index) => {
        // let notesToDisplay = this.state.notes.map((element, index) => {
            return (
                <div key={index} id="left-sidebar-elements">
                    <h3 >{element.title}</h3>
                    <p>{element.content}</p>
                    <span id="left-sidebar-button">
                        <input type="button" value="EDIT"
                            onClick={this.editNote}></input>
                        <input type="button" value="DEL"
                            onClick={this.props.delClick}></input>
                    </span>
                    <hr className="lowerHr" />
                </div >
            )
        })

        return (

            <div className="sidebar-left" >
                <h2>Notes List</h2>
                <button className='btn-get' onClick={this.props.getClick}>Get Notes</button>
                <hr />

                {notesToDisplay}
            </div>
        )
    }
}

export default NotesList;