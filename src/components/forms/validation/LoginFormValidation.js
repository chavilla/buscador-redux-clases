const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "Debes ingresar un email";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Correo no válido";
  }
  if (!values.password) {
    errors.password = "Debes ingresar una contraseña";
  }
  return errors;
};

export default validate;
