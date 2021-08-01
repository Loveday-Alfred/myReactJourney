import { useState } from 'react';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
    const month = props.date.toLocaleString('en-US', { month: 'long' });
    const day = props.date.toLocaleString('en-US', { day: '2-digit' });
    const year = props.date.getFullYear();

    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        setTitle('Updated');
    }

    return (
        <>
        <div className='Expense-item'>
            <div>
                <div>{day}</div>
                <div>{month}</div>
                <div>{year}</div>
            </div>
            <div className='Expense-item__description'>
                <h5>{title}</h5>
                <p className='Expense-item__price'>{props.amount}</p>
            </div>
        </div>
        <button onClick={clickHandler}>click</button>
        </>
    )
}

export default ExpenseItem;