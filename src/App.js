import React from 'react';
import "./App.css"
//import Header from './components/Header';

export default function App() {
  const contacts = {
    greeting: "Hi, I'M",
    firstName: "Martin",
    lastName: "Nwankwo",
    skill: "Front-End Developer",
    phone: "+234 703 300 0258, +234 708 115 6697",
    email: "E-mail: cmart4god@yahoo.com",
    services: "I help firms, MSMEs and agencies grow and enhance their businesses."
  }
  return (
    <div className="main-app">
      <div className='my-pix'>
      <img src='/Images/me.jpg' className='me' />
      </div>
        <p className="header-greeting">
            {contacts.greeting}
        </p>
        <h2 className="header-title">
            {contacts.lastName} {contacts.firstName}
        </h2>
        <p className='description'>{contacts.skill}</p>
        <footer className='content'>
          <button className='btn-1'>
            <img className='twitt-img' src='https://th.bing.com/th/id/OIP.mjoG94zAqNefzlni3m2hRgHaHa?w=196&h=196&c=7&r=0&o=5&pid=1.7' />
            <a href='https://twitter.com/Cmart4God/' className='twitt'>
              Twitter
            </a>
          </button>
          <button className='btn-2'>
            <img className='link-img' src='https://th.bing.com/th/id/OIP.lP3ZKEQTnezleNemx3OvbgHaHa?w=203&h=203&c=7&r=0&o=5&pid=1.7' />
            <a href='https://linkedln.com/martinnwankwo' className='linkdln'>
              Linkedln
            </a>
          </button>
          <p className='phone'>
            Phone: {contacts.phone}
          </p>
          <p className='email'>
            {contacts.email}
          </p>
          <p className='services'>
            {contacts.services}
          </p>
        </footer>
    </div>
  );
}

