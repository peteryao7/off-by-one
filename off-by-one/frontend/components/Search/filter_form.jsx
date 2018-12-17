import React from 'react';

const handleChange = (filter, updateFilter) => e => (
  updateFilter(filter, parseInt(e.currentTarget.value))
);

const FilterForm = ({ limit, updateFilter }) => (
  <div className="filter-form marg-one-rem muted-button">
    <label className="center-flex-row ">
      Limit Output
      <div className="one-rem-padding"></div>
        <input
          type="number"
          value={limit}
          onChange={handleChange('limit', updateFilter)}
          />
    </label>
  </div>
  );

  export default FilterForm;
