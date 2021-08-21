import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';

const DUMMY_QOUTES = [
    {id: 'p1', author: 'Loveday', text: 'React is Reactive'},
    {id: 'p2', author: 'Fred', text: 'React is Great'},
];

const QouteDetail = () => {
    const params = useParams();
    const match = useRouteMatch();

    const quote = DUMMY_QOUTES.find((qoute) => qoute.id === params.qouteId);

    if(!quote) { 
        return <p>No Quote Found</p> 
    }

    return (
        <>
            <HighlightedQuote text={quote.text} author={quote.author} />
            <Route path={match.path} exact>
              <div className="centered">
                <Link className="btn--flat" to={`${match.url}/comments`}>Load Comments</Link>
              </div>
            </Route>
            <Route path={`${match.path}/comments`}>
            <Comments />
            </Route>
        </>
    )
}

export default QouteDetail;