import { useState } from "react";
import '../styling/Dropdown.css';

const Dropdown = ({ setSortBy }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [lastSelected, setLastSelected] = useState('created_at');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSortBy = (sorting) => {
    setSortBy(sorting);
    setLastSelected(sorting);
    setIsOpen(false);
  };

  return (
    <div className="dropdown component-outline">
      <button onClick={toggleDropdown} id="sort-button-home">
        Sort
      </button>
      {isOpen && (
        <div className="dropdown-content">
          <ul>
            <li>
              <button
                className={`dropdown-items`}
                id={lastSelected === 'created_at' ? 'dropdown-selected-item' : 'dropdown-item-1'}
                onClick={() => {
                  handleSortBy('created_at');
                }}
              >
                Date
              </button>
            </li>

            <li>
              <button
                className={`dropdown-items`}
                id={lastSelected === 'author' ? 'dropdown-selected-item' : 'dropdown-item-2'}
                onClick={() => {
                  handleSortBy('author');
                }}
              >
                User
              </button>
            </li>

            <li>
              <button
                className={`dropdown-items`}
                id={lastSelected === 'votes' ? 'dropdown-selected-item' : 'dropdown-item-3'}
                onClick={() => {
                  handleSortBy('votes');
                }}
              >
                Votes
              </button>
            </li>

            <li>
              <button
                className={`dropdown-items`}
                id={lastSelected === 'comment_count' ? 'dropdown-selected-item' : 'dropdown-item-4'}
                onClick={() => {
                  handleSortBy('comment_count');
                }}
              >
                Comments
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
