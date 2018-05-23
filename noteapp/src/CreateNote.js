import React from 'react';
// import axios from 'axios';
import './CreateNote.css';
import './NotesList.css';

var unirest = require('unirest');


class CreateNote extends React.Component {
    constructor(props) {
        super();

        this.state = {
            note: { title: "", content: "", date: "" },
            translation: "",
            suggestion: "",
            send: false,
            update: false,
            spell: false,
            translate: false
        }

        this.handleChangeTitle = this.handleChangeTitle.bind(this)
        this.handleChangeContent = this.handleChangeContent.bind(this)
        this.createClick = this.createClick.bind(this)
        this.editClick = this.editClick.bind(this)
        this.updateClick = this.updateClick.bind(this)
        this.spellClick = this.spellClick.bind(this)
        this.translateClick = this.translateClick.bind(this)
    }


    getDate() {
        let today = new Date();
        let date = (today.getMonth() + 1) + '/' + today.getDate() + '/' + today.getFullYear();
        let txtDate = date.toString(); // This may not be needed. date may already be a string.
        return txtDate
    }

    createClick(event) {
        let currentDate = this.getDate()

        this.setState({
            note: { ...this.state.note, date: currentDate, },
        }, function () {
            // console.log(this.state.note);
            this.props.postClick(this.state.note);
        });
        // this.setState({ 'note': { title: "", content: "", date: "" } });
    }

    editClick(element) {
        this.setState({ update: true, send: false, translate: true, 'note': element })
    }

    updateClick() {
        this.props.putClick(this.state.note);
        this.setState({ update: false })
    }

    spellClick(content) {
        let self = this //************ add this
        // These code snippets use an open-source library. http://unirest.io/nodejs
        // This+sentnce+has+some+probblems.
        let title = this.state.note.content;
        title = title.replace(/\s/g, "+");
        unirest.get(`https://montanaflynn-spellcheck.p.mashape.com/check/?text=${title}`)
            .header("X-Mashape-Key", "zEBW2t6EOLmshzEH90V3yeQQP65Np1EeEO6jsnpHdu75AqXZoC")
            .header("Accept", "application/json")
            .end(function (result) {
                self.setState({ 'suggestion': result.body.suggestion });
            });
    }

    translateClick(content) {
        let self = this
        // let myText = this.state.note.content;

        unirest.post("https://sa-translate.p.mashape.com/translate")
            .header("X-Mashape-Key", "zEBW2t6EOLmshzEH90V3yeQQP65Np1EeEO6jsnpHdu75AqXZoC")
            .header("Content-Type", "application/json")
            .header("Accept", "application/json")
            .send({ "text": this.state.note.content, "sourceLanguage": "en", "targetLanguage": "fr" })
            .end(function (result) {
                console.log("Translate ", result.body.translate.text);
                self.setState({ 'translation': result.body.translate.text });
            });
    }


    deleteClick(note) {
        this.props.delClick(note);
    }


    handleChangeTitle(event) {
        if (event.target.value > "" &&
            this.state.update === false) {
            this.setState({ send: true })
            this.setState({ spell: true })
            this.setState({ translate: true })
        } else {
            this.setState({ send: false })
            this.setState({ spell: false })
            this.setState({ translate: true })
        }

        this.setState({
            note: { ...this.state.note, title: event.target.value, },
        });
    }

    handleChangeContent(event) {
        this.setState({
            note: { ...this.state.note, content: event.target.value, },
        });
    }



    render() {
        let notesToDisplay = this.props.notes.map((element, index) => {
            return (
                <div key={index} id="left-sidebar-elements">
                    <h3 >{element.title}</h3>
                    <p>{element.content}</p>
                    <p>{element.id}</p>
                    <span id="left-sidebar-button">
                        <input className="notesButtons" type="button" value="EDIT"
                            onClick={() => this.editClick(element)}></input>
                        <input className="notesButtons" type="button" value="DEL"
                            onClick={() => this.deleteClick(element)}></input>
                    </span>
                    <hr className="lowerHr" />
                </div >
            )
        })

        return (
            <div className="container">
                <div className="sidebar-container">
                    <div className="sidebar-header">
                        <h2>Notes List</h2>
                        <button className='btn-get' onClick={this.props.getClick}>Get Notes</button>
                        <hr />
                    </div>
                    <div className="sidebar-left" >
                        {notesToDisplay}
                    </div>
                </div>
                <div className="button-area">
                    <button
                        onClick={this.createClick}
                        id="btnSend"
                        disabled={!this.state.send}
                    >Send
                    </button>
                    <button
                        onClick={this.updateClick}
                        id="btnSend"
                        disabled={!this.state.update}
                    >Update
                    </button>
                    <button
                        onClick={this.spellClick}
                        id="btnSend"
                        disabled={!this.state.spell}
                    >Spell Check
                </button>
                    <button
                        onClick={this.translateClick}
                        id="btnSend"
                        disabled={!this.state.translate}
                    >Translate
                </button>
                </div>

                <div className="text-area">
                    <textarea type="text" id="author-paper"
                        placeholder="Title Text"
                        value={this.state.note.title}
                        onChange={this.handleChangeTitle}>
                    </textarea>
                    <textarea type="text" id="content-paper"
                        placeholder="What's happening today?"
                        value={this.state.note.content}
                        onChange={this.handleChangeContent}>
                    </textarea>
                    <textarea className="toolBar"
                        // value={this.state.suggestion}
                        value={this.state.suggestion}
                        placeholder="Spell Check Suggestions"
                        readOnly>
                    </textarea>

                    <textarea className="translate"
                        value={"In French: " + this.state.translation}
                        placeholder="Translation"
                        readOnly>
                    </textarea>

                    <p></p>
                </div>
            </div>

        )
    }
}


export default CreateNote;