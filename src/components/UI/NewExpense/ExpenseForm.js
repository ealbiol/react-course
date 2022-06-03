import * as React from "react"
import "./ExpenseForm.css"

const ExpenseForm = () => {

    const [enteredTitle, setEnteredTitle] = React.useState(null)
    const [enteredAmount, setEnteredAmount] = React.useState(null)
    const [enteredDate, setEnteredDate] = React.useState(null)

    // GETTING INPUT TITLE VALUE
    const titleChangeHandler = (event) => {
        // console.log("Hola desde titleChangeHandler", event.target.value)
        setEnteredTitle(event.target.value)
    }
    // GETTING INPUT AMOUNT VALUE
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
    }
    // GETTING DATE AMOUNT VALUE
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
    }


    console.log("enteredTitle State value: ", enteredTitle)
    console.log("enteredAmount State value: ", enteredAmount)
    console.log("enteredDate State value: ", enteredDate)

    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2022-05-19" max="2025-12-31" onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm