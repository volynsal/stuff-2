import React from 'react';

class Conversation extends React.Component { 
    constructor(props) {
        super(props);

        this.clearMessage = this.clearMessage.bind(this);
    }

    clearMessage() {
        document.querySelector("#message").value = "";
    }

    render() {
        return (
            <div style={{ position: "absolute", left: "50rem", zIndex: "10" }} id="conversation">
                <div>New task</div>
            <input maxLength="25" id="message" type="text" placeHolder="Type a message"></input>
            <button onClick={this.clearMessage}>Submit</button>
            </div>

        )
    }
}

export default Conversation;