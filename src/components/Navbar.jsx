
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import '../assets/styles/Nav.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import LogOut from "/src/pages/LogOut"; 
import axios from 'axios';
import $Cart from './Cart';
import { Cart } from 'react-bootstrap-icons';
import { Button } from 'react-bootstrap';
import { getProductsThunk } from '../store/slices/getProducts.slice';


	

const NavBar= ({sendCategory}) => {
	
	const isLogged = useSelector (state => state.isLogged)
	const [categorie, setCategories] = useState([])
	const [launch, setLaunch] = useState(false);
	
	const dispatch = useDispatch();

	
	useEffect(() => {

		dispatch( getProductsThunk() )
		axios
		.get(`https://ecommerce-g1mf.onrender.com/api/v1/categories`)
		.then( resp =>  setCategories(resp?.data))
		.catch(error => console.error(error))
			
	  }, [] )
	
	
	const filterByCategory = (e) => {
		const name = e.target.name;
		sendCategory(name)
	 
	   }
	
	  return (
		<>
		  
			<Navbar  bg="danger" variant={'dark'} expand='md' className="mb-3 navB">
			  <Container fluid >
				<Navbar.Brand 
				className='tittel'
				as={Link} to={'/'}
				onClick={() => dispatch(getProductsThunk())}
				>
					Ecommerce
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='offcanvasNavbar-expand'/>
				<Navbar.Offcanvas
				  id='offcanvasNavbar-expand'
				  aria-labelledby='offcanvasNavbarLabel-expand'
				  placement="end"
				  
				>
				  <Offcanvas.Header closeButton className='close'>
					<Offcanvas.Title id='offcanvasNavbarLabel-expand' >
					  Ecommerce
					</Offcanvas.Title>
				  </Offcanvas.Header>
				  <Offcanvas.Body>
					<Nav className="nav">
					<NavDropdown
						title="Products"
						id='offcanvasNavbarDropdown-expand'
						className='button'
					  >
<div className="BotoneraNav">{categorie.map((category) => (
        <NavDropdown.Item 
          key={category.id}
          variant="primary"
          onClick={filterByCategory}
          name={category.name}
		  
        >
          {category.name}
        </NavDropdown.Item>

      ))}
      <NavDropdown.Item variant="light" 
	  onClick={() => dispatch(getProductsThunk())}
	  as={Link} to={'/'}

	  >
        Products
      </NavDropdown.Item></div> 
	  
					  </NavDropdown>
					  {/* <Nav.Link as={Link} to={'/'}>Products</Nav.Link> */}
					  <Nav.Link className='button' as={Link} to={'/purchases'}>Purchases</Nav.Link>
					 
					  {!isLogged ? <Nav.Link as={Link} to="/login" className='button'>Login</Nav.Link> : <LogOut/>}			
					</Nav>
					<Button
	      variant="secondary"
	      onClick={() => setLaunch(!launch)}
	    ><Cart/></Button>
					{/* <Form className="d-flex">
					  <Form.Control
						type="search"
						placeholder="Search"
						className="me-2"
						aria-label="Search"
					  />
					  <Button variant="outline-success">Search</Button>
					</Form> */}
				  </Offcanvas.Body>
				</Navbar.Offcanvas>
			  </Container>
			</Navbar>
		  <$Cart
        sendLaunch={launch => setLaunch(launch)}
        launch={launch}
      />
		</>
	  );
	}
	
	

export default NavBar;








