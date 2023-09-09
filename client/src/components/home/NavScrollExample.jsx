import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaUserPlus } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";

function NavScrollExample() {
  let username = JSON.parse(localStorage.getItem("username")) || null;
  const navigation = useNavigate();

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      navigation(`/services?q=${event.target.value}`);
    }
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary" bg="dark">
      <Container fluid>
        <Navbar.Brand>
          {" "}
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/"
            className="logo"
          >
            BeautyBlaze
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link></Nav.Link>
            <Nav.Link>
              <Link className="LinkTag navlinkss" to="/services?q=hair">
                Hair Salon
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="LinkTag navlinkss" to="/services?q=barber">
                Barbershop
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="LinkTag navlinkss" to="/services?q=nail">
                Nail Salon
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="LinkTag navlinkss" to="/services?q=skin">
                Skin Care
              </Link>
            </Nav.Link>
          </Nav>
          {/* <Form className="d-flex"> */}
          <Form.Control
            style={{ maxWidth: "300px" }}
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            onKeyDown={handleKeyPress}
          />
          {!username ? (
            <>
              {" "}
              <Nav.Link>
                <li className="icon-align ">
                  <RxAvatar />
                  <Link className="LinkTag loginbtn" to="/login">
                    login
                  </Link>
                </li>
              </Nav.Link>
            </>
          ) : (
            <>
              <Nav.Link>
                <Link className="LinkTag">{username}</Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="LinkTag">
                  <div
                    className="usernamenav"
                    onClick={() => {
                      localStorage.clear();
                    }}
                  >
                    Logout
                  </div>
                </Link>
              </Nav.Link>
            </>
          )}
          {/* <Button variant="outline-success">Search</Button> */}
          {/* </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
