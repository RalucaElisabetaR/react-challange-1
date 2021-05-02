import React from 'react'
import NewExpense from './components/NewExpense/NewExpense'
import Expenses from './components/Expenses/Expenses'

const App = () => {
    const expenses = [
        {
            id: 'e1',
            title: 'Toilet Paper',
            amount: 94.12,
            date: new Date(2021, 7, 14),
        },
        {
            id: 'e2',
            title: 'New Car',
            amount: 799.49,
            date: new Date(2021, 3, 12),
        },
        {
            id: 'e3',
            title: 'Car Insurance',
            amount: 294.67,
            date: new Date(2021, 2, 28),
        },
        {
            id: 'e4',
            title: 'New Desk',
            amount: 450,
            date: new Date(2021, 5, 12),
        },
    ]

    return (
        <div>
            <NewExpense />
            <Expenses items={expenses} />
        </div>
    )
}

export default App
