// import React, {useState, useEffect} from 'react'
import * as React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import getData from '../helpers/fetchData'
import '../../styles/posts.css'
function Posts() { //Opening a componen

    const [error, setError] = React.useState('')
    const [posts, setPosts] = React.useState([])


       const Handleposts = async()=>{
            setPosts([])
            setError('')
            const posts = await getData('posts')
        
            if (posts.hasOwnProperty (error) && posts.error !== undefined){
                return setError(posts.error)
            }
            setPosts(posts)
        }
    
    React.useEffect(() => { //Is invoked at component rendering
        Handleposts()
    }, [])

    
    const handleClick = () => {
        Handleposts ()
    }

/*     const myOutPut = <div>
        <b>Some thing </b >
    </div>
    return (myOutPut) */

    return (
        <div className="container mx-auto ">
            <Link to= "/">Home page</Link>
            <Link to="/todos">Todos</Link>
            <h1>Posts</h1>
            {error}
            <div>
                <button onClick={handleClick}>Get Posts</button>
            </div>

            {posts?.length <= 0 && <div>Loading...</div>}
            {posts?.length > 0 &&
                <ul>
                    {posts.map(post => 
                    <Link key={post.id} to={`/posts/${post.id}`}>
                        <li >
                            <h2>{post.title}</h2> 
                            <p>{post.body}</p>
                        </li>
                     </Link>
                    )}
                </ul>
               
                    }
        </div>
    )
}

export default Posts