import React from 'react'
import Edit from './Edit'
import Text from './Text'
import DateRange from './DateRange'

class Practical extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            isEditable: true
        }
    }

    handleChange(edit) {
        this.setState({isEditable: edit})
        console.log(`Practical component is editable? ${this.state.isEditable}`)
    }

    render() {
      return (
          <div className="Practical">
            <h1>Practical Experience</h1>
            <p>List your past employers, and describe what you did in each role.</p>
            <Edit 
                current={this.state.isEditable}
                toggle={this.handleChange} />
            <form>
                <fieldset className="container">
                    <Text 
                        display={"block"}
                        length={"250"}
                        placeholder={"Employer"}
                        label={"Employer"}
                        type={"text"}
                        editable={this.state.isEditable} />
                    <Text
                        display={"block"}
                        length={"250"}
                        placeholder={"Position title"}
                        label={"Position"}
                        type={"text"}
                        editable={this.state.isEditable} />
                    <DateRange 
                        label={"Dates of employment"}
                        editable={this.state.isEditable} />
                    <Text
                        display={"block"}
                        length={"500"}
                        placeholder={"Role description"}
                        label={"Role Description"}
                        type={"textarea"}
                        cols={"50"}
                        rows={"5"}
                        editable={this.state.isEditable} />
                </fieldset>
            </form>
          </div>
        );
      }
    }
  
  export default Practical;