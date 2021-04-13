import React from 'react';

class Classify extends React.Component { 
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{ position: "absolute", left: "20rem", zIndex: "10" }} id="classify">
                <div style={{ fontWeight: "800", textDecoration: "underline", color: "rgba(97, 203, 216, 1)" }}>Classify</div>
                <div>What's the user asking for?</div>
                <select></select>
                <div>Task name (as shown to the user)</div>
                <input type="text" maxLength="20"></input>
                <button type="Button">Proceed</button>
            </div>
        )
    }
}

export default Classify;