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
            <li>
                {brewery.name}
                <button> Visited </button>
                <button onClick={handleClick} > 🤍 </button>
               
            </li>
        </>
     );
}

 
export default Brewery;
