import React from 'react'

// function Greet(){
//     return <h2>abuzahrah75@gmail.com</h2>
// }

// new syntax ES6:

const Greet = (props) => {

//destructuring props and state
// const Greet = ({name, jantina}) => {
    //we call name & jantina without props when used like this


    //we can also destructure the props inside using const:
    const {name, jantina } = props

    // console.log(props)
    // return <h2>Assalam {props.name}</h2>

    // bila ada 'children' yg nak kena render:
    return (
        <div>
            {/* <h2>Assalam {props.name} ({props.jantina})</h2> */}
            <h2>Assalam {name} ({jantina})</h2>
        {props.children}
        </div>
    )
}

export default Greet


