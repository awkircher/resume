import React from 'react'

class TextShort extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
        };
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(e) {
        this.setState({value: (e.target.value)});
    }

    render() {
        const editable = this.props.editable; //true or false
        const label = this.props.label;
        const display = this.props.display;
        const placeholder = this.props.placeholder;
        const value = this.state.value;
        if (editable) {
            return (
                <div className="TextShort editable">
                    <label>{label}</label>
                    <input className={display} type="text" value={value} onChange={this.handleChange} placeholder={placeholder}></input>
                </div>
            );
        } else {
            if (!value) {
                return (
                    <div className="TextShort notEditable">
                        <label>{label}</label>
                        <p className="italic">{placeholder}</p>
                    </div>  
                );
            } else {
                return (
                    <div className="TextShort notEditable">
                        <label>{label}</label>
                        <p>{value}</p>
                    </div>
                );
            }
        }
    }
}

export default TextShort;