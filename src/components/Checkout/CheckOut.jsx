import { useState, useContext } from "react"; // Compactamos las importaciones
import FormCheckout from "./FormCheckOut.jsx";
import { CartContext } from "../../context/CartContext";
import { Timestamp, addDoc, collection, doc, setDoc } from "firebase/firestore";
import db from "../../db/db.js";
import { Link } from "react-router-dom";
import validateForm from "../../utils/validatorForm.js";
import { toast } from "react-toastify";

const Checkout = () => {
  const [dataForm, setDataForm] = useState({
    fullname: "",
    phone: "",
    email: "",
  });
  const [idOrder, setIdOrder] = useState(null);
  const { cart, totalPrice, deleteCart } = useContext(CartContext);

  // Maneja los cambios en el formulario
  const handleChangeInput = (event) => {
    setDataForm({ ...dataForm, [event.target.name]: event.target.value });
  };

  // Maneja el envío del formulario
  const handleSubmitForm = async (event) => {
    event.preventDefault();

    if (cart.length === 0) {
      toast.error("El carrito está vacío. Agrega productos antes de continuar.");
      return;
    }

    const order = {
      buyer: { ...dataForm },
      products: [...cart],
      date: Timestamp.fromDate(new Date()),
      total: totalPrice(),
    };

    try {
      const response = await validateForm(dataForm);
      if (response.status === "error") throw new Error(response.message);

      toast.info("Subiendo orden...");
      await uploadOrder(order);
      toast.success("¡Orden subida con éxito!");

    } catch (error) {
      toast.error(error.message);
    }
  };

  // Subir la orden a Firebase
  const uploadOrder = async (newOrder) => {
    try {
      const ordersRef = collection(db, "orders");
      const response = await addDoc(ordersRef, newOrder);
      setIdOrder(response.id);
      await updateStock();
    } catch (error) {
      console.error("Error al subir la orden:", error);
      toast.error("Hubo un problema al subir la orden.");
    }
  };

  // Actualizar el stock de productos en Firebase
  const updateStock = async () => {
    try {
      await Promise.all(
        cart.map(async ({ id, quantity, stock, ...dataProduct }) => {
          const productRef = doc(db, "products", id);
          await setDoc(productRef, {
            ...dataProduct,
            stock: stock - quantity,
          });
        })
      );
      deleteCart(); // Borrar el carrito después de actualizar el stock
    } catch (error) {
      console.error("Error al actualizar el stock:", error);
      toast.error("Hubo un problema al actualizar el stock.");
    }
  };

  // Renderizado del componente
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
          <p>Por favor, guarde su número de seguimiento: <strong>{idOrder}</strong></p>
          <Link to="/">Volver al inicio</Link>
        </div>
      )}
    </div>
  );
};

export default Checkout;
