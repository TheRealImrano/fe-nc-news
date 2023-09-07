import { useState } from "react";

const SortSlider = ({ onSortChange }) => {
    const [isAscending, setIsAscending] = useState(false);

    const toggleSortOrder = () => {
        const newAscending = !isAscending;
        setIsAscending(newAscending);
        onSortChange(newAscending);
      };

    return (
        <div className="slider">
          <label htmlFor="sortToggle">
            Sort: Ascending
          </label>
            <input id="sortToggle" type="checkbox" onChange={toggleSortOrder} />
        </div>
    );

}
export default SortSlider;