const FavouritedBrewery = ({favouritedBrewery, handleRemoveFavouriteBrewery}) => {

    const handleClick = () => {
        handleRemoveFavouriteBrewery(favouritedBrewery);
    }

    return ( 
        <>
            <li>
                {favouritedBrewery.name}
                <button onClick={handleClick}> ❤️ </button>
            </li>
        </>
     );
}
 
export default FavouritedBrewery;