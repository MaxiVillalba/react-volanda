const Card = ({ title, text, image, updatedAt, price, detail }) => {
  return (
    <div className="card">
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <p className="card-text">
          <small className="text-body-secondary">{updatedAt}</small>
        </p>
        <p className="card-price">Precio: €{price}</p>
        <p className="card-detail">{detail}</p>
      </div>
    </div>
  );
};

export default Card;
