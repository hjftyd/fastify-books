import React, { useState, useEffect } from 'react';
import './book.css';
import { useParams } from "react-router-dom";
import axios from "axios";
import dayjs from "dayjs";

const baseURL = `http://localhost:3000/api/`;
const SingleBook = () => {
  let { id} = useParams();
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [booksObject, setBooksObject ] = useState({})
  

  useEffect(() => {
    axios.get(`${baseURL}books/byId/${id}`).then(res => {
      setBooksObject(res.data);  
      console.log(res.data)
    });
    
    axios.get(`${baseURL}comments/${id}`).then(res => {
      setComments(res.data);
      console.log(res.data)
    });
}, []);


const addComment = () => {
  axios
    .post(`${baseURL}comments`, {
      content: newComment,
      bookId: id,    
    })
    .then((res) => {
      const commentToAdd = { content: newComment };
      setComments([...comments, commentToAdd]);
      setNewComment("");
    });
};


  return (
    <div>
     <div className='borderr'>       
         <h3>title: {booksObject.title}</h3>
         <h3>year: {booksObject.year}</h3>
         <h3>author: {booksObject.author}</h3>                 
       </div>
       <div>
        <div>
          <input
            type="text"
            placeholder="Comment..."
            autoComplete="off"
            value={newComment}
            onChange={(event) => {
              setNewComment(event.target.value);
            }}
          />
          <button onClick={addComment}> Add Comment</button>
        </div>
        <div>
          {comments.map((comment, key) => {
            return (
              <div className='borderr' key={key}>               
                comment: {comment.content} 
                <div>            
                {dayjs(comment.date).format('DD.MM.YYYY')}
                </div> 
                <div>
                {dayjs(comment.date).format('HH:mm')}
                </div>                     
              </div>               
            );
          })}         
        </div>       
    </div>
    </div>
  );
}

export default SingleBook
