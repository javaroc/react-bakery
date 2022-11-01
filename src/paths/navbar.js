import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
    <nav class="navbar navbar-expand-sm bg-light">
      <div class="container-fluid">
        <ul class="navbar-nav">
          <li class="nav-item">
            <Link class="nav-link" to="/">Home</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/menu">Menu</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/checkout">Checkout</Link>
          </li>
        </ul>
      </div>
    </nav>

    <Outlet />
    </>
  )
};

export default Navbar;