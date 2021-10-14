import * as React from 'react'
import logo from '../imgs/myLogo.jpg'

function App() {
    const [handle,setHandle] = React.useState('')
    const handleclick = ()=>{
        console.log(handle)
    }
    return(
        <> "
            <img src= {logo} alt = "Get Tweets logo" width="150" height ="70"/>
            <div>
                <input type = "text" placeholder ="@handle" onChange={(event) => setHandle(event.target.value)} />
                <button onClick = {handleclick}>Get</button>
            </div>
        </>

    )
}
export default App