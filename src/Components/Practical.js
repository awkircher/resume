import React, { useState } from 'react'
import Edit from './Edit'
import PracticalForm from './PracticalForm'

function Practical() {
    const [isEditable, setIsEditable] = useState(true);
    const [addedSections, setAddedSections] = useState([0]); 

    function handleChange(edit) {
        setIsEditable(edit)
    }

    function addNew() {
        const length = addedSections.length;
        const next = length;
        setAddedSections([...addedSections, next]);
    }

    function remove(key) {
        const update = addedSections.filter((section) => section.toString() !== key);
        setAddedSections(update);
    }

    const fieldsets = addedSections.map((index) =>
            <PracticalForm key={index.toString()} uuid={index.toString()} remove={remove} isEditable={isEditable} />
        );
    const addButton = <button onClick={addNew}>Add</button>
    
    return (
        <div className="Practical">
            <h1>Practical Experience</h1>
            <p>List your past employers, and describe what you did in each role.</p>
            <div className="buttons">
                <span className="addButton">{isEditable ? addButton : ""}</span>
                <Edit 
                    current={isEditable}
                    toggle={handleChange} />
            </div>
            <form className="generatedForm">
                {fieldsets}
            </form>
        </div>
        );
    }
  
  export default Practical;