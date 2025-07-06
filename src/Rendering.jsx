export {
  App2,
  App3,
  App4,
  App5,
  PackingList,
  PackingListChallenge1,
  PackingListChallenge2,
  DrinkList,
  List4,
  RecipeList,
  Poem
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


//Conditional Rendering
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


//Rendering Lists
//Challenge 1 of 4: Splitting a list in two 
//This example shows a list of all people.

//Change it to show two separate lists one after another: Chemists and Everyone Else.
//Like previously, you can determine whether a person is a chemist
//by checking if person.profession === 'chemist'.

const people = [{
  id: 0,
  name: 'Creola Katherine Johnson',
  profession: 'mathematician',
  accomplishment: 'spaceflight calculations',
  imageId: 'MK3eW3A'
}, {
  id: 1,
  name: 'Mario José Molina-Pasquel Henríquez',
  profession: 'chemist',
  accomplishment: 'discovery of Arctic ozone hole',
  imageId: 'mynHUSa'
}, {
  id: 2,
  name: 'Mohammad Abdus Salam',
  profession: 'physicist',
  accomplishment: 'electromagnetism theory',
  imageId: 'bE7W1ji'
}, {
  id: 3,
  name: 'Percy Lavon Julian',
  profession: 'chemist',
  accomplishment: 'pioneering cortisone drugs, steroids and birth control pills',
  imageId: 'IOjWm71'
}, {
  id: 4,
  name: 'Subrahmanyan Chandrasekhar',
  profession: 'astrophysicist',
  accomplishment: 'white dwarf star mass calculations',
  imageId: 'lrWQx8l'
}];

function getImageUrl(person) {
  return (
    'https://i.imgur.com/' +
    person.imageId +
    's.jpg'
  );
}

function List4() {
  /* const listItems = people.map(person =>
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  ); */
  
  const chemists = people.filter(function (something) {  //tried without arrow function
    return something.profession === 'chemist';
  })
  const listItems1 = chemists.map(person =>
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  );

  const nonChemists = people.filter(function (something) {
    return something.profession !== 'chemist';
  })
  const listItems2 = nonChemists.map(person =>
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  );

  return (
    <article>
      <h1>Scientists</h1>
      {/* <ul>{listItems}</ul> */}
      <h2>Chemists</h2>
      <ul>{listItems1}</ul>
      <h2>Non-chemists</h2>
      <ul>{listItems2}</ul>
    </article>
  );
}


//Challenge 2 of 4: Nested lists in one component 
//Make a list of recipes from this array!
//For each recipe in the array, display its name as an <h2> and
//list its ingredients in a <ul>.

const recipes = [{
  id: 'greek-salad',
  name: 'Greek Salad',
  ingredients: ['tomatoes', 'cucumber', 'onion', 'olives', 'feta']
}, {
  id: 'hawaiian-pizza',
  name: 'Hawaiian Pizza',
  ingredients: ['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple']
}, {
  id: 'hummus',
  name: 'Hummus',
  ingredients: ['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini']
}];

function RecipeList() {
  const recipeItems = recipes.map(function (food) {
    return <li>
      <h2>{food.name}</h2>
      <ul>
        {food.ingredients.map(function (ingredient) {
          return <li>{ingredient}</li>;
        })}
      </ul>
    </li>;
  })

  return (
    <div>
      <h1>Recipes</h1>
      <ul>{recipeItems}</ul>
    </div>
  );
}


//Challenge 3 of 4: Extracting a list item component 
//This RecipeList component contains two nested map calls.
//To simplify it, extract a Recipe component from it which will accept id,
//name, and ingredients props. Where do you place the outer key and why?

//Have not learned keys yet


//Challenge 4 of 4: List with a separator 
//This example renders a famous haiku by Tachibana Hokushi,
//with each line wrapped in a <p> tag.
//Your job is to insert an <hr /> separator between each paragraph.
//Your resulting structure should look like this:

//<article>
  //<p>I write, erase, rewrite</p>
  //<hr />
  //<p>Erase again, and then</p>
  //<hr />
  //<p>A poppy blooms.</p>
//</article>

//A haiku only contains three lines,
//but your solution should work with any number of lines.
//Note that <hr /> elements only appear between the <p> elements,
//not in the beginning or the end!

const poem = {
  lines: [
    'I write, erase, rewrite',
    'Erase again, and then',
    'A poppy blooms.',
  ]
};

function Poem() {
  return (
    <article>
      {poem.lines.map((line, index) =>
        <>
          <p key={index}>
            {line}
          </p>
          {index < (poem.lines.length - 1) ? <hr/> : null}
        </>  //challenge had different official solutions
      )}
    </article>
  );
}