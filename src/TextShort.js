import React from 'react'

class TextShort extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.value,
        };
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange() {
        //this.props.toggle(!this.props.current);
        console.log('TextShort changed!')
    }

    render() {
        const editable = this.props.setEditable; //true or false
        const display = this.props.setDisplay;
        const placeholder = this.props.setPlaceholder;
        const value = this.state.value;
        if (editable) {
            return (
                <div className="TextShort editable">
                    <input className={display} type="text" value={value} onBlur={this.handleChange} placeholder={placeholder}></input>
                </div>
            );
        } else {
            return (
                <div className="TextShort notEditable">
                    <input className={display} type="text" value={value}></input>
                </div>
            );
        }
    }
}

export default TextShort;