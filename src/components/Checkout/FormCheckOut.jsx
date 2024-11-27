const FormCheckout = ({ dataForm, handleChangeInput, handleSubmitForm }) => {
  return (
    <form onSubmit={handleSubmitForm}>
      <label htmlFor="fullname">Nombre completo</label>
      <input
        id="fullname"
        type="text"
        name="fullname"
        value={dataForm.fullname}
        onChange={handleChangeInput}
        required
      />

      <label htmlFor="phone">Teléfono</label>
      <input
        id="phone"
        type="tel"
        name="phone"
        value={dataForm.phone}
        onChange={handleChangeInput}
        required
      />

      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        name="email"
        value={dataForm.email}
        onChange={handleChangeInput}
        required
      />

      <button type="submit">Enviar mi orden</button>
    </form>
  );
};

export default FormCheckout;
