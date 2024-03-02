import { useState } from 'react'
import ExpenseItem from './components/ExpenseItem'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import expenses from './data'

function App() {
  return (

    <div>
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.title}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </div>

  )
}

export default App
