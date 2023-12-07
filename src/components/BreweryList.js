import Brewery from "./Brewery";
const BreweryList = ({breweries, handleFavouriteBrewery, handleVisitedBrewery}) => {

    // maps all brewery in all brewery list and makes into single elements:
    const mapBreweries = breweries ? (
        breweries.map((brewery, id) => (
            <Brewery key={id} brewery={brewery} handleFavouriteBrewery={handleFavouriteBrewery} handleVisitedBrewery={handleVisitedBrewery}/>
        ))
    ) : (
        <p>Loading breweries</p>
    );

    return ( 
        <>
        <article id="para">
        {mapBreweries}
        </article>
        </>
     );
}
 
export default BreweryList;