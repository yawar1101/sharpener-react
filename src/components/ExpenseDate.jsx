import './ExpenseItem.css'

export default function ExpenseDate(props) {
    return (
        <>
            <div>{props.date.toLocaleDateString()}</div>
        </>
    )
}