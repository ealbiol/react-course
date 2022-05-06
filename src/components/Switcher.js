import * as React from "react"

function Switcher() {

    const [boxStatus, setBoxStatus] = React.useState(true)

    const handleSwitcher = () => {
        setBoxStatus(!boxStatus)
    }

    return (
        <div>
            <button onClick={handleSwitcher} >Click</button>
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
