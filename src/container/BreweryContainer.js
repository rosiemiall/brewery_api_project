import { useEffect, useState } from "react";
import BreweryList from "../components/BreweryList";
import searchForm from "../components/searchForm";
import FavouritesList from "../components/FavouritesList";


const BreweryContainer = () => {
    const [breweries, setBreweries] = useState([]);
    const [favouriteBreweries, setFavouriteBreweries] = useState([]);

    const fetchBreweries = async () => {
        const response = await fetch("https://api.openbrewerydb.org/v1/breweries");
        const data = await response.json();

        setBreweries(data);
        console.log(breweries);
    }

    useEffect(() => {
        fetchBreweries();
    },[])

    const  handleFavouriteBrewery = (brewery) => {
        setFavouriteBreweries([...favouriteBreweries, brewery]);
        }

        //new list of updated favourites, by filtering through the exisiting favourites list
    const handleRemoveFavouriteBrewery = (breweryToRemove) => {
        const updatedFavourites = favouriteBreweries.filter(
            (brewery) => brewery !== breweryToRemove
        )
        setFavouriteBreweries(updatedFavourites)
    }

    const filterBreweries = (event) => {
        const filteredList = breweries.filter((brewery) => brewery.name.toLowerCase().includes(event.target.value.toLowerCase()))

        if (filteredList.length > 0) {
            setBreweries(filteredList);
        }
    }

    return ( 
        <>
        <input type="text" onChange={filterBreweries} placeholder="Search by Name"></input>
        <section className="Lists">
        <h1>All Breweries 🍻</h1>
        <BreweryList breweries={breweries}
        handleFavouriteBrewery={handleFavouriteBrewery}
        />
        </section>
        <section className="Lists">
        <h1>Favourites 🤍</h1>
        <FavouritesList favouriteBreweries={favouriteBreweries} handleRemoveFavouriteBrewery={handleRemoveFavouriteBrewery}/>
        </section>
        </>
     );
}
 
export default BreweryContainer;