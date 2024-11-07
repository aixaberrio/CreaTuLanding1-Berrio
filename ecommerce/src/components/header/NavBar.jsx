import ItemListContainer from "./ItemListContainer";
import CartWidget from "./CartWidget";
import Brand from "./Brand";
import ContextCart from "./ContextCart";
import ContainerCart from "./ContainerCart";

const NavBar = () => {
  return (
    <ContextCart>
      <header>
        <div className="containerBrand">
          <Brand />
        </div>

        <nav className="containerItemList">
          <ItemListContainer
            itemUno="Camionetas"
            itemDos="Autos"
            itemTres="Repuestos"
          />
        </nav>

        <div className="containerCart">
          <CartWidget />
        </div>
        <ContainerCart />
      </header>
    </ContextCart>
  );
};

export default NavBar;
