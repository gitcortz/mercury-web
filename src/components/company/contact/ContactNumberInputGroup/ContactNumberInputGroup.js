import React from "react";
import TextFieldGroup from "../../../common/TextFieldGroup";
import SelectListGroup from "../../../common/SelectListGroup";
import DropdownInputGroup from "../../../common/DropdownInputGroup";

const ContactNumberInputGroup = props => {
  //options to number label
  const optionNumberLabels = [
    { label: "Home Phone", value: "Home" },
    { label: "Office Phone", value: "Office" },
    { label: "Mobile", value: "Mobile" }
  ];

  return props.numbers.map((val, idx) => {
    let contactLabelId = `contactLabel-${idx}`,
      contactPhoneId = `contactPhoneId-${idx}`;

    return (
      <div key={idx}>
        <DropdownInputGroup />
        <label htmlFor={contactLabelId}>{`Contact #${idx + 1}`}</label>
        <SelectListGroup
          name={contactLabelId}
          fieldName="label"
          value={props.numbers[idx].label}
          idx={idx}
          options={optionNumberLabels}
          onChange={props.onChange}
        />
        <label htmlFor={contactPhoneId}>Phone :</label>
        <TextFieldGroup
          placeholder="Phone Number"
          name={contactPhoneId}
          fieldName="phone_number"
          idx={idx}
          value={props.numbers[idx].value.phone_number}
          onChange={props.onChange}
        />
      </div>
    );
  });
};

export default ContactNumberInputGroup;
