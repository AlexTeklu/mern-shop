import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from './Screen/HomeScreen';
import ProductScreen from './Screen/ProductScreen';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';

function App() {
	return (
		<BrowserRouter>
			<div className='d-flex flex-column site-container'>
				<header>
					<Navbar bg='dark' variant='dark' expand='lg'>
						<Container>
							<LinkContainer to='/'>
								<Navbar.Brand>Electronics</Navbar.Brand>
							</LinkContainer>
						</Container>
					</Navbar>
				</header>
				<main>
					<Container className='mt-3'>
						<Routes>
							<Route path='/product/:slug' element={<ProductScreen />} />

							<Route path='/' element={<HomeScreen />} />
						</Routes>
					</Container>
				</main>
				<footer className='text-center'>All rights reserved</footer>
			</div>
		</BrowserRouter>
	);
}

export default App;
