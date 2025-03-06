import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


// WITHOUT props
// function Button() {
//   return (
//     <button>Click Me!</button>
//   );
// }

// function Button2() {
//   return (
//     <button>Don't Click Me!</button>
//   );
// }

// function App() {
//   return (
//     <div>
//       <Button />
//       <Button2 />
//       <Button />
//     </div>
//   );
// }

// WITH props
// function Button(props) {
//   const buttonStyle = {
//     color: props.color,
//     fontSize: props.fontSize + 'px'
//   };

//   return (
//     <button style={buttonStyle}>{props.text}</button>
//   );
// }

// function App() {
//   return (
//     <div>
//       <Button text="Click Me!" color="blue" fontSize={12} />
//       <Button text="Don't Click Me!" color="red" fontSize={12} />
//       <Button text="Click Me!" color="blue" fontSize={20} />
//     </div>
//   );
// }

// WITH props and destructuring
// function Button({ text, color, fontSize }) {
//   const buttonStyle = {
//     color: color,
//     fontSize: fontSize + "px"
//   };

//   return <button style={buttonStyle}>{text}</button>;
// }

// function App() {
//   return (
//     <div>
//       <Button text="Click Me!" color="blue" fontSize={12} />
//       <Button text="Don't Click Me!" color="red" fontSize={12} />
//       <Button text="Click Me!" color="blue" fontSize={20} />
//     </div>
//   );
// }

// WITH props and default values
// function Button({ text = "Click Me!", color = "blue", fontSize = 12 }) {
//   const buttonStyle = {
//     color: color,
//     fontSize: fontSize + "px"
//   };

//   return <button style={buttonStyle}>{text}</button>;
// }

// function App() {
//   return (
//     <div>
//       <Button />
//       <Button text="Don't Click Me!" color="red" />
//       <Button fontSize={20} />
//     </div>
//   );
// }

// WITH props and defaultProps
// function Button({ text, color, fontSize }) {
//   const buttonStyle = {
//     color: color,
//     fontSize: fontSize + "px"
//   };

//   return <button style={buttonStyle}>{text}</button>;
// }

// Button.defaultProps = {
//   text: "Click Me!",
//   color: "blue",
//   fontSize: 12
// };

// function App() {
//   return (
//     <div>
//       <Button />
//       <Button text="Don't Click Me!" color="red" />
//       <Button fontSize={20} />
//     </div>
//   );
// }

// WITH props and Functions as props
// function Button({ text = "Click Me!", color = "blue", fontSize = 12, handleClick }) {
//   const buttonStyle = {
//     color: color,
//     fontSize: fontSize + "px"
//   };

//   return (
//     <button onClick={handleClick} style={buttonStyle}>
//       {text}
//     </button>
//   );
// }

// function App() {
//   const handleButtonClick = () => {
//     window.location.href = "https://www.google.com";
//   };

//   return (
//     <div>
//       <Button handleClick={handleButtonClick} />
//     </div>
//   );
// }

// WITH props and Functions as props. Anonymous functions
function Button({ text = "Click Me!", color = "blue", fontSize = 12, handleClick }) {
  const buttonStyle = {
    color: color,
    fontSize: fontSize + "px"
  };

  return (
    <button onClick={handleClick} style={buttonStyle}>
      {text}
    </button>
  );
}

function App() {
  const handleButtonClick = (url) => {
    window.location.href = url;
  };

  return (
    <div>
      <Button handleClick={() => handleButtonClick('https://www.theodinproject.com')} />
    </div>
  );
}


export default App

