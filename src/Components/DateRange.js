import React, { useState } from 'react'

function DateRange(props) {
    const [monthStart, setMonthStart] = useState("");
    const [yearStart, setYearStart] = useState("");
    const [monthEnd, setMonthEnd] = useState("");
    const [yearEnd, setYearEnd] = useState("");
    const [current, setCurrent] = useState(false);
    const [valid, setValid] = useState(true);
    
    function validate(startMonth, startYear, endMonth, endYear) {
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
                setValid(true);
            } else {
                console.log("start month is greater than end month");
                setValid(false);
            }
        }
        else if (endYear >= startYear && validStart && validEnd) {
            setValid(true);
        } else {
            setValid(false);
        }
    }

    function handleMonthStartChange(e) {
        setMonthStart(e.target.value);
        validate(e.target.value, yearStart, monthEnd, yearEnd);
    }
    function handleYearStartChange(e) {
        setYearStart(e.target.value);
        validate(monthStart, e.target.value, monthEnd, yearEnd);
    }
    function handleMonthEndChange(e) {
        setMonthEnd(e.target.value);
        validate(monthStart, yearStart, e.target.value, yearEnd);
    }
    function handleYearEndChange(e) {
        setYearEnd(e.target.value);
        validate(monthStart, yearStart, monthEnd, e.target.value);
    }
    function handleCheck(e) {
        if (e.target.checked) {
            setCurrent(true);
        } else {
            setCurrent(false);
        }
    }

    const monthEl = <span className="italic">Month</span>;
    const yearEl = <span className="italic">Year</span>;
    if (props.editable) {
        return (
            <div className="DateRange editable">
                <label>{props.label}</label>
                <fieldset id="rangeStart">
                    <p>Start date</p>
                    <select value={monthStart} onChange={handleMonthStartChange}>
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
                    <input type="number" min="1935" max="2020" placeholder="Year" onChange={handleYearStartChange} value={yearStart}></input>
                </fieldset>
                <fieldset id="rangeEnd">
                    <p>End date</p>
                    <select value={monthEnd} onChange={handleMonthEndChange}>
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
                    <input type="number" min="1935" max="2020" placeholder="Year" onChange={handleYearEndChange} value={yearEnd}></input>
                    <input className="currentCheck" type="checkbox" checked={current} onChange={handleCheck}></input>
                    <p className="inline">Current</p>
                </fieldset>
                <div className="error">{valid ? "" : "Enter a valid date range"}</div>
            </div> 
        );
    } else {
        if (current) {
            return (
                <div className="DateRange notEditable">
                    <label>{props.label}</label>
                    <p className="inline month">{monthStart ? monthStart : monthEl}</p>
                    <p className="inline">{yearStart ? yearStart : yearEl}</p>
                    <div className="arrow"></div>
                    <p className="inline">Current</p>
                </div>
                );
        } else {
            return (
                <div className="DateRange notEditable">
                    <label>{props.label}</label>
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

export default DateRange;