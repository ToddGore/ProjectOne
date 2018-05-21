// import React from 'react';
// import './NotesList.css';


// class NotesList extends React.Component {

// constructor() {
// super();


// this.editNote = this.editNote.bind(this)
// this.putClick = this.putClick.bind(this)
// }





// putClick(note) {
//     console.log('putClick ', note.title);

// }

// editNote(element) {
    // console.log("element ", element)
    // this.props.putClick({ element });
    // this.props.noteTitle = element.title

    // onClick={() => this.editNote(element)}>
// }

    // render() {
    // let notesToDisplay = this.props.notes.map((element, index) => {
    //     return (
    //         <div key={index} id="left-sidebar-elements">
    //             <h3 >{element.title}</h3>
    //             <p>{element.content}</p>
    //             <span id="left-sidebar-button">
    //                 <input type="button" value="EDIT"
    //                     // onClick={this.props.putClick}></input>
    //                     onClick={() => this.editNote(element)}></input>

    //                 <input type="button" value="DEL"
    //                     onClick={this.props.delClick}></input>
    //             </span>
    //             <hr className="lowerHr" />
    //         </div >
    //     )
    // })

    // return (

    // <div className="sidebar-left" >
    //     <h2>Notes List</h2>
    //     <button className='btn-get' onClick={this.props.getClick}>Get Notes</button>
    //     <hr />

    //     {notesToDisplay}
    // </div>
    // )
    // }
// }

// export default NotesList;