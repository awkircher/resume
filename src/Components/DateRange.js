import React from 'react'

class DateRange extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            monthStartValue: "",
            yearStartValue: "",
            monthEndValue: "",
            yearEndValue: "",
            current: false,
            valid: true,
        };
        this.handleMonthStartChange = this.handleMonthStartChange.bind(this);
        this.handleYearStartChange = this.handleYearStartChange.bind(this);
        this.handleMonthEndChange = this.handleMonthEndChange.bind(this);
        this.handleYearEndChange = this.handleYearEndChange.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
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
    handleCheck(e) {
        if (e.target.checked) {
            this.setState({current: true});
        } else {
            this.setState({current: false});
        }
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
        const label = this.props.label;
        const monthStart = this.state.monthStartValue;
        const yearStart = this.state.yearStartValue;
        const monthEnd = this.state.monthEndValue;
        const yearEnd = this.state.yearEndValue;
        const valid = this.state.valid;
        const current = this.state.current;
        const monthEl = <span className="italic">Month</span>;
        const yearEl = <span className="italic">Year</span>;
        if (editable) {
            return (
               <div className="DateRange editable">
                   <label>{label}</label>
                   <fieldset id="rangeStart">
                       <p>Start date</p>
                        <select value={monthStart} onChange={this.handleMonthStartChange}>
                            <option value="Month" defaultValue>Month</option>
                            <option value="January">January</option>
                            <option value="February">February</option>
                            <option value="March">March</option>
                            <option value="April">April</option>
                            <option value="May">May</option>
                            <option value="June">June</option>
                            <option value="July">July</option>
                            <option value="August">August</option>
                            <option value="September">September</option>
                            <option value="October">October</option>
                            <option value="November">November</option>
                            <option value="December">December</option>
                        </select>
                        <input type="number" min="1935" max="2020" placeholder="Year" onChange={this.handleYearStartChange} value={yearStart}></input>
                    </fieldset>
                    <fieldset id="rangeEnd">
                        <p>End date</p>
                        <select value={monthEnd} onChange={this.handleMonthEndChange}>
                            <option value="Month" defaultValue>Month</option>
                            <option value="January">January</option>
                            <option value="February">February</option>
                            <option value="March">March</option>
                            <option value="April">April</option>
                            <option value="May">May</option>
                            <option value="June">June</option>
                            <option value="July">July</option>
                            <option value="August">August</option>
                            <option value="September">September</option>
                            <option value="October">October</option>
                            <option value="November">November</option>
                            <option value="December">December</option>
                        </select>
                        <input type="number" min="1935" max="2020" placeholder="Year" onChange={this.handleYearEndChange} value={yearEnd}></input>
                        <input className="currentCheck" type="checkbox" checked={current} onChange={this.handleCheck}></input>
                        <p className="inline">Current</p>
                    </fieldset>
                    <div className="error">{valid ? "" : "Enter a valid date range"}</div>
               </div> 
            );
        } else {
            if (current) {
                return (
                    <div className="DateRange notEditable">
                        <label>{label}</label>
                        <p className="inline month">{monthStart ? monthStart : monthEl}</p>
                        <p className="inline">{yearStart ? yearStart : yearEl}</p>
                        <div className="arrow"></div>
                        <p className="inline">Current</p>
                    </div>
                 );
            } else {
                return (
                    <div className="DateRange notEditable">
                        <label>{label}</label>
                        <p className="inline month">{monthStart ? monthStart : monthEl}</p>
                        <p className="inline">{yearStart ? yearStart : yearEl}</p>
                        <div className="arrow"></div>
                        <p className="inline month">{monthEnd ? monthEnd : monthEl}</p>
                        <p className="inline">{yearEnd ? yearEnd : yearEl}</p>
                    </div>
                 );
            }
        }
    }
}

export default DateRange;