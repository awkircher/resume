import React from 'react'
import Edit from './Edit'
import TextShort from './TextShort'
import Email from './Email'

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
            <Edit 
                current={this.state.isEditable}
                toggle={this.handleChange} />
            <form>
                <fieldset className="container">
                    <TextShort 
                        display={"block"}
                        placeholder={"First and last name"}
                        label={"Name"}
                        editable={this.state.isEditable} />
                    <Email
                        display={"block"}
                        placeholder={"Email address"}
                        label={"Email"}
                        editable={this.state.isEditable} />
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