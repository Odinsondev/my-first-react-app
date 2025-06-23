export default function Bio() {
  const testObject = {
    noun: 'pictures',
    noun2: 'mugshots'
  }
  return (
    <>
      <div className="intro">
        <h1>Welcome to Gotham City!</h1>
      </div>
      <p style={{                   //second pair of crly brackets is to pass an object
        backgroundColor: 'black',   //backgroundColor not background-color
        color: 'purple',
      }}
      className="summary">
        You can find my thoughts here.
        <br/>
        <br/>
        <b>And <i>{testObject.noun2}</i></b> of criminals!   {/* can reference object values */}
      </p>
    </>
  );
}
