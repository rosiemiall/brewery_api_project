import { useState } from "react";

const Brewery = ({brewery, handleFavouriteBrewery}) => {

    // const [favourited, setFavourited] = useState(false)
    // will need this in the button disabled={favourited}

    const handleClick = () => {
        handleFavouriteBrewery(brewery);
        // setFavourited(true);
    }
    return ( 
        <>
            <p>
                {brewery.name}
                <button className="button"> Visited </button>
                <button className="button" onClick={handleClick} > 🤍 </button>
               
            </p>
        </>
     );
}

 
export default Brewery;
