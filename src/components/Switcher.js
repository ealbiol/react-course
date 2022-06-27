import * as React from "react"

function Switcher() {

    const [boxStatus, setBoxStatus] = React.useState(false)

    const handleSwitcher = () => {
        setBoxStatus(!boxStatus)
    }

    return (
        <div style={{ textAlign: "center" }}>
            <button onClick={handleSwitcher}>{boxStatus === true ? "Hide Content" : "Show Content"}</button>
            {
                boxStatus === true ?
                    <h1 style={{ backgroundColor: "salmon" }}>I'm a simple toogle button</h1>
                    :
                    ""
            }
        </div>
    )
}

export default Switcher;
