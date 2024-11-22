import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";
export function Navbar() {
  const { openCart, cartQuantity } = useShoppingCart();
  return (
    <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to="/about " as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        <Button
          onClick={openCart}
          style={{
            width: "3rem",
            height: "3rem",
            padding: 0,
            position: "relative",
          }}
          variant="outline-primary"
          className="rounded-circle"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            style={{ width: "100%", height: "100%" }}
            fill="none"
          >
            {/* Shopping Cart Icon */}
            <path
              d="M20 20H44L40 36H24L20 20ZM30 40C28.34 40 27 41.34 27 43C27 44.66 28.34 46 30 46C31.66 46 33 44.66 33 43C33 41.34 31.66 40 30 40ZM38 40C36.34 40 35 41.34 35 43C35 44.66 36.34 46 38 46C39.66 46 41 44.66 41 43C41 41.34 39.66 40 38 40Z"
              fill="currentColor"
            />
          </svg>
          <div
            className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
            style={{
              color: "white",
              width: "1.5rem",
              height: "1.5rem",
              position: "absolute",
              bottom: 0,
              right: 0,
              transform: "translate(25%, 25%)",
            }}
          >
            {cartQuantity}
          </div>
        </Button>
      </Container>
    </NavbarBs>
  );
}
