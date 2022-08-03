import "./contactMe.css";
import { MailOutlined } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, brands } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used

function ContactMe() {
  return (
    <div className="contact-me-page-container" id="contact-me-page-container">
      <div className="contact-me-icon-links">
        <FontAwesomeIcon icon={solid("user-secret")} />
        <FontAwesomeIcon icon={brands("twitter")} />
      </div>
      <div className="contact-me-title-container">
        <MailOutlined style={{ fontSize: "25px" }} />
        <span>Contact Me</span>

        <p>Let me know how I can help!</p>
      </div>

      <form
        name="contact-me"
        method="POST"
        data-netlify="true"
        onSubmit="submit"
      >
        <input type="hidden" name="form-name" value="contact" />
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
