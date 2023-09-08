import { useState } from "react";
import '../styling/Dropdown.css';

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="dropdown component-outline">
          <button onClick={toggleDropdown} id="sort-button-home">Sort</button>
          {isOpen && (
            <div className="dropdown-content">
              <ul>
                <li>Username</li>
                <li>Title</li>
                <li>Topic</li>
                <li>Date</li>
                <li>Votes</li>
              </ul>
            </div>
          )}
        </div>
      );
}
export default Dropdown;