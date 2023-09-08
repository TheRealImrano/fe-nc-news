import SearchBar from "./SearchBar";

const Header = () => {
    return (
        <header className="component-outline">
            <img src="./src/assets/logos/nc-news-logos.jpeg" alt="Image displaying Logo of website" id='logo-main' />
            <h1>nc-news</h1>
            <h2>Home</h2>
            <button>Login</button>
            <SearchBar />
        </header>
    )
}

export default Header;