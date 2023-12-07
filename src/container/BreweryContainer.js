import { useEffect, useState } from "react";
import BreweryList from "../components/BreweryList";
import searchForm from "../components/searchForm";

const BreweryContainer = () => {
    const [breweries, setBreweries] = useState([])

    const fetchBreweries = async () => {
        const response = await fetch("https://api.openbrewerydb.org/v1/breweries");
        const data = await response.json();

        setBreweries(data);
        console.log(breweries);
    }

    useEffect(() => {
        fetchBreweries();
        
    },[])


    
    return ( 
        <>
        <BreweryList breweries={breweries}/>
        </>
     );
}
 
export default BreweryContainer;