import { Link } from "react-router-dom";

const ItemListContainer = (props) => {
  return (
    <ul>
      <li>
        <Link to="category/camionetas">{props.itemUno}</Link>
      </li>

      <li>
        <Link to="category/autos">{props.itemDos}</Link>
      </li>

      <li>
        <Link to="category/repuestos">{props.itemTres}</Link>
      </li>
    </ul>
  );
};

export default ItemListContainer;
