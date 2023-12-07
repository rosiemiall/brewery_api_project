const Brewery = ({brewery, handleFavouriteBrewery}) => {

    const handleClick = () => {
        handleFavouriteBrewery(brewery);
    }

    return ( 
        <>
            <li>
                {brewery.name}
                <button> Visited </button>
                <button onClick={handleClick}> 🤍 </button>
            </li>
        </>
     );
}
 
export default Brewery;