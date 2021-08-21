import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import { useEffect } from "react";

import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import LoadingSpinner from "../components/UI/LoadingSpinner";

import useHttp from '../components/hooks/use-http';
import { getSingleQuote } from '../components/lib/api';

const QouteDetail = () => {
    const params = useParams();
    const match = useRouteMatch();

    const { quoteId } = params;

    const { sendRequest, status, data: loadedQuotes, error } = useHttp(
        getSingleQuote,
        true
    );

    useEffect(() => {
        sendRequest(quoteId)
    }, [sendRequest, quoteId]);

    if(status === 'pending') {
        return (
            <div className='centered'>
              <LoadingSpinner />
            </div>
        )
    }

    if(error) {
       return <p className='centered'>{error}</p>
    }   

    if(!loadedQuotes) return <p>No Quote Found</p> 

    return (
        <>
            <HighlightedQuote text={loadedQuotes.text} author={loadedQuotes.author} />
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