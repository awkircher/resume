import React, { useState } from 'react'
import Edit from './Edit'
import Text from './Text'
import Email from './Email'
import Phone from './Phone'

function General() {
    const [isEditable, setIsEditable] = useState(true);
    function handleChange(edit) {
        setIsEditable(edit)
        console.log(`General component is editable? ${isEditable}`)
    }

    return (
        <div className="General" id="General">
        <h1>General Information</h1>
        <p>Use this section to include your name and contact information.</p>
        <Edit 
            current={isEditable}
            toggle={handleChange} />
        <form>
            <fieldset className="container">
                <Text 
                    display={"block"}
                    length={"250"}
                    placeholder={"First and last name"}
                    type={"text"}
                    label={"Name"}
                    editable={isEditable} />
                <Email
                    display={"block"}
                    placeholder={"Email address"}
                    label={"Email"}
                    editable={isEditable} />
                <Phone 
                    label={"Phone"}
                    display={"inline"}
                    editable={isEditable} />
            </fieldset>
        </form>
        </div>
    );
}
  
  export default General;