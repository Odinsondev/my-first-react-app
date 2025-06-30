//Challenge 1 of 3: Fix the mistake
//This code crashes with an error saying Objects are not valid as a React child

//Challenge 2 of 3: Extract information into an object
//Extract the image URL into the person object.

//Challenge 3 of 3: Write an expression inside JSX curly braces 
//In the object below, the full image URL is split into four parts:
//base URL, imageId, imageSize, and file extension.

//We want the image URL to combine these attributes together:
//base URL (always 'https://i.imgur.com/'), imageId ('7vQD0fP'), imageSize ('s'),
//and file extension (always '.jpg').
//However, something is wrong with how the <img> tag specifies its src.

const person = {
  name: 'Gregorio Y. Zara',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  },
  image: 'https://i.imgur.com/7vQD0fPs.jpg'
};

const baseUrl = 'https://i.imgur.com/';
const person2 = {
  name: 'Gregorio Y. Zara',
  imageId: '7vQD0fP',
  imageSize: 's',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};

export default function TodoList () {
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>  {/* was <h1>{person}'s Todos</h1> */}
      <img
        className="avatar"
        src={person.image}
        alt="Gregorio Y. Zara"
      />
      <br/>
      <img
        className="avatar"
        src={baseUrl + person2.imageId + person2.imageSize + '.jpg'}
        alt={person2.name}
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}
