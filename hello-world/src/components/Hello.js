import React from 'react'
//i cant change it value at any point in time bcos it is immutable
const Hello = (props) => {
    return (
        <div>
            <h1>Hello Rachael</h1>
            {props.children}
        </div>
    )
}


export default Hello;