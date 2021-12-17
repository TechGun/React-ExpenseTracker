import React, {useState, useEffect} from 'react';

import NewExpense from './components/NewExpense/NewExpense';

import Expenses from './components/Expenses/Expenses';


let DUMMY_EXPENSE = [];

const App = () => {
    
    const [expenses, setExpenses] = useState(DUMMY_EXPENSE);

    function fetchData(){
        fetch('https://techgun.website/sample/api/read.php').then(
            response => {
                return response.json();
            }
        ).then(
            data => {
                //console.log(data);
                setExpenses(data);
            }
        );
    }

    useEffect(()=>{
        fetchData();
    },[]);

    const addExpenseHandler = (expense) => {
        fetch('https://techgun.website/sample/api/create.php', {
            method: 'POST',
            body: JSON.stringify(expense),
            headers: {
                'content-Type' : 'application/json'
            }
        }).then(
            response => {
                fetchData();
            }
        );
    };

    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses item={expenses} />
        </div>    
    );
}

export default App;