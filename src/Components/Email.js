import React, { useState } from 'react';

function Email(props) {
    const [value, setValue] = useState("");
    const [valid, setValid] = useState(true);
    
    function validate(email) {
        const pattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        const valid = pattern.test(email);
        setValid(valid);
    }

    function handleChange(e) {
        const input = e.target.value;
        validate(input);
        setValue(input);
    };


let editable = 
    <div className="Email editable">
        <label>{props.label}</label>
        <input className={props.display} type="text" value={value} onChange={handleChange} placeholder={props.placeholder}></input>
        <div className="error">{valid ? "" : "Enter a valid email address"}</div>
    </div>

let noValue =
    <div className="Email notEditable">
        <label>{props.label}</label>
        <p className="italic">{props.placeholder}</p>
    </div> 

let notEditable =
    <div className="Email notEditable">
        <label>{props.label}</label>
        <p>{value}</p>
    </div>

if (props.editable) {
    return editable;
    } else {
        if (!value) {
            return noValue;
        } else {
            return notEditable;
        }
    }
}


export default Email;