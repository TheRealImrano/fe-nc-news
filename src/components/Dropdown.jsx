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
                <li>Option 1</li>
                <li>Option 2</li>
                <li>Option 3</li>
              </ul>
            </div>
          )}
        </div>
      );
}
export default Dropdown;