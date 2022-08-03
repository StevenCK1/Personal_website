import "./contactMe.css";

function ContactMe() {
  return (
    <div className="contact-me-page-container" id="contact-me-page-container">
      <h1>This is the contact-me section</h1>
      <form name="contact" method="POST" data-netlify="true">
        <div>
          <label>
            First Name: <input type="text" name="name" />
          </label>
        </div>
        <div>
          <label>
            Last Name: <input type="text" name="name" />
          </label>
        </div>
        <div>
          <label>
            Your Email: <input type="email" name="email" />
          </label>
        </div>

        <div>
          <label>
            Message: <textarea name="message"></textarea>
          </label>
        </div>
        <div>
          <button type="submit">Send</button>
        </div>
      </form>
    </div>
  );
}

export default ContactMe;
