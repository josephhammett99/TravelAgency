import React, { useState, useEffect } from 'react';

const Contact = () => {
  const [name, setName] = useState([]);
  const [comment, setComment] = useState([]);
  const [email, setEmail] = useState([]);

  const addComment = event => {
    console.log(comment);
    console.log(name);
    console.log(email);

    fetch(`http://localhost:3020/api/contacts/create/${comment}/${email}/${name}`, { method: 'POST' })
      .then(respose => respose.json())
      .then(data => {
        console.log(data);
      });
    window.location.reload();
    event.preventDefault()
  }
  const [cont, setCont] = useState('')
  return (
    <div className="bg-header">
      <div className="">
        <div className="container cont-size">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="intro body">Contact Us</h1>
            </div>
          </div>
        </div>
        <form>
          <div className="container cont-size white-box">
            <div className="row">
              <div className="col-lg-12">
                <label htmlFor="name" className="pad">Enter name</label>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <input id="name" name="name" type="text" onChange={event => setName(event.target.value)} />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <label htmlFor="comment">Enter comment</label>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <textarea rows="4" cols="50" id="comment" name="comment" type="text" onChange={event => setComment(event.target.value)} />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <label htmlFor="email">Enter email</label>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <input id="email" name="email" type="email" onChange={event => setEmail(event.target.value)} />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <button onClick={addComment}>Send</button>
              </div>
            </div>
          </div>
        </form >
      </div >
    </div>
  );
}

export default Contact;