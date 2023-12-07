import Brewery from "./Brewery";
const BreweryList = ({breweries}) => {

    const mapBreweries = breweries ? (
        breweries.map((brewery, id) => (
            <Brewery key={id} brewery={brewery}/>
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