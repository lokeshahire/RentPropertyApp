import React, { useState } from "react";
import SearchForm from "./components/SearchForm";
import Results from "./components/Results";
import "./App.css";
import Navbar from "./components/Navbar";

const dummyData = [
  {
    id: 1,
    location: "New York",
    moveInDate: "2023-08-01",
    price: 2500,
    propertyType: "Apartment",
    bed: 2,
    bathroom: 4,
    area: "8 x 10 m2",
    address: "2008 Green valley , HightLand Lake",
    img: "https://images.pexels.com/photos/1862402/pexels-photo-1862402.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 2,
    location: "Palm Harbor",
    moveInDate: "2023-09-01",
    price: 800,
    propertyType: "House",
    bed: 5,
    bathroom: 7,
    area: "12 x 5 m2",
    address: "02 Light House , Chris Church House ",
    img: "https://images.pexels.com/photos/1022936/pexels-photo-1022936.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 3,
    location: "Beverly Springfield",
    moveInDate: "2023-10-01",
    price: 2000,
    propertyType: "Condo",
    bed: 2,
    bathroom: 4,
    area: "18 x 6 m2",
    address: "Wordon Hostel, Lokesh's House",
    img: "https://images.pexels.com/photos/463734/pexels-photo-463734.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 4,
    location: "Woodlands",
    moveInDate: "2023-11-01",
    price: 2200,
    propertyType: "Apartment",
    bed: 2,
    bathroom: 4,
    area: "5 x 8 m2",
    address: "Girls High School ,Behind Water tank",
    img: "https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 5,
    location: "New York",
    moveInDate: "2021-11-03",
    price: 1500,
    propertyType: "House",
    bed: 3,
    bathroom: 4,
    area: "8 x 30 m2",
    address: "2008 Green valley , HightLand Lake",
    img: "https://images.pexels.com/photos/1694360/pexels-photo-1694360.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 6,
    location: "Palm Harbor",
    moveInDate: "2023-01-06",
    price: 3800,
    propertyType: "Apartment",
    bed: 6,
    bathroom: 9,
    area: "6 x 8 m2",
    address: "02 Light House , Chris Church",
    img: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 7,
    location: "Beverly Springfield",
    moveInDate: "2023-01-09",
    price: 8000,
    propertyType: "Condo",
    bed: 2,
    bathroom: 4,
    area: "18 x 6 m2",
    address: "Wordon Hostel, Lokesh's House",
    img: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 8,
    location: "Woodlands",
    moveInDate: "2023-06-05",
    price: 2200,
    propertyType: "Apartment",
    bed: 6,
    bathroom: 2,
    area: "15 x 8 m2",
    address: "Girls High School ,Behind Water tank",
    img: "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

function App() {
  const [location, setLocation] = useState("");
  const [moveInDate, setMoveInDate] = useState("");

  const [priceRange, setPriceRange] = useState([0, Infinity]);
  const [propertyType, setPropertyType] = useState("");
  const [results, setResults] = useState(dummyData);

  const handleSearch = () => {
    const filteredResults = dummyData.filter((property) => {
      return (
        (!location || property.location === location) &&
        (!moveInDate || property.moveInDate === moveInDate) &&
        (!propertyType || property.propertyType === propertyType) &&
        property.price >= priceRange[0] &&
        property.price <= priceRange[1]
      );
    });
    setResults(filteredResults);
  };

  const handleReset = () => {
    setLocation("");
    setMoveInDate("");
    setPriceRange([0, Infinity]);
    setPropertyType("");
    setResults(dummyData); // Resetting results to original data
  };
  return (
    <>
      <Navbar />
      <div className="container">
        <header className="header">
          <h1>Search properties to rent</h1>
        </header>

        <SearchForm
          location={location}
          moveInDate={moveInDate}
          priceRange={priceRange}
          propertyType={propertyType}
          onLocationChange={setLocation}
          onMoveInDateChange={setMoveInDate}
          onPriceRangeChange={setPriceRange}
          onPropertyTypeChange={setPropertyType}
          onSearch={handleSearch}
          onReset={handleReset}
        />
        <Results results={results} />
      </div>
    </>
  );
}

export default App;
