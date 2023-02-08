import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import {useSelector} from "react-redux";
import Loader from "./components/Loader";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Purchases from "./pages/Purchases";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ProtectedRoutes from "./pages/ProtectedRoutes";
import LogIn from "./pages/LogIn";
import { useState } from "react";

function Router()
{
    const isLoading = useSelector(state => state.isLoading);   
	const [category, setCategory] = useState('')
 
    return (
        
     
        <BrowserRouter>
	    <NavBar
		sendCategory={ category => setCategory( category )}
		/>
	    {isLoading && <Loader/>}
	    <Routes>
	        <Route
                    path="/"
	            element={<Products
				category={category}
				/>}
	        />
	        <Route
                    path="/product/:id"
	            element={<Product/>}
	        />
	        <Route
                    path="/login"
	            element={<LogIn/>}
	        />
	        <Route element={<ProtectedRoutes/>}>
	            <Route 
                        path="/purchases"
	                element={<Purchases/>}
	            />
	        </Route>
	    </Routes>
	    <Footer/>
	</BrowserRouter>
    );
}

export default Router;
