import React, { useState } from 'react'
import Edit from './Edit'
import EducationForm from './EducationForm'

function Education(props) {
    const [isEditable, setIsEditable] = useState(true);
    const [addedSections, setAddedSections] = useState([0]);

    function handleChange(edit) {
        setIsEditable(edit);
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
            <EducationForm key={index.toString()} uuid={index.toString()} remove={remove} isEditable={isEditable} />
        );
    const addButton = <button onClick={addNew}>Add</button>
    return (
        <div className="Education">
        <h1>Education</h1>
        <p>Here you can enter where you've studied. Start with the most recent.</p>
        <div className="buttons">
            <span className="addButton">{isEditable ? addButton : ""}</span>
            <Edit 
                current={isEditable}
                toggle={handleChange} />
        </div>
        <form>
            {fieldsets}
        </form>
        </div>
    );
}
  
  export default Education;