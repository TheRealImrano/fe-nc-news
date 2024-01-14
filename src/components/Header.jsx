import SearchBar from "./SearchBar";
import {Link} from 'react-router-dom'
import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { PageContext } from '../contexts/PageContext';

const Header = () => {
    const { user, setUser } = useContext(UserContext);
    const { page } = useContext(PageContext);
    const moduleUrl = new URL(import.meta.url);
    const logoUrl = new URL('../logo/nc-news-logos.jpeg', moduleUrl);

    return (
        <header className="component-outline">
            <Link to={`/`}>
                <div>
                    <img src={logoUrl} alt="Image displaying Logo of website" id='logo-main' />
                    <h1>nc-news</h1>
                </div>
            </Link>
                <h2>{page}</h2>
            {user.name ? (
                <h3>Logged in as: {user.name}!</h3>
            ) : (
                <h3>Hello there, please login!</h3>
            )}
            {user.name ? (
                <button onClick={() => setUser(prevUser => ({ ...prevUser, username: null, name: null }))}>Logout</button>
            ) : (
                <Link to={`/auth`}>
                    <button>Login</button>
                </Link>
            )}
            <SearchBar />
        </header>
    )
}

export default Header;