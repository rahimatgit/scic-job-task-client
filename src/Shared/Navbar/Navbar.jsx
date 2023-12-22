import { NavLink } from "react-router-dom";
import Container from "../Container/Container";
import './Navbar.css';
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const navItems = <>
        <li><NavLink className={({ isActive }) => (isActive ? 'bg-red-500 mb-2 md:mr-2' : ' mb-2 md:mr-2')} to='/'>Home</NavLink></li>
        <li><NavLink className={({ isActive }) => (isActive ? 'bg-red-500 mb-2 md:mr-2' : ' mb-2 md:mr-2')} to='/login'>Login</NavLink></li>
        <li><NavLink className={({ isActive }) => (isActive ? 'bg-red-500 mb-2 md:mr-2' : ' mb-2 md:mr-2')} to='/register'>Register</NavLink></li>
    </>

const handleLogout = () => {
    logOut()
        .then()
        .catch()
}

    return (
        <div>
            <Container>
                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                {navItems}
                            </ul>
                        </div>
                        <a className="btn btn-ghost text-xl">daisyUI</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {navItems}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        {
                            user?
                            <div className="dropdown dropdown-bottom dropdown-end">
                            <div tabIndex={0} className="avatar mx-3 mt-2 md:mt-0 lg:mt-0">
                                <div className="w-10 rounded-full ring  ring-blue-500 ring-offset-2">
                                    <img src={user?.photoURL} />
                                </div>
                            </div>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 mt-4">
                                <p className="text-center text-blue-500 font-bold mt-2 md:mt-0 lg:mt-0">{user?.displayName}</p>
                            <NavLink onClick={handleLogout} className="btn btn-primary btn-sm mt-3">
                                    Logout
                                </NavLink>
                            </ul>
                        </div>
                        :
                        " "}
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Navbar;