import { useEffect, useState } from "react";
import BreweryList from "../components/BreweryList";
import searchForm from "../components/searchForm";
import FavouritesList from "../components/FavouritesList";
import RandomBrewery from "../components/RandomBrewery";

const BreweryContainer = () => {
    const [breweries, setBreweries] = useState([]);
    const [favouriteBreweries, setFavouriteBreweries] = useState([]);
    const [filteredBreweries, setFilteredBreweries] = useState([]);
    const [randomBrewery, setRandomBrewery] = useState([]);

    const fetchBreweries = async () => {
        const response = await fetch("https://api.openbrewerydb.org/v1/breweries");
        const data = await response.json();

        setBreweries(data);
        setFilteredBreweries(data);
    }

        const fetchRandomBrewery = async () => {
            const response = await fetch(`https://api.openbrewerydb.org/v1/breweries/random`);
            const data = await response.json();
            
            setRandomBrewery(data);
        } 

    useEffect(() => {
        fetchBreweries();
        // fetchRandomBrewery();
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

        setFilteredBreweries(filteredList);
    }

    const handleRandomClick = () => {
        fetchRandomBrewery();
        console.log(randomBrewery);
    }

    

    return ( 
        <>
        <h1 id="title">Your Favourite Brewery Organiser</h1>
        <article id="suggest">
        <button className="button" onClick={handleRandomClick} >Suggest a brewery</button>
        {/* <RandomBrewery randomBrewery={randomBrewery}/> */}
        <BreweryList breweries={randomBrewery} handleFavouriteBrewery={handleFavouriteBrewery}/>
        </article>

        <article className="lists" >
        <h1>All Breweries 🍻</h1>
        <input id="search" type="text" onChange={filterBreweries} placeholder="Search by Name"></input>
        <BreweryList breweries={filteredBreweries}
        handleFavouriteBrewery={handleFavouriteBrewery}
        />
        </article>
        <article className="lists">
        <h1>Favourites 🤍</h1>
        <FavouritesList favouriteBreweries={favouriteBreweries} handleRemoveFavouriteBrewery={handleRemoveFavouriteBrewery}/>
        </article>
        <section id="images">
        <img src="sunsetBeer.png" alt="sunset beer" id="sunset-beer"/>
        <img src="cans.png" alt="beer cans" id="cans"/>
        </section>
        </>
        
     );
}
 
export default BreweryContainer;