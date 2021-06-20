import './App.css';

import Aside from "./Components/Aside/Aside";
import MainCatalog from "./Components/Catalog/Main";

import {BrowserRouter, Route} from "react-router-dom";

function App() {
  return (
    <div className="">

        <Aside />
        <switch>
            <Route path="/catalog">
                <MainCatalog />
            </Route>
        </switch>
    </div>
  );
}

export default App;
