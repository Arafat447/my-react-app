import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const friends =[
    {name:"Taiyeba",age:"19"},
    {name:"Sujon",age:"29"},
    {name:"Shuhag",age:"23"},
    {name:"Rony",age:"22"},
    {name:"Rudro",age:"21"}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <p>I am React Person</p>
        <Counter></Counter>
        <Users></Users>
        {
          friends.map(friend=><FriendDetail friend={friend}></FriendDetail>)
        }
        
      </header>
    </div>
  );
}
function Counter(){
  const [count,setCount] = useState(0);
  const handleIncrease = ()=>{
    const newCount = count+1;
    setCount(newCount);
  }
  return(
    <div>
      <h1>Count:{count}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={()=>setCount(count-1)}>Decrease</button>
    </div>
  )
}
function Users(){
  const [user,setUser] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUser(data))
  },[])
  return(
    <div>
      <h3>Dynamic Users {user.length}</h3>
      <ul>
        {
          user.map(users => <li>{users.name}</li>)
        }
      </ul>
      
    </div>
  )
}
function FriendDetail(props){
  const friendStyle = {
    border:'1px solid steelblue',
    borderRadius:'15px',
    margin:'10px',
    backgroundColor:'gray',
    height:'200px',
    width:'200px'
  }
  const {name,age} = props.friend;
  return(
    <div style={friendStyle}>
      <h1>{name}</h1>
      <h2>{age}</h2>
    </div>
  )
}
export default App;
