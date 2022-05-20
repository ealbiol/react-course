import * as React from "react"

function Switcher() {

    const [boxStatus, setBoxStatus] = React.useState(false)

    const handleSwitcher = () => {
        setBoxStatus(!boxStatus)
    }

    return (
        <div>
            <button onClick={handleSwitcher}>{boxStatus === true ? "Hide Content" : "Show Content"}</button>
            {
                boxStatus === true ?
                    <h1>hola</h1>
                    :
                    ""
            }
        </div>
    )
}

export default Switcher;
