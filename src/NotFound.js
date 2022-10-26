import { Link } from 'react-router-dom'


export const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry... This page doesn't exist.</h2>
            <Link to="/">Go back to the homepage</Link>
            
            </div>
     );
}
 
