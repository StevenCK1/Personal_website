import "./contactMe.css";

function ContactMe() {
  return (
    <div className="contact-me-page-container" id="contact-me-page-container">
      <p>This is the contact-me section</p>
      <form
        name="contact-me"
        method="POST"
        data-netlify="true"
        onSubmit="submit"
      >
        <div>
          <label>
            First Name: <input type="text" name="first-name" />
          </label>
        </div>
        <div>
          <label>
            Last Name: <input type="text" name="last-name" />
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
