import { useState } from 'react';

export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        console.log(number);
        setNumber(number + 1);
        console.log(number);
        setNumber(number + 1);
        console.log(number);
        setNumber(number + 1);
        console.log(number);
      }}>+3</button>
    </>
  )
}
