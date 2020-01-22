import React from 'react';
import './App.css';

var b1= {
  "posts": [
    { "id": 1, "title": "Post 1" },
    { "id": 2, "title": "Post 2" },
    { "id": 3, "title": "Post 3" }
  ],
  "comments": [
    { "id": 1, "body": "some comment", "postId": 1 },
    { "id": 2, "body": "some comment", "postId": 1 }
  ],
  "profile": {
    "name": "typicode"
  }
};
var myJSON = JSON.stringify(b1);

function App() {
  return (
    <div className="App">
    <pre>{myJSON}</pre>
    </div>
  );
}

export default App;
