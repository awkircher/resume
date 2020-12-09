import React from 'react'
import Edit from './Edit'
import Text from './Text'
import DateRange from './DateRange'

class Education extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            isEditable: true
        }
    }

    handleChange(edit) {
        this.setState({isEditable: edit})
        console.log(`Education component is editable? ${this.state.isEditable}`)
    }

    render() {
      return (
          <div className="Education">
            <h1>Education</h1>
            <p>Here you can enter where you've studied. Start with the most recent.</p>
            <Edit 
                current={this.state.isEditable}
                toggle={this.handleChange} />
            <form>
                <fieldset className="container">
                    <Text 
                        display={"block"}
                        length={"250"}
                        placeholder={"Institution"}
                        label={"Institution"}
                        editable={this.state.isEditable} />
                    <Text 
                        display={"block"}
                        length={"250"}
                        placeholder={"Course of study"}
                        label={"Course of study"}
                        editable={this.state.isEditable} />
                    <DateRange 
                        label={"Dates of attendance"}
                        editable={this.state.isEditable} />
                </fieldset>
            </form>
          </div>
        );
      }
    }
  
  export default Education;