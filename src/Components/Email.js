import React from 'react'

class Email extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            valid: true,
        };
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(e) {
        this.validate(e.target.value);
        this.setState({value: (e.target.value)});
    }

    validate(email) {
        const pattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        const valid = pattern.test(email);
        this.setState({valid: valid});
    }

    render() {
        const editable = this.props.editable; //true or false
        const label = this.props.label;
        const display = this.props.display;
        const placeholder = this.props.placeholder;
        const value = this.state.value;
        const valid = this.state.valid;
        if (editable) {
            return (
                <div className="Email editable">
                    <label>{label}</label>
                    <input className={display} type="text" value={value} onChange={this.handleChange} placeholder={placeholder}></input>
                    <div className="error">{valid ? "" : "Enter a valid email address"}</div>
                </div>
            );
        } else {
            if (!value) {
                return (
                    <div className="Email notEditable">
                        <label>{label}</label>
                        <p className="italic">{placeholder}</p>
                    </div>  
                );
            } else {
                return (
                    <div className="Email notEditable">
                        <label>{label}</label>
                        <p>{value}</p>
                    </div>
                );
            }
        }
    }
}

export default Email;