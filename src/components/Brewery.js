const Brewery = ({brewery}) => {
    return ( 
        <>
            <li>
                {brewery.name}
                <button> Visited </button>
                <button> Favourite </button>
            </li>
        </>
     );
}
 
export default Brewery;