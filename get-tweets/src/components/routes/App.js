import * as React from 'react'
// import logo from '../imgs/myLogo.jpg'
import axios from 'axios'

function App() {
    // const [handle,setHandle] = React.useState('')
    //const [tweets, setTweets] =React.useState(['HTML5','JS'])
    // const handleclick = ()=>{
    //     console.log(handle)
    // }
    const [error, setError] = React.useState('')
    const [todos, setTodos] = React.useState([])
    React.useEffect(() => {

    }, [])

    // const handleClick = async () => {
    //     console.log(handle)
    //     setError('')
    const getTodos =async()=> {
        const API_URL = "https://jsonplaceholder.typicode.com/todos";
        let response = ''

        try {
            response = await axios.get(API_URL);
            // console.log(response)
            let { data } = response
            setTodos(data)
            // console.log(data)
        } catch (error) {

            setError(<h1>Resource error</h1>)
            console.log(error)
            console.log(response)
        }
    } 
    const handleClick = () => {
        setTodos([])
        setError('')
        setTimeout(getTodos, 30000)
    }   
    return(
        <>
            {/* <img src= {logo} alt = "Get Tweets logo" width="150" height ="70"/> */}
            <h1>Todos</h1>
            {error}
            <div>
                {/* <input type = "text" placeholder ="@handle" onChange={(event) => setHandle(event.target.value)} />
                <button onClick = {handleclick}>Get</button> */}
                <button onClick = {handleclick}>Get Todos</button>

            </div>
            {todos?.length <= 0 && <div>Loading....</div>}
            {todos?.length > 0 &&
                <ul>
                    {todos.map(todo => <li key={todo.id}>{todo.title}</li>)}
                </ul>
            }


        </>

    )
}
export default App