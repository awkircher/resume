import React from 'react'
import Edit from './Edit'
import TextShort from './TextShort'
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
            <form>
                <fieldset className="container">
                    <Edit 
                        current={this.state.isEditable}
                        toggle={this.handleChange} />
                    <TextShort 
                        display={"block"}
                        placeholder={"Employer"}
                        editable={this.state.isEditable} />
                    <TextShort 
                        display={"block"}
                        placeholder={"Position title"}
                        editable={this.state.isEditable} />
                    <DateRange 
                        editable={this.state.isEditable} />
                    <input className="block" type="text" placeholder="Role description"></input>
                </fieldset>
            </form>
          </div>
        );
      }
    }
  
  export default Practical;