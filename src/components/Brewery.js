import { useState } from "react";

const Brewery = ({brewery, handleFavouriteBrewery, handleVisitedBrewery}) => {

    // const [favourited, setFavourited] = useState(false)
    // will need this in the button disabled={favourited}

    const handleClick = () => {
        handleFavouriteBrewery(brewery);
        // setFavourited(true);
    }
    const handleVisitedClick = () => {
        handleVisitedBrewery(brewery);
    }
    return ( 
        <>
            <p>
                {brewery.name}
                <button className="button" onClick={handleVisitedClick}> Visited </button>
                <button className="button" onClick={handleClick} > 🤍 </button>
               
            </p>
        </>
     );
}

 
export default Brewery;
