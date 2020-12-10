import React from 'react'
import Text from './Text'
import DateRange from './DateRange'

class PracticalForm extends React.Component {
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
                    placeholder={"Employer"}
                    label={"Employer"}
                    type={"text"}
                    editable={this.props.isEditable} />
                <Text
                    display={"block"}
                    length={"250"}
                    placeholder={"Position title"}
                    label={"Position"}
                    type={"text"}
                    editable={this.props.isEditable} />
                <DateRange 
                    label={"Dates of employment"}
                    editable={this.props.isEditable} />
                <Text
                    display={"block"}
                    length={"500"}
                    placeholder={"Role description"}
                    label={"Role Description"}
                    type={"textarea"}
                    cols={"50"}
                    rows={"5"}
                    editable={this.props.isEditable} />
            </fieldset>
        );
    }
}

export default PracticalForm;