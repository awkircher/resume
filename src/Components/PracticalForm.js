import React from 'react'
import Text from './Text'
import DateRange from './DateRange'

function PracticalForm(props) {
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
                placeholder={"Employer"}
                label={"Employer"}
                type={"text"}
                editable={props.isEditable} />
            <Text
                display={"block"}
                length={"250"}
                placeholder={"Position title"}
                label={"Position"}
                type={"text"}
                editable={props.isEditable} />
            <DateRange 
                label={"Dates of employment"}
                editable={props.isEditable} />
            <Text
                display={"block"}
                length={"500"}
                placeholder={"Role description"}
                label={"Role Description"}
                type={"textarea"}
                cols={"50"}
                rows={"5"}
                editable={props.isEditable} />
        </fieldset>
    );
}


export default PracticalForm;