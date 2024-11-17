import { Link } from "react-router-dom";

const Card = ({ id, title, text, image, price, detail }) => {
  return (
    <div className="card">
      <Link to={`/detail/${id}`} className="card-link">
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
          <p className="card-price">Precio: €{price}</p>
          <p className="card-detail">{detail}</p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
