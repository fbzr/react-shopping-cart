import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// ContextAPI
import { ProductContext } from './context/ProductContext';
import { CartContext } from './context/CartContext';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		setCart(prev => ([
			...prev,
			item
		]));
	};

	const removeItem = item => {
		setCart(prev => (
			prev.filter(product => product.id !== item.id)
		))
	}

	return (
		<div className="App">
			<ProductContext.Provider value={{ products, addItem }}>
				<CartContext.Provider value={ cart }>
					<Navigation />

					{/* Routes */}
					<Route exact path="/">
						<Products />
					</Route>

					<Route path="/cart">
						<ShoppingCart />
					</Route>
				</CartContext.Provider>
			</ProductContext.Provider>
		</div>
	);
}

export default App;
