const Item = ({ product }) => {
  return (
    <Link to={`/detail/${product.id}`} className="item">
      <img src={product.image} className="img-item" width={100} alt={product.name} />
      <p className="text-item">{product.name}</p>
      <p className="text-item">${product.price}</p>
    </Link>
  );
};

export default Item;
