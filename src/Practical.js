import React from 'react'
import Edit from './Edit'
import PracticalForm from './PracticalForm'

class Practical extends React.Component {
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
            <PracticalForm key={index.toString()} uuid={index.toString()} remove={this.remove} isEditable={this.state.isEditable} />
        );
        const addButton = <button onClick={this.addNew}>Add</button>
        return (
            <div className="Practical">
                <h1>Practical Experience</h1>
                <p>List your past employers, and describe what you did in each role.</p>
                <div className="buttons">
                    <span className="addButton">{this.state.isEditable ? addButton : ""}</span>
                    <Edit 
                        current={this.state.isEditable}
                        toggle={this.handleChange} />
                </div>
                <form className="generatedForm">
                    {fieldsets}
                </form>
            </div>
            );
        }
    }
  
  export default Practical;