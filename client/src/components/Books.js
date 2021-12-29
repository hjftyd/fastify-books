import React, { Component } from 'react';
import './book.css';
import { Link } from "react-router-dom";


const axios = require ('axios').default

const baseURL = `http://localhost:3000/api/`;


//hooki sdleay()
class Book extends Component {

  //usestate
  state = {
    _id: '',
    title: '',
    year: '',
    author: '',
    books: [],
  }
//useeffect
  componentDidMount = () => {
    this.getBook();
  };

  handleSubmit = event => {
    event.preventDefault();

    axios.delete(`${baseURL}books/${this.state.id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  getBook = () => {
    axios.get(`${baseURL}books`)
    .then((response) => {
      const data = response.data;
      this.setState({ books: data});
      console.log('Data has been received!');
    })
    .catch(() => {
      console.log('Error!');
    });
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };
  
  submit = (event) => {
    event.preventDefault();

    const payload = {
      
      title: this.state.title,
      year: this.state.year,
      author: this.state.author,
    };

    axios({
      url: 'http://localhost:3000/api/books',
      method: 'POST',
      headers: {'Access-Control-Allow-Origin': '*'},
      data: payload
    })
      .then(() => {
        console.log('Data has been sent to the server');
        this.resetUserInputs();
        this.getBook();
      })
      .catch(() => {
        console.log('Internal server error');
      });;
  };

  resetUserInputs = () => {
    this.setState({
      _id: '',
      title: '',
      year: '',
      author: '',
    });
  };

  displayBook = (books) => {
    if (!books.length) return null;
    
    return books.map((book, key) => (
      <div className='borderr' key={key} onSubmit={this.handleSubmit}>
        <h3>id: {book._id}</h3>
        <h3>title: {book.title}</h3>
        <h3>year: {book.year}</h3>
        <h3>author: {book.author}</h3>
        <div>
        <Link to={`/books/${book._id}`}>details</Link>
      </div>
      </div>
      
    ));
  };
  

render() {
  return (
    <div>
     
      <div>
        <h1 className='left'>Book</h1>
        <form className='left' onSubmit={this.submit}>
            <div className="form-input">
              <input 
                type="text"
                name="title"
                placeholder="Title"
                value={this.state.title}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-input">
              <input 
                type="number"
                name="year"
                placeholder="Year"
                value={this.state.year}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-input">
              <input 
                type="text"
                name="author"
                placeholder="Author"
                value={this.state.author}
                onChange={this.handleChange}
              />
            </div>
            <div>
            </div>
            <button type='submit'>Submit</button>
          </form>
          <form className='left' onSubmit={this.handleSubmit}>
            <label>
              Book ID:
              <input type="text" name="id" onChange={this.handleChange} />
            </label>
            <button type="submit">Delete</button>
          </form>
          
        <div>
          {this.displayBook(this.state.books)}
        </div>
        <div>
        </div>
        </div>
      </div>
  );  
}
}

export default Book;
