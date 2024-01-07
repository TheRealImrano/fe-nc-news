import SearchBar from "./SearchBar";
import {Link} from 'react-router-dom'
import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { PageContext } from '../contexts/PageContext';

const Header = () => {
    const { user, setUser } = useContext(UserContext);
    const { page } = useContext(PageContext);

    return (
        <header className="component-outline">
            <Link to={`/`}>
                <div>
                    <img src="/src/assets/logos/nc-news-logos.jpeg" alt="Image displaying Logo of website" id='logo-main' />
                    <h1>nc-news</h1>
                </div>
            </Link>
                <h2>{page}</h2>
            {user ? (
                <h3>Logged in as: {user}!</h3>
            ) : (
                <h3>Hello there, please login!</h3>
            )}
            {user ? (
                <button onClick={() => setUser(null)}>Logout</button>
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