import {useNavigate} from "react-router-dom";
import {setIsLogged} from "/src/store/slices/isLogged.slice";
import {useDispatch} from "react-redux";
import  Nav  from "react-bootstrap/Nav";
import '../assets/styles/Nav.css'

export default () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const logout = () => {
        localStorage.removeItem("token");
	dispatch(setIsLogged());
        navigate("/");
    }

    return <Nav.Link className='button' onClick={() => logout()}>Logout</Nav.Link>;
}
