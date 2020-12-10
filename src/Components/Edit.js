import React from 'react'

class Edit extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange() {
        this.props.toggle(!this.props.current); //toggle prop contains the handleChange method from Parent section
    }
    
    render() {
        const editable = this.props.current;
        if (editable) {
            return (
                <div className="Save">
                  <input type="button" onClick={this.handleChange} value="Save"></input>
                </div>
            );
        } else {
            return (
                <div className="Edit">
                  <input type="button" onClick={this.handleChange} value="Edit"></input>
                </div>
            );
        }
    }
}

export default Edit;
