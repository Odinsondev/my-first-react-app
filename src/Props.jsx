export {
  Gallery,
  Profile2,
  Profile3
};


//Challenge 1 of 3: Extract a component 
//This Gallery component contains some very similar markup for two profiles.
//Extract a Profile component out of it to reduce the duplication.
//You’ll need to choose what props to pass to it.


function getImageUrl(imageId, size = 's') {
  return (
    'https://i.imgur.com/' +
    imageId +
    size +
    '.jpg'
  );
}

/* export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <section className="profile">
        <h2>Maria Skłodowska-Curie</h2>
        <img
          className="avatar"
          src={getImageUrl('szV5sdG')}
          alt="Maria Skłodowska-Curie"
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession: </b> 
            physicist and chemist
          </li>
          <li>
            <b>Awards: 4 </b> 
            (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)
          </li>
          <li>
            <b>Discovered: </b>
            polonium (chemical element)
          </li>
        </ul>
      </section>
      <section className="profile">
        <h2>Katsuko Saruhashi</h2>
        <img
          className="avatar"
          src={getImageUrl('YfeOqp2')}
          alt="Katsuko Saruhashi"
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession: </b> 
            geochemist
          </li>
          <li>
            <b>Awards: 2 </b> 
            (Miyake Prize for geochemistry, Tanaka Prize)
          </li>
          <li>
            <b>Discovered: </b>
            a method for measuring carbon dioxide in seawater
          </li>
        </ul>
      </section>
    </div>
  );
} */

function Profile({person}) {
  return (
    <section className="profile">
        <h2>{person.name}</h2>
        <img
          className="avatar"
          src={getImageUrl(person.img)}
          alt={person.name}
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession: </b> 
            {person.profession}
          </li>
          <li>
            <b>Awards: {person.awardsNumber} </b> 
            {person.awards}
          </li>
          <li>
            <b>Discovered: </b>
            {person.discovered}
          </li>
        </ul>
      </section>
  )
}


function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        person={{
          name: 'Maria Skłodowska-Curie',
          img: 'szV5sdG',
          profession: 'physicist and chemist',
          awardsNumber: '4',
          awards: '(Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)',
          discovered: 'polonium (chemical element)'
        }}
      />
      <Profile
        person={{
          name: 'Katsuko Saruhashi',
          img: 'YfeOqp2',
          profession: 'geochemist',
          awardsNumber: '2',
          awards: '(Miyake Prize for geochemistry, Tanaka Prize)',
          discovered: 'a method for measuring carbon dioxide in seawater'
        }}
      />
    </div>
  );
}

//Challenge 2 of 3: Adjust the image size based on a prop 
//In this example, Avatar receives a numeric size prop which determines the
//<img> width and height.
//The size prop is set to 40 in this example.
//However, if you open the image in a new tab,
//you’ll notice that the image itself is larger (160 pixels).
//The real image size is determined by which thumbnail size you’re requesting.

//Change the Avatar component to request the closest image size based on the size prop.
//Specifically, if the size is less than 90, pass 's' (“small”)
//rather than 'b' (“big”) to the getImageUrl function.
//Verify that your changes work by rendering avatars with different values of
//the size prop and opening images in a new tab.

//Unable to complete as 'open image in new tab' does not work - imgur issue

//But could add this to Avatar:
//let thumbnailSize = 's';
//if (size > 90) {
//  thumbnailSize = 'b';
//}
//and change:
//src={getImageUrl2(person, 'b')}
//to
//src={getImageUrl2(person, thumbnailSize)}

function getImageUrl2(person, size) {
  return (
    'https://i.imgur.com/' +
    person.imageId +
    size +
    '.jpg'
  );
}

function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={getImageUrl2(person, 'b')}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

function Profile2() {
  return (
    <Avatar
      size={40}
      person={{ 
        name: 'Gregorio Y. Zara', 
        imageId: '7vQD0fP'
      }}
    />
  );
}


//Challenge 3 of 3: Passing JSX in a children prop 
//Extract a Card component from the markup below,
//and use the children prop to pass different JSX to it:

function Card({children}) {
  return (
    <div className="card">
      <div className="card-content">
        {children}
      </div>
    </div>
  )
}

function Profile3() {
  return (
    <div>
      <Card>
          <h1>Photo</h1>
          <img
            className="avatar"
            src="https://i.imgur.com/OKS67lhm.jpg"
            alt="Aklilu Lemma"
            width={70}
            height={70}
          />
      </Card>

      <Card>
          <h1>About</h1>
          <p>Aklilu Lemma was a distinguished Ethiopian scientist who discovered a natural treatment to schistosomiasis.</p>
      </Card>

      <Card>
        <p>Test</p>
      </Card>
    </div>
  );
}