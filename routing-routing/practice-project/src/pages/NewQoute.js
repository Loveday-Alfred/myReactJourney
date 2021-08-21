import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import QuoteForm from '../components/quotes/QuoteForm';
import useHttp from '../components/hooks/use-http';
import { addQuote } from '../components/lib/api';

const NewQoute = () => {
    const { sendRequest, status } = useHttp(addQuote)
    const history = useHistory();

    useEffect(() =>{
        if(status === 'completed') {
           history.push('/qoutes');
        }
    }, [status, history]);

    const addQuoteHandler = (quoteData) => {
        sendRequest(quoteData);
    };

    return (
        <QuoteForm isLoading={status === 'pending'} onAddQuote={addQuoteHandler} />
    )
}

export default NewQoute;