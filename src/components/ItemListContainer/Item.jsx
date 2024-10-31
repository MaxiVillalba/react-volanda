import { Link } from "react-router-dom"
const Item = () => {
  return (
<Link to={ "/detail/"+product.id } className="item">
<img src={product.image}  className="img-item" width={100} />
<p className="text-item" >{product.name}</p>
<p className="text-item">${product.price}</p>

</Link>  )
}

export default Item