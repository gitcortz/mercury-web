import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

const DropdownTextFieldGroup = ({
  names,
  values,
  fieldNames,
  placeholder,
  error,
  info,
  idx,
  onChange,
  options
}) => {
  const selectOptions = options.map(option => (
    <option key={option.label} value={option.value}>
      {option.label}
    </option>
  ));
  const divStyle = {
    width: "130px",
    borderTopLeftRadius: "5px",
    borderBottomLeftRadius: "5px",
    borderColor: "#ced4da"
  };

  return (
    <div className="input-group">
      <select
        style={divStyle}
        className=""
        fieldname={fieldNames.select}
        name={names.select}
        value={values.select}
        data-id={idx}
        onChange={onChange}
      >
        {selectOptions}
      </select>
      <input
        className={classnames("form-control form-control-lg", {
          "is-invalid": error
        })}
        placeholder={placeholder}
        fieldname={fieldNames.textinput}
        name={names.textinput}
        value={values.textinput}
        data-id={idx}
        onChange={onChange}
      />
      {info && <small className="form-text text-muted">{info}</small>}
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

DropdownTextFieldGroup.propTypes = {
  names: PropTypes.object.isRequired,
  values: PropTypes.object.isRequired,
  fieldNames: PropTypes.object.isRequired,
  placeholder: PropTypes.string,
  idx: PropTypes.string,
  info: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired
};

export default DropdownTextFieldGroup;
