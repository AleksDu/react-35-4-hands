import { lazy, Suspense } from "react";

import "./App.css";
import { NavLink, Route, Switch } from "react-router-dom";
import { Loader } from "./Components/Loader/Loader";
const HomePage = lazy(() =>
  import("./pages/Home/Home" /* webpackChangName: Home Page   */)
);
const PexelsPage = lazy(() =>
  import("./pages/Pexels/Pexels" /* webpackChangName: Pexels Page   */)
);
const ProductsPage = lazy(() =>
  import("./pages/Products/Products" /* webpackChangName: Products Page   */)
);
// import { SolidTitle } from './components/Titles/SolidTitle';
function App() {
  //   const [counter, setCounter] = useState(0);
  //   const [isOpen, setIsOpen] = useState(false);
  // === свои хуки
  // const [searchValue, setSearchValue] = useState("");

  // === свои хуки

  // - список

  // - список

  return (
    <div className="App">
      <nav>
        <li>
          <NavLink
            exact
            to="/"
            className="naVLink"
            activeClassName="activeNavLink"
          >
            Home
          </NavLink>
          <NavLink
            to="/pexels"
            className="naVLink"
            activeClassName="activeNavLink"
          >
            Pexels
          </NavLink>
          <NavLink
            to="/products"
            className="naVLink"
            activeClassName="activeNavLink"
          >
            Products
          </NavLink>
        </li>
      </nav>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path="/" component={HomePage} />

          <Route path="/pexels">
            <PexelsPage title="Main Title" />
          </Route>
          <Route path="/products" component={ProductsPage} />
          <Route>
            <p>Page not found </p>
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
