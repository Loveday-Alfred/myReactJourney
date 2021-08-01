import './App.css';
import ExpenseItem from './components/ExpenseItem';
import NewExpense from './components/NewExpense';

const App = () => {

  const expenses = [
    {title: 'Car Insurance', amount: '$645.44', id: 1, date: new Date(2021, 7, 1)},
    {title: 'Car Services', amount: '$645.44', id: 2, date: new Date(2020, 7, 20)},
    {title: 'New Desktop', amount: '$645.44', id: 3, date: new Date(2019, 6, 10)},
  ];

  return (
    <div className="App">
       <h2>React...The Basics</h2>
       <h3><NewExpense /></h3>
       <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} />
       <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} />
       <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date} />
    </div>
  );
}

export default App;