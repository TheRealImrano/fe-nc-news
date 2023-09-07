import {useState} from 'react';

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Search query:', searchQuery);
        setSearchQuery('');
    }

    return (
        <>
        <form onSubmit={handleSubmit} className="component-outline">
            <label htmlFor="searchInput1">Search: </label>
            <input 
            type="text"
            id='searchInput1'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
             />
             <button type="submit">Search</button>
        </form>
        </>
    )
}

export default SearchBar;