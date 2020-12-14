import React, { useState } from 'react'

function Text(props) {
    const [value, setValue] = useState("");
    
    function handleChange(e) {
        setValue(e.target.value);
    }

    if (props.editable) {
        if (props.type === 'text') {
            return (
                <div className="Text editable">
                    <label>{props.label}</label>
                    <input 
                        className={props.display} 
                        type={props.type} 
                        value={value} 
                        onChange={handleChange} 
                        placeholder={props.placeholder} 
                        maxLength={props.length}></input>
                </div>
            );
        } else if (props.type === 'textarea') {
            return (
                <div className="Textarea editable">
                    <label>{props.label}</label>
                    <textarea
                        className={props.display}
                        value={value}
                        onChange={handleChange}
                        placeholder={props.placeholder}
                        cols={props.cols}
                        rows={props.rows}
                        maxLength={props.length}></textarea>
                </div>
            );
        }
    } else {
        if (!value) {
            return (
                <div className="Text notEditable">
                    <label>{props.label}</label>
                    <p className="italic">{props.placeholder}</p>
                </div>  
            );
        } else {
            return (
                <div className="Text notEditable">
                    <label>{props.label}</label>
                    <p>{value}</p>
                </div>
            );
        }
    }
}

export default Text;