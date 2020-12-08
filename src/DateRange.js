import React from 'react'

class DateRange extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            monthStartValue: "",
            yearStartValue: "",
            monthEndValue: "",
            yearEndValue: "",
            valid: true,
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
        this.validate(e.target.value, this.state.yearEndValue);
    }
    handleMonthEndChange(e) {
        this.setState({monthEndValue: (e.target.value)});
    }
    handleYearEndChange(e) {
        this.setState({yearEndValue: (e.target.value)});
        this.validate(this.state.yearStartValue, e.target.value);
    }
    validate(start, end) {
        if (start === "" || end === "") {
            return;
        }
        else if (end >= start) {
            this.setState({valid: true});
        } else {
            this.setState({valid: false});
        }
    }

    render() {
        const editable = this.props.editable; //true or false
        const monthStart = this.state.monthStartValue;
        const yearStart = this.state.yearStartValue;
        const monthEnd = this.state.monthEndValue;
        const yearEnd = this.state.yearEndValue;
        const valid = this.state.valid;
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
                        <div className="error">{valid ? "" : "Enter a valid date range"}</div>
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
                        <div className="error">{valid ? "" : "Enter a valid date range"}</div>
                    </fieldset>
               </div> 
            );
        } else {
            return (
                <div>
                    <p className="inline">{monthStart ? monthStart : "No starting month selected, yet."}</p>
                    <p className="inline">{yearStart ? yearStart : "No starting year entered, yet."}</p>
                    <p className="inline">{monthEnd ? monthEnd : "No ending month entered, yet."}</p>
                    <p className="inline">{yearEnd ? yearEnd : "No ending year entered, yet."}</p>
                </div>
             );
        }
    }
}

export default DateRange;