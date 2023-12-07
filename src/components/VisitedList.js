import VisitedBrewery from "./VisitedBrewery";


const VisitedList = ({visitedBreweries}) => {

    const mapBreweries = visitedBreweries ? (
        visitedBreweries.map((brewery, id) => (
            <VisitedBrewery key={id} visitedBrewery={brewery}/>
        ))
    ) : (
        <p>Loading breweries</p>
    );

    return ( 
        <>
        <article id="para2">
        {mapBreweries}
        </article>
        </>
     );
}

export default VisitedList;