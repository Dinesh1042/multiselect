import "./MultiSelect.css";

import { useEffect, useState } from "react";

const MultiSelect = ({ options, selectedOptions, onSelect }) => {
  const [isOpen, setIsOpen] = useState();

  const isSelectedAll = options.length === selectedOptions.length;

  const toggleMultiSelectActive = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleAllSelect = () => {
    onSelect(isSelectedAll ? [] : options);
  };

  useEffect(() => {
    console.log({ selectedOptions });
  }, [selectedOptions]);

  const handleOnSelect = (value) => {
    const options = selectedOptions.includes(value)
      ? selectedOptions.filter((opt) => opt !== value)
      : selectedOptions.concat(value);
    onSelect(options);
  };

  return (
    <div className="multiSelect">
      <div onClick={toggleMultiSelectActive}>Select an Option</div>
      <div className="multiSelectOptionWrapper">
        {isOpen && (
          <>
            <label onClick={handleAllSelect} className="multiSelectOption">
              <input type="checkbox" checked={isSelectedAll} />
              <div>Select All</div>
            </label>
            {options.map((option) => (
              <label
                onClick={handleOnSelect.bind(null, option)}
                className="multiSelectOption"
              >
                <input
                  type="checkbox"
                  checked={selectedOptions.includes(option)}
                />
                <div>{option}</div>
              </label>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default MultiSelect;
