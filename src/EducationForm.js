import React from 'react'
import Text from './Text'
import DateRange from './DateRange'

class EducationForm extends React.Component {
    constructor(props) {
        super(props);
        this.remove = this.remove.bind(this);
    }

    remove(e) {
        const key = this.props.uuid;
        e.preventDefault();
        this.props.remove(key);
    }

    render() {
        const key = (this.props.uuid) > 0;
        const removeButton = <button onClick={this.remove}>Remove</button>;
        return (
            <fieldset className="container">
                <span className="removeButton">{key ? removeButton : ""}</span>
                <Text 
                    display={"block"}
                    length={"250"}
                    placeholder={"Institution"}
                    type={"text"}
                    label={"Institution"}
                    editable={this.props.isEditable} />
                <Text 
                    display={"block"}
                    length={"250"}
                    placeholder={"Course of study"}
                    type={"text"}
                    label={"Course of study"}
                    editable={this.props.isEditable} />
                <DateRange 
                    label={"Dates of attendance"}
                    editable={this.props.isEditable} />
            </fieldset>
        );
    }
}

export default EducationForm;