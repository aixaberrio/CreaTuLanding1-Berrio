import "./App.css";
import NavBar from "./components/header/NavBar";
import ContainerCardItems from "./components/items/ContainerCardItems";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailsItems from "./components/items/DetailsItems";
import ProviderContextoListCart from "./components/items/providerContextoListCart";

function App() {
  return (
    <ProviderContextoListCart>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ContainerCardItems />} />
          <Route path="/item/:idItem" element={<DetailsItems />} />
          <Route
            path="/category/:idCategory"
            element={<ContainerCardItems />}
          />
        </Routes>
      </BrowserRouter>
    </ProviderContextoListCart>
  );
}

export default App;
