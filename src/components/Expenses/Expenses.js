import React from 'react';

import './Expenses.css';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';

const Expenses = (props) => {
    return (
        <Card className="expenses">
            {
                props.item.map(
                    expense => (
                        <ExpenseItem 
                            key={ expense.id }
                            date={ expense.date } 
                            title={ expense.title } 
                            amount={ expense.price } />
                    )
                )
            }

        </Card>
    );
}

export default Expenses;