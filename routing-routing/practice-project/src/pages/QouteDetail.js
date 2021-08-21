import { Route, useParams } from "react-router-dom";
import Comments from '../components/comments/Comments';

const QouteDetail = () => {
    const params = useParams();

    return (
        <>
            <h1>Qoute Detail</h1>
            <p>{params.qouteId}</p>
            <Route path={`/qoutes/${params.qouteId}/comments`}>
            <Comments />
            </Route>
        </>
    )
}

export default QouteDetail;