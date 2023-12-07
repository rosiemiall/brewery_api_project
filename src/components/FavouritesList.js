import FavouritedBrewery from "./FavourtitedBrewery";


const FavouritesList = ({favouriteBreweries, handleRemoveFavouriteBrewery}) => {

    const mapBreweries = favouriteBreweries ? (
        favouriteBreweries.map((brewery, id) => (
            <FavouritedBrewery key={id} favouritedBrewery={brewery} handleRemoveFavouriteBrewery={handleRemoveFavouriteBrewery}/>
        ))
    ) : (
        <p>Loading breweries</p>
    );

    return ( 
        <>
        {mapBreweries}
        </>
     );
}

export default FavouritesList;