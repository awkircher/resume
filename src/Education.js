import React from 'react'
import Edit from './Edit'
import EducationForm from './EducationForm'

class Education extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.addNew = this.addNew.bind(this);
        this.remove = this.remove.bind(this);
        this.state = {
            isEditable: true,
            addedSections: [0], 
        }
    }

    handleChange(edit) {
        this.setState({isEditable: edit})
        console.log(`Education component is editable? ${this.state.isEditable}`)
    }

    addNew() {
        const length = this.state.addedSections.length;
        const next = length;
        this.setState({addedSections: [...this.state.addedSections, next]})
    }

    remove(key) {
        const addedSections = this.state.addedSections;
        const update = addedSections.filter((section) => section.toString() !== key);
        this.setState({addedSections: update})
    }

    render() {
        const fieldsets = this.state.addedSections.map((index) =>
            <EducationForm key={index.toString()} uuid={index.toString()} remove={this.remove} isEditable={this.state.isEditable} />
        );
        const addButton = <button onClick={this.addNew}>Add</button>
      return (
          <div className="Education">
            <h1>Education</h1>
            <p>Here you can enter where you've studied. Start with the most recent.</p>
            <div className="buttons">
                <span className="addButton">{this.state.isEditable ? addButton : ""}</span>
                <Edit 
                    current={this.state.isEditable}
                    toggle={this.handleChange} />
            </div>
            <form>
                {fieldsets}
            </form>
          </div>
        );
      }
    }
  
  export default Education;