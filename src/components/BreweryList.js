import Brewery from "./Brewery";
const BreweryList = ({breweries, handleFavouriteBrewery}) => {

    // maps all brewery in all brewery list and makes into single elements:
    const mapBreweries = breweries ? (
        breweries.map((brewery, id) => (
            <Brewery key={id} brewery={brewery} handleFavouriteBrewery={handleFavouriteBrewery}/>
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
 
export default BreweryList;