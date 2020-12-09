import React from 'react'

class Phone extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            areaCodeValue: "",
            exchangeCodeValue: "",
            lineCodeValue: "",
            valid: true,
        };
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(e, code) {
        this.validate(e.target.value);
        this.setState({[code + 'CodeValue']: (e.target.value)});
    }

    validate(number) {
        const pattern = /^[0-9]*$/;
        const valid = pattern.test(number);
        this.setState({valid: valid});
    }

    render() {
        const editable = this.props.editable; //true or false
        const label = this.props.label;
        const display = this.props.display;
        const area = this.state.areaCodeValue;
        const exchange = this.state.exchangeCodeValue;
        const line = this.state.lineCodeValue;
        const areaEl = <span className="italic">(Area)</span>;
        const excEl = <span className="italic">&nbsp;###-</span>;
        const lineEl = <span className="italic">####</span>
        const valid = this.state.valid;
        if (editable) {
            return (
                <div className="Phone editable">
                    <label>{label}</label>
                    <fieldset>
                            <input className="inline" type="text" value={area} maxLength="3" placeholder="Area" onChange={(event) => this.handleChange(event, "area")}></input>
                            <input className="inline" type="text" value={exchange} maxLength="3" placeholder="###" onChange={(event) => this.handleChange(event, "exchange")}></input>
                            <input className="inline" type="text" value={line} maxLength="4" placeholder="####" onChange={(event) => this.handleChange(event, "line")}></input>
                    </fieldset>
                    <div className="error">{valid ? "" : "Enter a valid phone number"}</div>
                </div>
            );
        } else {
            return (
                <div className="Phone notEditable">
                    <label>{label}</label>
                    <p className={display}>{area ? "(" + area + ") " : areaEl}</p>
                    <p className={display}>{exchange ? exchange + "-" : excEl}</p>
                    <p className={display}>{line ? line : lineEl}</p>
                </div>
            );
        }
    }
}

export default Phone;