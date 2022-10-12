import { useState, useEffect } from "react";
 import BlogList from "./BlogList.js";

const Home = () => {

    const [blogs, setBlogs] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
        .then(response => {
            if(!response.ok){
                throw Error('could not fetch')
            }
            return response.json()
        })
        .then((data) => {
            console.log(data)
            setBlogs(data)
            setIsLoading(false)
            setError(null)
        })
        .catch(err => {
            setError(err.message)
            setIsLoading(false)
        })
    },[]);
    

    return ( 
        <div className="home">
            { error && <div>{ error }</div>}
            { isLoading && <div>Loading...</div> }
            {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
        </div>
        )
}
 
export default Home;