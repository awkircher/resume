import React from 'react'
import Edit from './Edit'
import TextShort from './TextShort'

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
                        setDisplay={"block"}
                        setPlaceholder={"Employer"}
                        setEditable={this.state.isEditable} />
                    <TextShort 
                        setDisplay={"block"}
                        setPlaceholder={"Position title"}
                        setEditable={this.state.isEditable} />
                    <input className="block" type="text" placeholder="Role description"></input>
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
  
  export default Practical;