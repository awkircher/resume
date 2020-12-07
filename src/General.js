import React from 'react'
import Edit from './Edit'

class General extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            isEditable: true
        }
    }
    handleChange(edit) {
        this.setState({isEditable: edit})
        console.log(`General component is editable? ${this.state.isEditable}`)
    }

    render() {
      return (
          <div className="General" id="General">
            <h1>General Information</h1>
            <p>Use this section to include your name and contact information.</p>
            <form>
                <fieldset className="container">
                    <Edit 
                        current={this.state.isEditable}
                        toggle={this.handleChange} />
                    <input className="block" type="text" placeholder="First and last name"></input>
                    <input className="block" type="email" placeholder="Email address"></input>
                    <fieldset>
                        <input className="inline" type="text" placeholder="555"></input>
                        <input className="inline" type="text" placeholder="321"></input>
                        <input className="inline" type="text" placeholder="4567"></input>
                    </fieldset>
                </fieldset>
            </form>
          </div>
        );
      }
    }
  
  export default General;