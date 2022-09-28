// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// // import { Link } from 'react-router-dom';

// function Navbarsale() {
//   return (
//     <Navbar bg="light" expand="lg">
//       <Container>
//         <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="/">Home</Nav.Link>
//             {/* <Link to="/">Home</Link> */}
//             <Nav.Link href="#link">Link</Nav.Link>
//             <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//               <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action/3.4">
//                 Separated link
//               </NavDropdown.Item>
//             </NavDropdown>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default Navbarsale;


import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import MediaQuery from 'react-responsive'
import './Navbarsale.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './component.css'

function Navhome() {
  let shopName = "Cafe dot com"
  return (
    <>
    {/* Ipad mini or Upper */}
    <MediaQuery minWidth={768}>

        <Navbar bg="warning" variant="dark">
          <Container>
            <Navbar.Brand href="/">
              <div className='name'>
                <img
                  alt=""
                  src="https://media.discordapp.net/attachments/1015206753857720341/1015281070154989568/posme.png"
                  width="132.2"
                  height="40"
                  className="d-inline-block align-top"
                />{' '}
              </div>
            </Navbar.Brand>
            <Navbar.Brand>
              <div className='logout'>
                ร้าน {' '}{' '}{shopName} {' '}
                <a href="/login">
                  <button type='button' class="btn btn-danger" href="/login">
                    logout
                  </button>{' '}
                </a>
              </div>
            </Navbar.Brand>
          </Container>
        </Navbar>
      
      </MediaQuery>
      {/* Mobile Device Size */}
      <MediaQuery maxWidth={767}>
        <Navbar bg="warning" variant="dark">
          <Container>
            <Navbar.Brand href="/store/home">
              <div className='name'>
                <img
                  alt=""
                  src="https://cdn-icons-png.flaticon.com/512/7439/7439933.png"
                  width="40"
                  height="40"
                  className="d-inline-block align-top"
                  />{' '}
              </div>
            </Navbar.Brand>
            <Navbar.Brand>
              <div className='logout'>
                ร้าน {' '}{' '}{shopName} {' '}
                <a href="/login">
                  <button type='button' class="btn btn-danger">
                    logout
                  </button>{' '}
                </a>
              </div>
            </Navbar.Brand>
          </Container>
        </Navbar>
      </MediaQuery>
    </>
  );
}

export default Navhome;