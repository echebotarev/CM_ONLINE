import React, { Component } from "react";

class Select extends Component {
  render() {
    let { options, selected, onChange, id } = this.props;
    selected = selected ? selected : options[0].value;

    return (
      <div className="input-selected">
        <select
          size="0"
          value={selected}
          onChange={e => onChange(id, e.target.value)}
        >
          {options.map(option => (
            <option value={option.value} key={option.value}>
              {option.displayName}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default Select;
