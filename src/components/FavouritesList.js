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
        <article id="para2">
        {mapBreweries}
        </article>
        </>
     );
}

export default FavouritesList;