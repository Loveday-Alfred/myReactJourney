import { useState } from "react";
import useGif from "../hooks/useGif";

const Tag = () => {
    const [tag, setTag] = useState('dogs');
    const {gifs, fetchGif} = useGif(tag);

    return (
        <div className="container">
            <h1>Random {tag} Gif</h1>
            <img width="500" src={gifs} alt="Random Gifs" />
            <input value={tag} onChange={(e) => setTag(e.target.value)}/>
            <button onClick={() => fetchGif(tag)}>New Gif</button>
        </div>
    )
}

export default Tag;