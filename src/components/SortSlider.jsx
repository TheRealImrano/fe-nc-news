import React, { useState, useRef } from "react";
import '../styling/SortSlider.css'; 

const SortSlider = ({ onSortChange }) => {
    const [isAscending, setIsAscending] = useState(false);
    const sliderRef = useRef(null);

    const toggleSortOrder = () => {
      const newAscending = !isAscending;
      setIsAscending(newAscending);
      onSortChange(newAscending);
    };

    const handleSliderClick = () => {
      sliderRef.current.click();
    };

    return (
        <div className="slider component-outline" onClick={handleSliderClick}>
          <label htmlFor="sortToggle" className="slider-label">
          Sort: {isAscending ? 'Ascending' : 'Descending'}
          </label>
          <input
            ref={sliderRef}
            id="sortToggle"
            type="range"
            min="0"
            max="1"
            step="1"
            value={isAscending ? 1 : 0}
            onChange={toggleSortOrder}
            checked={isAscending}
            className="slider-input"
          />
        </div>
    );

}
export default SortSlider;