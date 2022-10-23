import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="link"></div>
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
        </div>
      );
}
 
export default Navbar;