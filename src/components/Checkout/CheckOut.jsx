import { useState, useContext } from "react";
import { CartContext } from "../Cart/CartContext";
import { Timestamp, addDoc, collection, doc, updateDoc } from "firebase/firestore";
import db from "../../db/db";
import { Link, useNavigate } from "react-router-dom";
import validateForm from "../../utils/ValidateForm";
import { toast } from "react-toastify";
import FormCheckout from "./FormCheckout";

const Checkout = () => {
  const [dataForm, setDataForm] = useState({
    fullname: "",
    phone: "",
    email: "",
  });
  const [idOrder, setIdOrder] = useState(null);
  const { cart, totalPrice, deleteCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleChangeInput = ({ target: { name, value } }) => {
    setDataForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitForm = async (event) => {
    event.preventDefault();

    const order = {
      buyer: dataForm,
      products: cart,
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
      await updateStock();
      deleteCart();

      setTimeout(() => navigate("/"), 5000);
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    }
  };

  const updateStock = async () => {
    const batchUpdates = cart.map(async ({ id, quantity, stock }) => {
      const productRef = doc(db, "products", id);
      await updateDoc(productRef, { stock: stock - quantity });
    });
    await Promise.all(batchUpdates);
  };

  return (
    <div>
      {idOrder ? (
        <div>
          <h2>¡Su orden se subió correctamente! 😁</h2>
          <p>Por favor guarde su número de seguimiento: {idOrder}</p>
          <Link to="/">Volver al inicio</Link>
        </div>
      ) : (
        <FormCheckout
          dataForm={dataForm}
          handleChangeInput={handleChangeInput}
          handleSubmitForm={handleSubmitForm}
        />
      )}
    </div>
  );
};

export default Checkout;
