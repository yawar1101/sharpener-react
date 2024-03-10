import './ExpenseItem.css'
import ExpenseDetail from './ExpenseDetail'
import ExpenseDate from './ExpenseDate'

export default function ExpenseItem(props) {
    return (
        <div className='expense-item'>
            <ExpenseDate date={props.date}/>
            <ExpenseDetail title={props.title} amount={props.amount} />
        </div>
    )
}