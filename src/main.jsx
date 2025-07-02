import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Portrait, Vengeance} from './Greeting.jsx'
import Test from './Test.jsx'
import Bio from './Assignment.jsx'
import TodoList from './Challenges.jsx'
import {
  App2,
  App3,
  App4,
  App5,
  PackingList,
  PackingListChallenge1,
  PackingListChallenge2,
  DrinkList
} from './Rendering.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Portrait />
    <Vengeance />
    <Test />
    <Bio />
    <TodoList />
    <App2 />
    <App3 />
    <App4 />
    <App5 />
    <PackingList />
    <PackingListChallenge1 />
    <PackingListChallenge2 />
    <DrinkList />
  </StrictMode>,
)


//map() reminder

const array = [1, 2, 3];

//1
const array2 = array.map(someFunction);

function someFunction(number) {
  return number * 2;
}

console.log(array2);

//2
const array3 = array.map(function someFunction2(num) {
  return num * 3;
})

console.log(array3);

//3
const array4 = array.map((num) => num * 4);

console.log(array4);