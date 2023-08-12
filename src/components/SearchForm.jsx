import React from "react";
import { TextField, MenuItem, Button } from "@material-ui/core";
import "./SearchForm.css";

const locations = [
  "New York",
  "Palm Harbor",
  "Beverly Springfield",
  "Woodlands",
];
const propertyTypes = ["Apartment", "House", "Condo"];

function SearchForm({
  location,
  moveInDate,
  priceRange,
  propertyType,
  onLocationChange,
  onMoveInDateChange,
  onPriceRangeChange,
  onPropertyTypeChange,
  onSearch,
  onReset,
}) {
  const handleLocationChange = (event) => {
    onLocationChange(event.target.value);
  };

  const handleMoveInDateChange = (event) => {
    onMoveInDateChange(event.target.value);
  };

  const handlePriceRangeChange = (event) => {
    const [minPrice, maxPrice] = event.target.value.split("-");
    onPriceRangeChange([Number(minPrice), Number(maxPrice)]);
  };

  const handlePropertyTypeChange = (event) => {
    onPropertyTypeChange(event.target.value);
  };

  return (
    <form className="search-form">
      <TextField
        select
        label="Location"
        value={location}
        onChange={handleLocationChange}
        className="locationSearch"
      >
        {locations.map((loc) => (
          <MenuItem key={loc} value={loc}>
            {loc}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        label="Move-in-Date"
        type="date"
        value={moveInDate}
        onChange={handleMoveInDateChange}
        InputLabelProps={{
          shrink: true,
        }}
        className="form-field"
      />
      <TextField
        select
        label="Price Range"
        onChange={handlePriceRangeChange}
        className="form-field"
      >
        <MenuItem value="0-Infinity">Any</MenuItem>
        <MenuItem value="0-1000">Under $1000</MenuItem>
        <MenuItem value="1000-2000">$1000 - $2000</MenuItem>
        <MenuItem value="2000-3000">$2000 - $3000</MenuItem>
        <MenuItem value="3000-Infinity">Over $3000</MenuItem>
      </TextField>
      <TextField
        select
        label="Property Type"
        value={propertyType}
        onChange={handlePropertyTypeChange}
        className="form-field"
      >
        {propertyTypes.map((type) => (
          <MenuItem key={type} value={type}>
            {type}
          </MenuItem>
        ))}
      </TextField>
      <Button
        variant="contained"
        color="primary"
        onClick={onSearch}
        className="form-button"
      >
        Search
      </Button>
      <Button
        variant="outlined"
        color="secondary"
        onClick={onReset}
        className="form-button"
      >
        Reset
      </Button>
    </form>
  );
}

export default SearchForm;
