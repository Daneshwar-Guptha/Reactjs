import { useState, useEffect } from "react"

const Home = () => {
    const [userData, setUserData] = useState([])


    const getDeatils = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await response.json();

        setUserData(data)



    }
    useEffect(() => {

        getDeatils()
    }, [])





    return (


        <>

            <h1>Welcome to Home</h1>

            {userData.map(eachItem => (
                <h1>{eachItem.name}</h1>
            ))}
        </>
    )




}
export default Home