import React from 'react';

function Edit(props) {
    function handleChange() {
        props.toggle(!props.current); //toggle prop contains the handleChange method from Parent section
    }
    
    const editable = props.current;
        if (editable) {
            return (
                <div className="Save">
                  <input type="button" onClick={handleChange} value="Save"></input>
                </div>
            );
        } else {
            return (
                <div className="Edit">
                  <input type="button" onClick={handleChange} value="Edit"></input>
                </div>
            );
        }
    }

export default Edit;
