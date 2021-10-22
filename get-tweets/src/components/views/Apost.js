import React from 'react'
import {useParams}from'react-router-dom'
import getData from '../helpers/fetchData'
const Apost = () => {
    let{id} =useParams ()
    const [post, setPost] = React.useState({})
    const handlePost = async ()=> {
        let post = await getData(`posts/${id}`)
        post.id == id && setPost(post)
        console.log(post)
    }
     
    React.useEffect(()=>{
        handlePost()
    }, [])
    return (
        <div>
            {
                (!post.id)? <h1>Loading....</h1>:
                <div>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                </div>
            }
        </div>
    )
}

export default Apost

