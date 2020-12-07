import React from 'react'

class Edit extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange() {
        this.props.toggle(!this.props.current); //toggle prop contains the handleChange method from Parent section
        console.log(`before ${this.props.current} and after ${!this.props.current}`)
    }
    
    render() {
        return (
            <div className="Edit">
              <input type="button" onClick={this.handleChange} value="Edit"></input>
            </div>
        );
    }
}

export default Edit;
