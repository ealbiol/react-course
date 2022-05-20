import "./Card.css"

// function Card({ children, cardCSSClass }) {
const Card = ({ children, cardCSSClass }) => {
    const classes = 'card ' + cardCSSClass

    return (
        <div className={classes}>{children}</div>
    )
}

export default Card;




