import React from 'react';
import  { add, sub, mult, div } from './Calc';

function App(){
 return(
    <ul>
      <li>Sum of two number is {add(20, 20)}</li>
      <li>Subtract of two number is {sub(20, 10)}</li>
      <li>Multiply of two number is {mult(20, 20)}</li>
      <li>Divide of two number is {div(10, 109)}</li>
    </ul>
    )
}

export default App;
