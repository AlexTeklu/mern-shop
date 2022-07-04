import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import HomeScreen from './Screen/HomeScreen';
import ProductScreen from './Screen/ProductScreen';

function App() {
	return (
		<BrowserRouter>
			<div>
				<header>
					<Link to='/'>amazona</Link>
				</header>

				<main>
					<Routes>
						<Route path='/product/:slug' element={<ProductScreen />}></Route>
						<Route path='/' element={<HomeScreen />}></Route>
					</Routes>
				</main>
			</div>
		</BrowserRouter>
	);
}

export default App;
