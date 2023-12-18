import React from "react";

const MyButton = (props) => {
    const clickAlert = () =>{
        alert (`Bottone cliccato`);

    };

    return (<button className="btn" onClick={clickAlert}>
        {props.buttonText}
    </button>);
};
export default MyButton;