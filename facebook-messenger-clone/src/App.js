import React, { useState, useEffect } from 'react';
import './App.css';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move'

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    db.collection('messages')
    .orderBy('timestamp', 'desc')
    .onSnapshot(snapshot =>{
      setMessages(snapshot.docs.map(doc=>({id: doc.id, message:doc.data()})))
    })
  }, [])

  useEffect(() => {
    setUsername(prompt("please enter your name"));
  }, [])

  const sendMessage = (event)=>{
    event.preventDefault();
    db.collection('messages').add({
      message:input,
      username:username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    // setMessages([...messages, {username:username, message:input}]);
    setInput('');

  }
  return (
    <div className="App">
      <h1>Facebook messenger app</h1>
      <h2>welcome {username}</h2>
      <form class = "app__form">
      <FormControl class="app__content">
        {/* <InputLabel>Enter message</InputLabel> */}
        <Input  class="input__field" placeholder="Enter message" value={input} onChange={event => setInput(event.target.value)} />
        <Button  disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessage}>Send</Button>
      </FormControl>
       </form> 
      {
        <FlipMove>
        {
          messages.map(({id, message}) => (
            <Message key={id} username= {username} message={message}/>
            ))
        }
        </FlipMove>
      }
    </div>
  );
}

export default App;