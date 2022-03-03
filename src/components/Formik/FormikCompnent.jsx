import { Formik } from "formik";
import React from "react";

function FormikCompnent({
  initialValues,
  validationSchema,
  onSubmit,
  formRef,
  enableReinitialize,
  children,
}) {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      innerRef={formRef}
      enableReinitialize={enableReinitialize}
    >
      {() => <>{children}</>}
    </Formik>
  );
}

export default FormikCompnent;
