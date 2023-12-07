const FavouritedBrewery = ({favouritedBrewery, handleRemoveFavouriteBrewery}) => {

    const handleClick = () => {
        handleRemoveFavouriteBrewery(favouritedBrewery);
    }

    return ( 
        <>
            <p>
                <button className="button" onClick={handleClick}> ❤️ </button>
                {favouritedBrewery.name}
            </p>
        </>
     );
}
 
export default FavouritedBrewery;