import React from 'react'
import Text from './Text'
import DateRange from './DateRange'

function EducationForm(props) {
    function remove(e) {
        const key = props.uuid;
        e.preventDefault();
        props.remove(key);
    }

    const key = (props.uuid) > 0;
    const removeButton = <button onClick={remove}>Remove</button>;
    return (
        <fieldset className="container">
            <span className="removeButton">{key ? removeButton : ""}</span>
            <Text 
                display={"block"}
                length={"250"}
                placeholder={"Institution"}
                type={"text"}
                label={"Institution"}
                editable={props.isEditable} />
            <Text 
                display={"block"}
                length={"250"}
                placeholder={"Course of study"}
                type={"text"}
                label={"Course of study"}
                editable={props.isEditable} />
            <DateRange 
                label={"Dates of attendance"}
                editable={props.isEditable} />
        </fieldset>
    );
}


export default EducationForm;