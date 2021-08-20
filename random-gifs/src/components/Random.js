import useGif from "../hooks/useGif";

const Random = () => {
    const {gifs, fetchGif} = useGif();

    return (
        <div className="container">
            <h1>Random Gif</h1>
            <img width="500" src={gifs} alt="Random Gifs" />
            <button onClick={fetchGif}>New Gif</button>
        </div>
    )
}

export default Random;