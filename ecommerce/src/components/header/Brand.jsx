import brand from "../../img/brand.svg";
import { Link } from "react-router-dom";

const Brand = () => {
  return (
    <Link to={"/"}>
      <img
        src={brand}
        alt="logo Moroz Automotores"
        title="Moroz Automotores"
      ></img>
    </Link>
  );
};

export default Brand;
