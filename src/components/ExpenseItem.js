import "./ExpenseItem.css"
import ExpenseDate from "./ExpenseDate"
import Card from "./Card";

function ExpenseItem({ title, amount, date }) {


    return (
        <Card cardCSSClass="expense-item">
            <ExpenseDate date={date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">{amount}EUR</div>
            </div>
        </Card>
    )
}

export default ExpenseItem;