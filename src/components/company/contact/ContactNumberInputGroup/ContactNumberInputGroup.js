import React from "react";
import TextFieldGroup from "../../../common/TextFieldGroup";
import SelectListGroup from "../../../common/SelectListGroup";
import DropdownTextFieldGroup from "../../../common/DropdownTextFieldGroup";

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
      <div key={idx} className="input-group">
        <DropdownTextFieldGroup
          names={{ select: contactLabelId, textinput: contactPhoneId }}
          fieldNames={{ select: "label", textinput: "phone_number" }}
          values={{
            select: props.numbers[idx].label,
            textinput: props.numbers[idx].value.phone_number
          }}
          idx={idx}
          options={optionNumberLabels}
          onChange={props.onChange}
          placeholder="+1 (999) 999 9999"
        />
      </div>
    );
  });
};

export default ContactNumberInputGroup;
