import React from 'react'
import Edit from './Edit'
import Text from './Text'
import Email from './Email'
import Phone from './Phone'

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
                    <Text 
                        display={"block"}
                        length={"250"}
                        placeholder={"First and last name"}
                        label={"Name"}
                        editable={this.state.isEditable} />
                    <Email
                        display={"block"}
                        placeholder={"Email address"}
                        label={"Email"}
                        editable={this.state.isEditable} />
                    <Phone 
                        label={"Phone"}
                        display={"inline"}
                        editable={this.state.isEditable} />
                </fieldset>
            </form>
          </div>
        );
      }
    }
  
  export default General;