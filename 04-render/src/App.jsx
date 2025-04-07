import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Rendering array of components
// function ListItem(props) {
//   return (<li>{props.animal}</li>);
// }

// function List(props) {
//   return (
//     <ul>
//       {props.animals.map((animal) => {
//         return <ListItem key={animal} animal={animal} />;
//       })}
//     </ul>
//   );
// }

// Conditional Rendering - Ternary Operator
// function List(props) {
//   return (
//     <ul>
//       {props.animals.map((animal) => {
//         return animal.startsWith("L") ? <li key={animal}>{animal}</li> : null;
//       })}
//     </ul>
//   );
// }

// Conditional Rendering - && operator
// function List(props) {
//   return (
//     <ul>
//       {props.animals.map((animal) => {
//         return animal.startsWith("L") && <li key={animal}>{animal}</li>;
//       })}
//     </ul>
//   );
// }

// Conditional Rendering - if, if/else, switch
function List(props) {
  if (!props.animals) {
    return <div>Loading...</div>;
  }

  if (props.animals.length === 0) {
    return <div>There are no animals in the list!</div>;
  }

  return (
    <ul>
      {props.animals.map((animal) => {
        return <li key={animal}>{animal}</li>;
      })}
    </ul>
  );
}

function App() {
  // const animals = ["Lion", "Cow", "Snake", "Lizard"];
  const animals = [];
  const animalsList = animals.map((animal) => <li key={animal}>{animal}</li>)

  return (
    <>
      {/* Lista de elementos */}
      <div>
        <h1>Animals: </h1>
        <ul>
          <li>Lion</li>
          <li>Cow</li>
          <li>Snake</li>
          <li>Lizard</li>
        </ul>
      </div>
      {/* Usando array.map */}
      <div>
        <h1>Animals (array.map): </h1>
        <ul>
          {animals.map((animal) => {
            return <li key={animal}>{animal}</li>;
          })}
        </ul>
      </div>
      {/* Usando array.map - Opc. 2 */}
      <div>
        <h1>Animals (array.map - Opc 2): </h1>
        <ul>
          {animalsList}
        </ul>
      </div>
      {/* Lista de componentes */}
      <div>
        <h1>Animals (Lista de componentes): </h1>
        <List animals={animals} />
      </div>
    </>
  )
}

export default App
