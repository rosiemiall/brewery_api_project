const FavouritedBrewery = ({favouritedBrewery, handleRemoveFavouriteBrewery}) => {

    const handleClick = () => {
        handleRemoveFavouriteBrewery(favouritedBrewery);
    }

    return ( 
        <>
            <p>
                {favouritedBrewery.name}
                <button className="button" onClick={handleClick}> ❤️ </button>
            </p>
        </>
     );
}
 
export default FavouritedBrewery;