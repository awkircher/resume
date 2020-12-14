import React, { useState } from 'react'

function Phone(props) {
    const [areaCode, setAreaCode] = useState("");
    const [exchangeCode, setExchangeCode] = useState("");
    const [lineCode, setLineCode] = useState("");
    const [valid, setValid] = useState(true);
    
    function validate(number) {
        const pattern = /^[0-9]*$/;
        const valid = pattern.test(number);
        setValid(valid);
    }

    function handleChange(e, code) {
        validate(e.target.value);
        switch (true) {
            case code === 'area': setAreaCode(e.target.value);
            break;
            case code === 'exchange': setExchangeCode(e.target.value);
            break;
            case code === 'line': setLineCode(e.target.value);
            break;
            default: console.log('no match');
        }
    }

    const areaEl = <span className="italic">(Area)</span>;
    const excEl = <span className="italic">&nbsp;###-</span>;
    const lineEl = <span className="italic">####</span>

    if (props.editable) {
        return (
            <div className="Phone editable">
                <label>{props.label}</label>
                <fieldset>
                        <input className="inline" type="text" value={areaCode} maxLength="3" placeholder="Area" onChange={(event) => handleChange(event, "area")}></input>
                        <input className="inline" type="text" value={exchangeCode} maxLength="3" placeholder="###" onChange={(event) => handleChange(event, "exchange")}></input>
                        <input className="inline" type="text" value={lineCode} maxLength="4" placeholder="####" onChange={(event) => handleChange(event, "line")}></input>
                </fieldset>
                <div className="error">{valid ? "" : "Enter a valid phone number"}</div>
            </div>
        );
    } else {
        return (
            <div className="Phone notEditable">
                <label>{props.label}</label>
                <p className={props.display}>{areaCode ? "(" + areaCode + ") " : areaEl}</p>
                <p className={props.display}>{exchangeCode ? exchangeCode + "-" : excEl}</p>
                <p className={props.display}>{lineCode ? lineCode : lineEl}</p>
            </div>
        );
    }
}


export default Phone;