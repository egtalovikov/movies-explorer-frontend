import React from "react";
import './FilterCheckbox.css';


function FilterCheckbox() {

    return (
        <div className="filter-checkbox">
            <div className="filter-checkbox__container">
                <label className="filter-checkbox__label">
                    <input type="checkbox" className="filter-checkbox__input" />
                    <span className="filter-checkbox__slider" />
                </label>
            </div>
            <p className="filter-checkbox__caption">Короткометражки</p>
        </div>
    );
}

export default FilterCheckbox;
