import ExpenseItem from "./ExpenseItem"
import "./Expenses.css"
import Card from "../UI/Card"

// function Expenses({ expenses }) {
const Expenses = ({ expenses }) => {

    return (
        <Card cardCSSClass="expenses">
            <ExpenseItem expenses={expenses} id={expenses[0].id} title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} />
            <ExpenseItem expenses={expenses} id={expenses[1].id} title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} />
            <ExpenseItem expenses={expenses} id={expenses[2].id} title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date} />
            <ExpenseItem expenses={expenses} id={expenses[3].id} title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date} />
        </Card>
    )
}

export default Expenses