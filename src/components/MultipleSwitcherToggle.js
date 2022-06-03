import * as React from "react"

const buttons = [
    {
        id: 'b-0',
        title: 'Toilet Paper',
        // status: "deactivated"
    },
    {
        id: 'b-1',
        title: 'Toilet Paper',
        // status: "deactivated"
    },
    {
        id: 'b-2',
        title: 'Car Insurance',
        // status: "deactivated"
    },
    {
        id: 'b-3',
        title: 'New Desk (Wooden)',
        // status: "deactivated"
    },
];


const MultipleSwitcherToggle = () => {

    const [buttonStatus, setButtonStatus] = React.useState(null)

    const handleSwitcher = (params) => {
        console.log("params:--->", params)
        setButtonStatus(params.id)
        console.log(buttons)
    }
    // console.log("aaaa", buttonStatus)

    return (
        <div>
            {
                buttons.map((button, index) => {
                    return (
                        <div key={index}>
                            <button
                                // onClick={handleSwitcher}
                                onClick={() => handleSwitcher(button)}
                            >
                                Button {index} and id: {button.id}
                            </button>
                            <div>
                                {
                                    button.id === buttonStatus ?
                                        <h1>{button.title}</h1>
                                        :
                                        ""
                                }
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default MultipleSwitcherToggle















