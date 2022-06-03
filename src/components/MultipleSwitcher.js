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


const MultipleSwitcher = () => {

    const [buttonStatus, setButtonStatus] = React.useState([])

    const handleSwitcher = (params) => {
        setButtonStatus(
            previousButtonStatus => {
                previousButtonStatus.push(params.id)
                console.log("next", previousButtonStatus)
                return previousButtonStatus
            }/* 
            buttonStatus.push(params.id)*/
        )
    }

    // console.log('Button baby', buttonStatus)


    return (
        <div>
            {
                buttons.map((button, index) => {
                    return (
                        <div key={index}>
                            <button onClick={() => handleSwitcher(button)}>
                                Button {index} {button.id}
                            </button>
                            <div>
                                {
                                    buttonStatus.includes(button.id) ?
                                        <h1>{button.title}</h1>
                                        :
                                        null
                                }
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default MultipleSwitcher


// {
//     button.id === buttonStatus ?
//         <h1>{button.title}</h1>
//         :
//         ""
// }