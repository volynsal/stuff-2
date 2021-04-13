import React from 'react';

import '../App.css';

class Tickets extends React.Component { 
    constructor(props) {
        super(props);

        this.activate = this.activate.bind(this);
    }

    activate(e) {
        let tickets = document.querySelectorAll('.dot');
        tickets = Array.from(tickets);
        
        for (let i = 0; i < tickets.length; i++) if (tickets[i].id === "activeTask") tickets[i].id = "";
        let active = tickets.indexOf(e.target);

        tickets[active].id = "activeTask";
    }

    render() {
        return (
            <ol style={{height: "100%", border: "1px solid blue"}} id="tickets">
                <img id="propic" style={{paddingBottom: "30px", paddingTop: "0.5rem", height: "30px", width: "30px", borderRadius: "10px"}} src="https://media-exp1.licdn.com/dms/image/C4E03AQEIqtAJE6Q2Qw/profile-displayphoto-shrink_800_800/0/1551970369882?e=1623283200&v=beta&t=gP-B7_U5kcipNsStebwD98G-jNUrBORxyTwJtFcyER4"></img>
                <span id="activeTask" onClick={this.activate} className="dot"></span>
                <span onClick={this.activate} className="dot"></span>
                <span onClick={this.activate} className="dot"></span>
                <span onClick={this.activate} className="dot"></span>
            </ol>
        )
    }
}

export default Tickets;