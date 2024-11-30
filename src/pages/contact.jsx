import React from "react";
import style from "../style/contact.module.css"
import Footer from "../components/Footer";
export const Contact = () => {
  return <>
  <h1>Contact us if you'd any problem with products!</h1> <form
  >
    <label htmlFor="firstName">FIRST NAME *</label>
    <input type="text" id="firstName" />

    <label htmlFor="email">EMAIL *</label>
    <input type="email" id="email" />

    <label htmlFor="message">MESSAGE *</label>
    <textarea id="message" rows="4" />

   

    <label htmlFor="lastName">LAST NAME *</label>
    <input type="text" id="lastName" />
    <button type="submit">SEND MESSAGE</button>
  </form>
  <Footer></Footer>
  </>
}; 
  export default Contact