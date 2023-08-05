import React from 'react';

function Contact() {
  return (
    <section className="contact">
      <h2>Contact Us</h2>
      <form>
        <div className="form-group">
          <input type="text" placeholder="Name" />
        </div>
        <div className="form-group">
          <input type="email" placeholder="Email" />
        </div>
        <div className="form-group">
          <textarea placeholder="Message"></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Contact;
