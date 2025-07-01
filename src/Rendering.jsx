export { App2, App3, App4, App5 };

//rendering a list of elements

function App2() {
  const animals = ["Lion", "Dragon", "Snake", "Lizard"];
  const animalsList = animals.map((animal) => <li key={animal}>{animal}</li>)
  /* another way to write this is in App4 (ignore the ternary operator) */

  return (
    <div>
      <h1>Animals: </h1>
      <ul>
        {animalsList}
      </ul>
    </div>
  );
}

//rendering a list of components

function ListItem(props) {
  return <li>{props.animal}</li>
}

function List(props) {
  return (
    <ul>
      {props.animals.map((animal) => {
        return <ListItem key={animal} animal={animal} />;
      })}
    </ul>
  );
}

function App3() {
  const animals = ["Lion", "Cow", "Snake", "Lizard"];

  return (
    <div>
      <h1>Animals: </h1>
      <List animals={animals} />
    </div>
  );
}

//conditionally rendering

function List2(props) {
  return (
    <ul>
      {props.animals.map((animal) => {
        return animal.startsWith("L") ? <li key={animal}>{animal}</li> : null;

        /* another way with && operator: */
        /* return animal.startsWith("L") && <li key={animal}>{animal}</li>; */

      })}
    </ul>
  );
}

function App4() {
  const animals = ["Lion", "Cow", "Snake", "Lizard"];

  return (
    <div>
      <h1>Animals: </h1>
      <List2 animals={animals} />
    </div>
  );
}

//2 if statements

function List3(props) {
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

function App5() {
  const animals = [];   //if I replace the list with an empty string - no list

  return (
    <div>
      <h1>Animals: </h1>
      <List3 animals={animals} />   {/* if I  delete animals={animals} - no list*/}
    </div>
  );
}