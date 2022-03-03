import { useFormikContext } from "formik";
import React from "react";
import ButtonComponent from "../Button/ButtonComponent";
import TextAreaComponent from "../InputComponent/TextAreaComponent";
import TextFieldInput from "../InputComponent/TextFieldInput";

function FormikController(props) {
  const { control, ...rest } = props;
  const { setFieldValue, handleSubmit } = useFormikContext();
  switch (control) {
    case "input":
      return <TextFieldInput setFieldValue={setFieldValue} {...rest} />;
    case "textarea":
      return <TextAreaComponent setFieldValue={setFieldValue} {...rest} />;
    case "submit":
      return <ButtonComponent onClick={handleSubmit} {...rest} />;

    default:
      return null;
  }
}

export default FormikController;
