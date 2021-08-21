import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QOUTES = [
    {id: 'p1', author: 'Loveday', text: 'React is Reactive'},
    {id: 'p2', author: 'Fred', text: 'React is Great'}
]

const AllQuotes = () => {
    return (
        <QuoteList quotes={DUMMY_QOUTES} />
    )
}

export default AllQuotes;