import * as React from "react"
import "./ExpenseItem.css"
import ExpenseDate from "./ExpenseDate"
import Card from "../UI/Card";

// function ExpenseItem({ title, amount, date }) {
const ExpenseItem = ({ title, amount, date, id, expenses }) => {

    const [expenseTitle, setExpenseTitle] = React.useState(title)

    const changeTitleHandler = () => {
        // id === "e1" ? setExpenseTitle(`hola`) : setExpenseTitle("bu")
        setExpenseTitle("Loading...")
        setTimeout(() => setExpenseTitle("Updated!"))
        // setTimeout(() => setExpenseTitle(<b style={{ color: "blue" }}>Updated!</b>), 1000)
        // setExpenseTitle("Updated!")
    }

    return (
        <Card cardCSSClass="expense-item">
            <ExpenseDate date={date} />
            <div className="expense-item__description">
                <h2>{expenseTitle}</h2>
                <div className="expense-item__price">{amount}EUR</div>
            </div>
            <button onClick={changeTitleHandler}>Change Title</button>
        </Card>
    )
}

export default ExpenseItem;