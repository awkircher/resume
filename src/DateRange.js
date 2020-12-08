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
        this.validate(e.target.value, this.state.yearStartValue, this.state.monthEndValue, this.state.yearEndValue);
    }
    handleYearStartChange(e) {
        this.setState({yearStartValue: (e.target.value)});
        this.validate(this.state.monthStartValue, e.target.value, this.state.monthEndValue, this.state.yearEndValue);
    }
    handleMonthEndChange(e) {
        this.setState({monthEndValue: (e.target.value)});
        this.validate(this.state.monthStartValue, this.state.yearStartValue, e.target.value, this.state.yearEndValue);
    }
    handleYearEndChange(e) {
        this.setState({yearEndValue: (e.target.value)});
        this.validate(this.state.monthStartValue, this.state.yearStartValue, this.state.monthEndValue, e.target.value);
    }
    validate(startMonth, startYear, endMonth, endYear) {
        console.log("you called validate");
        const formatYear = /(19|20)\d\d/;
        const validStart = formatYear.test(startYear);
        const validEnd = formatYear.test(endYear);
        if (startYear === "" || endYear === "") {
            return;
        }
        if (endYear === startYear && validStart && validEnd) {
            const startDate = new Date(`${startMonth}, ${startYear}`);
            const endDate = new Date(`${endMonth}, ${endYear}`);
            console.log(startDate, endDate);
            if (startDate.getMonth() <= endDate.getMonth()) {
                console.log("start month is less than end month");
                this.setState({valid: true})
            } else {
                console.log("start month is greater than end month");
                this.setState({valid: false})
            }
        }
        else if (endYear >= startYear && validStart && validEnd) {
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
                    <div className="error">{valid ? "" : "Enter a valid date range"}</div>
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