import * as React from 'react'
import {Link} from 'react-router-dom'

function Home() {
    // let form = React.useRef('')
/*     const handleSubmit = (e) => {
        e.preventDefault()
        console.log( form.current[0])
    } */
    
    return (
        <div>
            <Link to="/posts">Posts</Link>
            <Link to="/todos">Todos</Link>
            <h1>Use the name above</h1>
{/*             <form ref={form} action="#" onSubmit={handleSubmit}>
                <input type="text" id="username" />
                <input type="password" id="password" />
                <button>Check it</button>
            </form> */}
        </div>
    )
}

export default Home