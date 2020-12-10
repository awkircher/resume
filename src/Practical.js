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
            addedSections: [], 
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

    remove(array) {
        this.setState({addedSections: array})
    }

    render() {
        const fieldsets = this.state.addedSections.map((index) =>
            <PracticalForm key={index.toString()} isEditable={this.state.isEditable} />
        );
        return (
            <div className="Practical">
                <h1>Practical Experience</h1>
                <p>List your past employers, and describe what you did in each role.</p>
                <button onClick={this.addNew}>Add</button>
                <button onClick={() => this.remove([0,1])}>Remove</button>
                <Edit 
                    current={this.state.isEditable}
                    toggle={this.handleChange} />
                <form className="generatedForm">
                    {fieldsets}
                </form>
            </div>
            );
        }
    }
  
  export default Practical;