import React from 'react'

class Text extends React.Component {
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
        const type = this.props.type;
        const length = this.props.length;
        const label = this.props.label;
        const display = this.props.display;
        const placeholder = this.props.placeholder;
        const cols = this.props.cols;
        const rows = this.props.rows;
        const value = this.state.value;
        if (editable) {
            if (type === 'text') {
                return (
                    <div className="Text editable">
                        <label>{label}</label>
                        <input 
                            className={display} 
                            type={type} 
                            value={value} 
                            onChange={this.handleChange} 
                            placeholder={placeholder} 
                            maxLength={length}></input>
                    </div>
                );
            } else if (type === 'textarea') {
                return (
                    <div className="Textarea editable">
                        <label>{label}</label>
                        <textarea
                            className={display}
                            value={value}
                            onChange={this.handleChange}
                            placeholder={placeholder}
                            cols={cols}
                            rows={rows}
                            maxLength={length}></textarea>
                    </div>
                );
            }
        } else {
            if (!value) {
                return (
                    <div className="Text notEditable">
                        <label>{label}</label>
                        <p className="italic">{placeholder}</p>
                    </div>  
                );
            } else {
                return (
                    <div className="Text notEditable">
                        <label>{label}</label>
                        <p>{value}</p>
                    </div>
                );
            }
        }
    }
}

export default Text;