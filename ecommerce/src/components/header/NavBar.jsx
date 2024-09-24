import ItemListContainer from "./ItemListContainer";
import CartWidget from "./CartWidget";
import Brand from "./Brand";

const NavBar = () => {
  return (
    <header>
      <div className="containerBrand">
        <Brand />
      </div>

      <nav className="containerItemList">
        <ItemListContainer
          itemUno="Camionetas"
          itemDos="Autos"
          itemTres="Motos"
          itemCuatro="Repuestos"
        />
      </nav>

      <div className="containerCart">
        <CartWidget />
      </div>
    </header>
  );
};

export default NavBar;
