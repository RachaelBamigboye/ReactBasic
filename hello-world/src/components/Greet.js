import React from 'react'


// function Greet(props){
//     return <h1>Hello Michael {props.name} </h1>
// }

    /* to rewrite it with an arrow syntax */
//   const Greet =() => <h1>Hello Michael</h1>

   /* to rewrite it with an arrow syntax */
  const Greet =(props) => 
  <div><h1>Hello Michael {props.name} {props.heroName}</h1>
{props.children}
</div>
  export default Greet;


