import React from 'react'

class TextShort extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.value,
        };
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(e) {
        this.setState({value: (e.target.value)});
    }

    render() {
        const editable = this.props.editable; //true or false
        const display = this.props.display;
        const placeholder = this.props.placeholder;
        const value = this.state.value;
        if (editable) {
            return (
                <div className="TextShort editable">
                    <input className={display} type="text" value={value} onChange={this.handleChange} placeholder={placeholder}></input>
                </div>
            );
        } else {
            if (!value) {
                return (
                    <div className="TextShort notEditable">
                        <p>Nothing entered, yet.</p>
                    </div>  
                );
            } else {
                return (
                    <div className="TextShort notEditable">
                        <p>{value}</p>
                    </div>
                );
            }
        }
    }
}

export default TextShort;