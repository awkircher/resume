import React from 'react'

class DateRange extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            monthStartValue: "",
            yearStartValue: "",
            monthEndValue: "",
            yearEndValue: "",
        };
        this.handleMonthStartChange = this.handleMonthStartChange.bind(this);
        this.handleYearStartChange = this.handleYearStartChange.bind(this);
        this.handleMonthEndChange = this.handleMonthEndChange.bind(this);
        this.handleYearEndChange = this.handleYearEndChange.bind(this);
    }
    handleMonthStartChange(e) {
        this.setState({monthStartValue: (e.target.value)});
    }
    handleYearStartChange(e) {
        this.setState({yearStartValue: (e.target.value)});
    }
    handleMonthEndChange(e) {
        this.setState({monthEndValue: (e.target.value)});
    }
    handleYearEndChange(e) {
        this.setState({yearEndValue: (e.target.value)});
    }

    render() {
        const editable = this.props.editable; //true or false
        const monthStart = this.state.monthStartValue;
        const yearStart = this.state.yearStartValue;
        const monthEnd = this.state.monthEndValue;
        const yearEnd = this.state.yearEndValue;
        if (editable) {
            return (
               <div>
                   <fieldset>
                        <input list="months" value={monthStart} onChange={this.handleMonthStartChange} />
                            <datalist id="months">
                                <option value="January" />
                                <option value="February" />
                                <option value="March" />
                                <option value="April" />
                                <option value="May" />
                                <option value="June" />
                                <option value="July" />
                                <option value="August" />
                                <option value="September" />
                                <option value="October" />
                                <option value="November" />
                                <option value="December" />
                            </datalist>
                        <input type="number" min="1935" max="2020" placeholder="Year" onChange={this.handleYearStartChange} value={yearStart}></input>
                    </fieldset>
                    <fieldset>
                        <input list="months" value={monthEnd} onChange={this.handleMonthEndChange} />
                            <datalist id="months">
                                <option value="January" />
                                <option value="February" />
                                <option value="March" />
                                <option value="April" />
                                <option value="May" />
                                <option value="June" />
                                <option value="July" />
                                <option value="August" />
                                <option value="September" />
                                <option value="October" />
                                <option value="November" />
                                <option value="December" />
                            </datalist>
                        <input type="number" min="1935" max="2020" placeholder="Year" onChange={this.handleYearEndChange} value={yearEnd}></input>
                    </fieldset>
               </div> 
            );
        } else {
            return (
                <div>
                    <p className="inline">{monthStart ? monthStart : "No start date entered, yet."}</p>
                    <p className="inline">{yearStart ? yearStart : "No start date entered, yet."}</p>
                    <p className="inline">{monthEnd ? monthEnd : "No start date entered, yet."}</p>
                    <p className="inline">{yearEnd ? yearEnd : "No start date entered, yet."}</p>
                </div>
         
             );
        }
    }
}

export default DateRange;