import React from 'react';
import './CreateNote.css';
import axios from 'axios';


class CreateNote extends React.Component {
    constructor(props) {
        super();

        this.state = {
            title: "",
            content: "",
            date: ""
        }
        this.handleChangeTitle = this.handleChangeTitle.bind(this)
        this.handleChangeContent = this.handleChangeContent.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }
    getDate() {
        let today = new Date();
        let date = (today.getMonth() + 1) + '/' + today.getDate() + '/' + today.getFullYear();
        let txtDate = date.toString(); // This may not be needed. date may already be a string.
        return txtDate
    }

    handleClick() {
        let thisDay = this.getDate()

        axios.post('/api/notes', {
            title: this.state.title,
            content: this.state.content,
            date: thisDay
        }).then(results => {
            this.setState({ 'notes': results.data });
        })

        // Use .then to update state. For example: to update your list of
        // notes after adding one.
        this.setState({ title: "" })
        this.setState({ content: "" })
    }

    handleChangeTitle(event) {
        this.setState({ title: event.target.value })
        // this.setState({ date: "2018-5-18" })
    }
    handleChangeContent(event) {
        this.setState({ content: event.target.value })
    }

    render() {
        return (
            <div className="container">
                <textarea type="text" id="author-paper"
                    placeholder="Title Text"
                    value={this.state.title}
                    onChange={this.handleChangeTitle}>
                </textarea>
                <textarea type="text" id="content-paper"
                    placeholder="What's happening today?"
                    value={this.state.content}
                    onChange={this.handleChangeContent}>
                </textarea>
                <button onClick={this.handleClick} id="btnSend">Send
                </button>
            </div>
        )
    }
}


export default CreateNote;