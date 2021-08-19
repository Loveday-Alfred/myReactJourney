import { useEffect } from "react";
import axios from "axios";

// API Key 
const API_KEY = process.env.REACT_APP_API_KEY;

const Random = () => {

    useEffect(() => {
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
        axios.get(url);
    }, []);

    return (
        <div>
            <h1>Random</h1>
        </div>
    )
}

export default Random;