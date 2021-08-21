import { Link, Route, useParams } from "react-router-dom";
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';

const DUMMY_QOUTES = [
    {id: 'p1', author: 'Loveday', text: 'React is Reactive'},
    {id: 'p2', author: 'Fred', text: 'React is Great'},
];

const QouteDetail = () => {
    const params = useParams();
    const quote = DUMMY_QOUTES.find((qoute) => qoute.id === params.qouteId);

    if(!quote) { 
        return <p>No Quote Found</p> 
    }

    return (
        <>
            <HighlightedQuote text={quote.text} author={quote.author} />
            <div className="centered">
               <Link className="btn--flat" to={`/qoutes/${params.qouteId}/comments`}></Link>
            </div>
            <Route path={`/qoutes/${params.qouteId}/comments`}>
            <Comments />
            </Route>
        </>
    )
}

export default QouteDetail;