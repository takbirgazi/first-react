import { useEffect } from "react"
import { useState } from "react"
import Blog from "../Blog/Blog"

export default function Blogs(){
    const [blogs, setBlogs] = useState([])
    useEffect(()=>{
        fetch("blog-data.json")
        .then(res => res.json())
        .then(blogs => setBlogs(blogs))
    },[])
    return(
        <div className="w-2/3">
            <div>
                {blogs.map((blog, ind) => <Blog key={ind} blogInfo={blog}></Blog>)}
            </div>
        </div>
    )
}