import { useState } from "react"

const ExpenseForm = () => {
    const [handler, setHandler] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    const onChangeHandler = (e) => {
        setHandler(e.target.value);
    }

    const onChangeAmountHandler = (e) => {
        setAmount(e.target.value);
    }

    const onChangeDateHandler = (e) => {
        setDate(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();

        const expenseData = {
            title: handler,
            amount: amount,
            date: new Date(date)
        };
        console.log(expenseData);
        setHandler('');
        setAmount('');
        setDate('');
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Title</label>
                    <input value={handler} onChange={onChangeHandler} type='text' />
                </div>
                <div>
                    <label>Amount</label>
                    <input value={amount} onChange={onChangeAmountHandler} type='number' min="0.01" step="0.01" />
                </div>
                <div>
                    <label>Date</label>
                    <input value={date} onChange={onChangeDateHandler} type='date' min="2019-01-01" max="2021-12-30" />
                </div>
                <div>
                    <button type="submit">Add Expense</button>
                </div>
            </form>
        </div>
    )
}

export default ExpenseForm;