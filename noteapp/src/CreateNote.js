import React from 'react';
import './CreateNote.css';


class CreateNote extends React.Component {
    constructor(props) {
        super();

        this.state = {
            note: { title: "", content: "", date: "" }
        }

        this.handleChangeTitle = this.handleChangeTitle.bind(this)
        this.handleChangeContent = this.handleChangeContent.bind(this)
        this.createClick = this.createClick.bind(this)
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
    }




    handleChangeTitle(event) {
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
        // let noteTitle = this.state.note.title
        // let noteContent = this.state.note.content
        return (
            <div className="container">
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
                <button onClick={this.createClick}
                    id="btnSend">Send
                </button>
            </div>
        )
    }
}


export default CreateNote;