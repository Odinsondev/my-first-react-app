export {
  App2,
  App3,
  App4,
  App5,
  PackingList,
  PackingListChallenge1,
  PackingListChallenge2,
  DrinkList
};

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

//two if statements

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


//react.dev example 1

function Item({ name, isPacked }) {
  if (isPacked) {
    return <li className="item">{name} ✅</li>;
  }
  return <li className="item">{name}</li>;
}

function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item 
          isPacked={true}
          name="Space suit" 
        />
        <Item 
          isPacked={false} 
          name="Helmet with a golden leaf" 
        />
        <Item 
          isPacked={true} 
          name="Photo of Tam" 
        />
      </ul>
    </section>
  );
}


//Challenge 1 of 3: Show an icon for incomplete items with ? : 
//Use the conditional operator (cond ? a : b) to render a ❌ if isPacked isn’t true.

function Item2({ name, isPacked }) {
  return (
    <li className="item">
      {name} {isPacked ? '✅' : '❌'}
    </li>
  );
}

function PackingListChallenge1() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item2 
          isPacked={false} 
          name="Space suit" 
        />
        <Item2 
          isPacked={true} 
          name="Helmet with a golden leaf" 
        />
        <Item2 
          isPacked={false} 
          name="Photo of Tam" 
        />
      </ul>
    </section>
  );
}

//Challenge 2 of 3: Show the item importance with && 
//In this example, each Item receives a numerical importance prop.
//Use the && operator to render “(Importance: X)” in italics,
//but only for items that have non-zero importance.
//Your item list should end up looking like this:

//Space suit (Importance: 9)
//Helmet with a golden leaf
//Photo of Tam (Importance: 6)

function Item3({ name, importance }) {
  return (
    <li className="item">
      {name} { importance > 0 && <i>(Importance: {importance})</i>}
    </li>   /* when using <i></i> no need to use quotes */
  );
}

function PackingListChallenge2() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item3 
          importance={9} 
          name="Space suit" 
        />
        <Item3 
          importance={0} 
          name="Helmet with a golden leaf" 
        />
        <Item3 
          importance={6} 
          name="Photo of Tam" 
        />
      </ul>
    </section>
  );
}

//Challenge 3 of 3: Refactor a series of ? : to if and variables 
//This Drink component uses a series of ? : conditions to show
//different information depending on whether the name prop is "tea" or "coffee".
//The problem is that the information about each drink is spread across
//multiple conditions.
//Refactor this code to use a single if statement instead of three ? : conditions.

function Drink({ name }) {
  let part = '';
  let content = '';
  let age = '';

  if (name === 'tea') {
    part = 'leaf';
    content = '15–70 mg/cup';
    age = '4,000+ years';
  } else if (name === 'coffee') {
    part = 'bean';
    content = '80–185 mg/cup';
    age = '1,000+ years';
  } else {
    part = 'sorry, no info on file';
    content = 'sorry, no info on file';
    age = 'sorry, no info on file';
  }

  return (
    <section>
      <h1>{name}</h1>
      <dl>
        <dt>Part of plant</dt>
        <dd>{part}</dd>
        <dt>Caffeine content</dt>
        <dd>{content}</dd>
        <dt>Age</dt>
        <dd>{age}</dd>
      </dl>
    </section>
  );
}

function DrinkList() {
  return (
    <div>
      <Drink name="tea" />
      <Drink name="coffee" />
    </div>
  );
}