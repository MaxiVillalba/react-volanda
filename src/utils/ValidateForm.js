import { object, string } from "yup";

const userSchema = object({
  fullname: string().required("Full name is required"),
  phone: string()
    .matches(/^\d{10,15}$/, "Phone number must be between 10-15 digits")
    .required("Phone number is required"),
  email: string().email("Invalid email format").required("Email is required"),
});

const validateForm = async (dataForm) => {
  try {
    await userSchema.validate(dataForm, { abortEarly: false });
    return { status: "success" };
  } catch (error) {
    const errors = error.inner.map((e) => e.message).join(", ");
    return { status: "error", message: errors };
  }
};

export default validateForm;
