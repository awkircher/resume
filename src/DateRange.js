import React from 'react'

class DateRange extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.value,
        };
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(e) {
        this.setState({value: (e.target.value)});
    }

    render() {
        const editable = this.props.editable; //true or false
        const value = this.state.value;
        if (editable) {
            return (
               <div>
                   <input type="number" min="1935" max="2020" placeholder="Year" onChange={this.handleChange} value={value}></input>
               </div> 
            );
        } else {
            if (!value) {
                return (
                    <div>
                        <p>No start date entered, yet.</p>
                    </div>
                );
            } else {
                return (
                    <div>
                        <p>{value}</p>
                    </div>
                );
            }
        }
    }
}

export default DateRange;