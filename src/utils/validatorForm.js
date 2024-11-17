import { mixed, object, string } from "yup";

// Definición del esquema de validación con yup
let userSchema = object({
  fullname: string().required("Full name is required"),  // Agregar mensaje personalizado
  phone: mixed().required("Phone number is required"),  // Agregar mensaje personalizado
  email: string().email("Invalid email format").required("Email is required"),  // Agregar validación y mensaje
});

const validateForm = async (dataForm) => {
  try {
    // Validar los datos del formulario
    await userSchema.validate(dataForm, { abortEarly: false }); // `abortEarly: false` para obtener todos los errores
    return { status: "success" };
  } catch (error) {
    // Si hay un error, devolver un objeto con el status y el mensaje
    return { status: "error", message: error.message };
  }
};

export default validateForm