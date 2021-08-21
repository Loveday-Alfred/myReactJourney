import { useHistory } from 'react-router-dom';
import QuoteForm from '../components/quotes/QuoteForm';

const NewQoute = () => {
    const history = useHistory();

    const addQuoteHandler = (quoteData) => {
        console.log(quoteData);
        history.push('/qoutes');
    }
    return (
        <QuoteForm onAddQuote={addQuoteHandler} />
    )
}

export default NewQoute;