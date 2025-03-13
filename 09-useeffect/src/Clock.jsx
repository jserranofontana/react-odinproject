
// Opción 1 - Contador básico => No funciona bien

// import { useState } from "react";

// export default function Clock() {
//   const [counter, setCounter] = useState(0);

//   setInterval(() => {
//     setCounter(count => count + 1)
//   }, 1000);

//   return (
//     <p>{counter} seconds have passed.</p>
//   );
// }

// Opción 2 - Contador básico con useEffect => No funciona bien

// import { useEffect, useState } from "react";

// export default function Clock() {
//   const [counter, setCounter] = useState(0);

//   useEffect(() => {
//     setInterval(() => {
//       setCounter(count => count + 1)
//     }, 1000);
//   })

//   return (
//     <p>{counter} seconds have passed.</p>
//   );
// }

// Opción 3 - Contador básico con useEffect y dependencias - Strict Mode => No funciona bien

// import { useEffect, useState } from "react";

// export default function Clock() {
//   const [counter, setCounter] = useState(0);

//   useEffect(() => {
//     setInterval(() => {
//       setCounter(count => count + 1)
//     }, 1000);
//   }, [])

//   return (
//     <p>{counter} seconds have passed.</p>
//   );
// }

// Opción 3 - Contador básico con useEffect y cleanup CallBack - Si que funciona
import { useEffect, useState } from "react";

export default function Clock() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const key = setInterval(() => {
      setCounter(count => count + 1)
    }, 1000);

    return () => {
      clearInterval(key);
    };
  }, [])

  return (
    <p>{counter} seconds have passed.</p>
  );
}