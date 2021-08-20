import { useEffect, useState } from "react";
import axios from "axios";

// API Key 
const API_KEY = 'gJItePoptMQv1J4fcTIuK3PhT9dRqn40';
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif = (tag) => {
    const [gifs, setGifs] = useState('');

    const fetchGif = async (tag) => {
        const { data } = await axios.get(tag ? `${url}&tag=${tag}` : url);
        const imgSrc = data.data.images.downsized_large.url;
        setGifs(imgSrc);
    }

    useEffect(() => {
       fetchGif(tag);
    }, [tag]);

    return { gifs, fetchGif };
}

export default useGif;