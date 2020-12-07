import React from 'react'
import Edit from './Edit'

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
            <form>
                <fieldset className="container">
                    <Edit 
                        current={this.state.isEditable}
                        toggle={this.handleChange} />
                    <input className="block" type="text" placeholder="Institution name"></input>
                    <input className="block" type="text" placeholder="Course of study"></input>
                    <fieldset>
                        <input className="inline" type="text" placeholder="Month"></input>
                        <input className="inline" type="text" placeholder="Year"></input>
                    </fieldset>
                    <fieldset>
                        <input className="inline" type="text" placeholder="Month"></input>
                        <input className="inline" type="text" placeholder="Year"></input>
                    </fieldset>
                </fieldset>
            </form>
          </div>
        );
      }
    }
  
  export default Education;