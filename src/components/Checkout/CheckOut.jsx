import { useState, useContext } from "react";
import { CartContext } from "../Cart/CartContext";
import { Timestamp, addDoc, collection, doc, setDoc } from "firebase/firestore";
import db from "../../db/db";
import { Link, useNavigate } from "react-router-dom"; // Importar useNavigate
import validateForm from "../../utils/ValidateForm";
import { toast } from "react-toastify";

const Checkout = () => {
  const [dataForm, setDataForm] = useState({
    fullname: "",
    phone: "",
    email: "",
  });
  const [idOrder, setIdOrder] = useState(null);
  const { cart, totalPrice, deleteCart } = useContext(CartContext);
  const navigate = useNavigate(); // Hook para redirección

  const handleChangeInput = (event) => {
    setDataForm({ ...dataForm, [event.target.name]: event.target.value });
  };

  const handleSubmitForm = async (event) => {
    event.preventDefault();

    const order = {
      buyer: { ...dataForm },
      products: [...cart],
      date: Timestamp.fromDate(new Date()),
      total: totalPrice(),
    };

    try {
      const response = await validateForm(dataForm);
      if (response.status === "error") throw new Error(response.message);

      toast.success("Subiendo orden...");
      const ordersRef = collection(db, "orders");
      const responseDoc = await addDoc(ordersRef, order);

      setIdOrder(responseDoc.id);
      updateStock();

      setTimeout(() => {
        navigate("/"); // Redirige al usuario después de unos segundos
      }, 5000);

    } catch (error) {
      toast.error(error.message);
    }
  };

  const updateStock = () => {
    cart.forEach(({ id, quantity, ...dataProduct }) => {
      const productRef = doc(db, "products", id);
      setDoc(productRef, { ...dataProduct, stock: dataProduct.stock - quantity });
    });

    deleteCart();
  };

  return (
    <div>
      {idOrder === null ? (
        <FormCheckout
          dataForm={dataForm}
          handleChangeInput={handleChangeInput}
          handleSubmitForm={handleSubmitForm}
        />
      ) : (
        <div>
          <h2>¡Su orden se subió correctamente! 😁</h2>
          <p>Por favor guarde su nro de seguimiento: {idOrder}</p>
          <Link to="/">Volver al inicio</Link>
        </div>
      )}
    </div>
  );
};

export default Checkout;
