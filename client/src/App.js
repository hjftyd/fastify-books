import React, { Component } from 'react';
import './App.css';
import Books from './components/Books';
import SingleBook from './components/SingleBook';
import { Route, Routes} from 'react-router-dom'
const axios = require ('axios').default

class App extends Component {

render() {
  return (
    <div>
      <div className='mb'>
        <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/books/:id" element={<SingleBook />} />
        </Routes>
      </div>                            
  </div>


  );  
}
}


export default App;


