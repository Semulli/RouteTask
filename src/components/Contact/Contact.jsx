import BannerImage from '../../assets/ss.jpg';
import './Contact.css';
import React from 'react'
import Layout from '../Layout';
const Contact = () => {
  return (
    <Layout>
    <div className="contact">
    <div
      className="leftSide"
      style={{ backgroundImage: `url(${BannerImage})` }}
    ></div>
    <div className="rightSide">
      <h1>Contact Us</h1>
      <form>
        <label>FullNmae</label>
        <input
          type="text"
          name="name"
          placeholder="Enter Your FullName..."
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter Your Email..."

        />
        <label>Message</label>
        <textarea
          rows="6"
          name="message"
          placeholder="Enter Your Message..."
        ></textarea>
      </form>
    </div>
  </div>
  </Layout>
  )
}

export default Contact