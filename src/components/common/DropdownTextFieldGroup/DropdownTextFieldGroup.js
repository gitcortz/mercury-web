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
  onRemove,
  options
}) => {
  const selectOptions = options.map(option => (
    <option key={option.label} value={option.value}>
      {option.label}
    </option>
  ));
  const selectStyle = {
    width: "130px",
    borderTopLeftRadius: "5px",
    borderBottomLeftRadius: "5px",
    borderColor: "#ced4da"
  };
  const rightButtonStyle = {
    borderTopLeftRadius: "0px",
    borderBottomLeftRadius: "0px"
  };

  return (
    <div className="input-group mb-1">
      <select
        style={selectStyle}
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
      <span class="input-group-btn">
        <button
          type="button"
          style={rightButtonStyle}
          class="btn btn-danger btn-lg"
          onClick={onRemove}
        >
          <i class="fa fa-minus" />
        </button>
      </span>
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
  onRemove: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired
};

export default DropdownTextFieldGroup;
