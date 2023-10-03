import SearchBar from "./SearchBar";
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <header className="component-outline">
            <img src="/src/assets/logos/nc-news-logos.jpeg" alt="Image displaying Logo of website" id='logo-main' />
            <h1>nc-news</h1>
            <h2>Home</h2>
            <Link to={`/auth`}>
                <button>Login</button>
            </Link>
            <SearchBar />
        </header>
    )
}

export default Header;